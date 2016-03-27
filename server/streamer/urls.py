from django.conf.urls import url
from django.http import HttpResponse
from . import views

urlpatterns = [
        url(r'^$', views.index, name='index'),
        url(r'^(?P<video_site>(.*))/(?P<video_id>(.*))$', views.watch, name='watch'),
        ]
