from django.db.models.signals import post_save 
from django.dispatch import receiver
from bookkeeper.models import Video, Request, Location, Download
from django.db.models import Count
from django.utils import timezone
from threading import Lock
import youtube_dl
import os
from server import constants

DOWNLOAD_DIR = constants.DOWNLOAD_DIR

ydl = youtube_dl.YoutubeDL({'outtmpl': DOWNLOAD_DIR + "/%(title)s-%(id)s.%(ext)s"}) 
@receiver(post_save, sender=Request)
def downloader(sender, **kwargs):
    must_have = Request.get_top()
    downloaded = Location.get_local()
    with downloader.lock:
        for video_id in must_have:
            if video_id not in downloaded:
                video = Video.objects.get(pk=video_id)
                if "www.youtube.com" not in video.video_site:
                    print "Only youtube is supported at the moment. Cannot download %s"%(video)
                    continue
                print "Downloading ", video
                success = False
                try:
                    code = ydl.download([video.std_url])
                    # it has prolly downloaded lets check on disk and then update on locations
                    files = os.listdir(DOWNLOAD_DIR)
                    for file in files:
                        if os.path.isfile(DOWNLOAD_DIR + "/" + file):
                            print "Successfully downloaded %s"%(video)
                            l = Location(video=video, on_localhost=file)
                            l.save()
                            success = True
                            break 
                    if not success:
                        print "Failed to download %s. The retcode is %d"%(video, code)
                except Exception as e:
                    print "Error while downloading %s: %s"%(video,str(e))
                d = Download(video=video,time=timezone.now(),success=success)
                d.save()


downloader.lock = Lock()
