from django.shortcuts import render
from django.http import HttpResponse
import os
import mimetypes
from django.http import StreamingHttpResponse
from wsgiref.util import FileWrapper
from server import constants
from bookkeeper.models import Location, Video
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist
# Create your views here.

def index(request):
    return HttpResponse("Hey this is the streamer.")

def watch(request, video_site, video_id):
    try:
        video = Video.objects.get(video_site=video_site, video_id=video_id)
        location = Location.objects.get(video=video)
    except ObjectDoesNotExist as e:
        raise Http404("Internal Video database does not have any video from site %s with id %s. The caught error messae is: %s"%(video_site, video_id, str(e))) 
    except Exception as e:
        return HttpResponse(str(e), status = 500)
    filename = location.on_localhost
    the_file = constants.DOWNLOAD_DIR + "/" + filename
    chunk_size = 8192
    response = StreamingHttpResponse(FileWrapper(open(the_file), chunk_size),
                           content_type=mimetypes.guess_type(the_file)[0])
    response['Content-Length'] = os.path.getsize(the_file)    
    response['Content-Disposition'] = "filename=%s" % filename
    return response
    # return HttpResponse("You wanna watch video with video_id %s from video_site %s"%(video_id, video_site))
