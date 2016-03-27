from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible
from django.db import models
from django.utils import timezone
from django.db.models import Count
from server import constants
from sets import Set

# Create your models here.
@python_2_unicode_compatible
class Video(models.Model):
    video_site = models.CharField(max_length = 200)
    video_id = models.CharField(max_length = 200)
    video_name = models.CharField(max_length=200)
    std_url = models.CharField(max_length=200)
    class Meta:
        unique_together = ('video_site', 'video_id')
    def __str__(self):
        return "%s from (%s,%s)"%(self.video_name, self.video_site,self.video_id)

@python_2_unicode_compatible
class Request(models.Model):
    video = models.ForeignKey(Video,on_delete=models.CASCADE)
    req_time = models.DateTimeField('time of request')
    requester = models.CharField(max_length = 200)
    def __str__(self):
        return "Requested video %s at time %s by %s"%(self.video, self.req_time,self.requester)
    @staticmethod
    def get_top(num=constants.NUM_MUST_HAVE, days=constants.RELEVANT_HISTORY): 
        today = timezone.now()
        days_ago = today - timezone.timedelta(days=days) 
        requests = Request.objects.filter(req_time__gte = days_ago)
        frequencies = requests.values('video').annotate(freq = Count('video'))
        frequencies = {elem['video']:elem['freq'] for elem in frequencies if elem['freq'] >= constants.MIN_FREQ} 
        most_frequent = sorted(frequencies, key=frequencies.get, reverse=True)
        most_frequent = most_frequent[:num]
        return Set(most_frequent)



@python_2_unicode_compatible
class Download(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    time = models.DateTimeField('time of download')
    success = models.BooleanField()
    def __str__(self):
        return "The video %s was download %s at %s"%(self.video, ("successfully" if success else "unsuccessfully"), time)


@python_2_unicode_compatible
class Location(models.Model):
    video = models.ForeignKey(Video,on_delete=models.CASCADE)
    on_localhost = models.CharField(max_length = 200)
    on_network =  models.CharField(max_length = 200)
    class Meta:
        unique_together = ('video',)
    def __str__(self):
        return "Video %s located at %s and %s"%(self.video, self.on_localhost, self.on_network)
    @staticmethod
    def get_local():
         local = Location.objects.exclude(on_localhost__isnull=True).exclude(on_localhost='').values('video')
         local = [elem['video'] for elem in local]
         return Set(local) 


