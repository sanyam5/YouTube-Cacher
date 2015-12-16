import db_connect
import os.path
from os import system

DDIR = "downloads/"
YBDIR = "http://localhost/youbox/"
video_types = ['mp4','ogg']

 
 
def  download_from_internet(vid) :
	url = '"https://www.youtube.com/watch?v={0}"'.format(vid)
	dest = '{0}{1}.mp4'.format(DDIR,vid)
	command = 'youtube-dl {0} -o {1}'.format(url,dest)
	system(command)
	if os.path.isfile(dest) :
		return "downloaded"
	else:
		return "failed"
	# unmark_from_download() 
	# sync_with_server() 
 
def  download_from_network(vid , url) :
	dest = '{0}{1}.mp4'.format(DDIR,vid)
	urllib.urlretrieve(url, dest)
	if os.path.isfile(dest) :
		return "downloaded"
	else:
		return "failed"

def  idle_download() :
	# code to pick vid from marked ones 
	# if not exists return 0 
	# else 
	download_from_internet(vid) 
	return 1 

	
 
def  get_from_server(vid) :
	# currently server support is disabled
	return ""
 
	 
 
def  get_from_local(vid) :
	for t in video_types:
		f = DDIR+vid+"."+t
		if os.path.isfile(f) :
			return YBDIR+f
	return ""
 

def get_url(vid,rid):
	local = get_from_local(vid)
	if local == "":
		glb = get_from_server(vid)
		if glb == "":
			status = download_from_internet(vid)
			db_connect.executer("update requests set dtime = now(), foundat = 'internet',log = '{1}' where rid = {0}".format(rid,status))
			return get_from_local(vid)
		else:
			status = download_from_network(vid,glb)
			db_connect.executer("update requests set dtime = now(), foundat = 'global', link = '{0}',log = '{2}' where rid = {1}".format(glb,rid,status))
			return get_from_local(vid)
	else:
		db_connect.executer("update requests set dtime = now(), foundat = 'local', link = '{0}' where rid = {1}".format(local,rid))
		return local
 
 
 
def  request(vid, requester = "anon" ) : 
	db_connect.executer("insert into requests(vid,requester,rtime) values ('{0}', '{1}',now())".format(vid,requester))
	db_connect.executer("select last_insert_id()")
	rid = db_connect.fetcher()[0][0]
	url = get_url(vid,rid)
	db_connect.db.commit()
	return url 
 
 
 