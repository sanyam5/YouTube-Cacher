from django.shortcuts import render
from django.http import HttpResponse
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
            return HttpResponse("The request has been registered.")
        except Exception as e:
            return HttpResponse("Error: %s"%str(e))
    else:
        return HttpResponse("Registering videos is not available for %s with path: %s"%(video_site, parsed.path))
    return HttpResponse("Thanks for requesting %s"%req.GET['video_url'])
