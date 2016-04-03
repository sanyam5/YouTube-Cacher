from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Video, Request, Location
import youtube_dl
import urlparse
from django.utils import timezone

# Create your views here.
def index(request):
    all_videos = Video.objects.all()
    out = '\n'.join([video.video_name for video in all_videos])
    return HttpResponse(out)

def request(req):
    video_url = req.GET['video_url']
    requester = req.GET['requester']
    parsed = urlparse.urlparse(video_url)
    video_site = parsed.netloc
    if video_site == "www.youtube.com" and parsed.path == "/watch":
        try:
            video_id = urlparse.parse_qs(parsed.query)['v'][0]
            video, created = Video.objects.get_or_create(video_site=video_site, video_id=video_id, std_url = "http://" + video_site + "/watch?v=" + video_id)
            r = Request(video=video, req_time =timezone.now(), requester = requester)
            r.save()
            # return HttpResponse("The request has been registered.")
            try:
                location = Location.objects.get(video=video)
                if location.on_localhost:
                    return JsonResponse({'ok':True,'available':True, 'url':"http://localhost:8000/streamer/%s/%s"%(video_site,video_id) })
                else:
                    return JsonResponse({'ok':True, 'available':False,'reason':"The video does not exist in cache."})
            except Exception as e:
                return JsonResponse({'ok':True, 'available':False, 'reason':"Probably the video does not exist in cache. Look at the following error for more information: %s"%(str(e))})
        except Exception as e:
            # return HttpResponse("Error: %s"%str(e))
            return JsonResponse({'ok':False, 'error':"Error: %s"%str(e)})
    else:
        # return HttpResponse("Registering videos is not available for %s with path: %s"%(video_site, parsed.path))
        return JsonResponse({'ok':False, 'error':"Registering videos is not available for %s with path: %s"%(video_site, parsed.path)})


