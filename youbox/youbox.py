import db_connect.py
import os.path


DDIR = "./downloads/"
video_types = ['mp4','ogg']
def  increment_count(vid) :

 
 
def  mark_for_download(vid): #if not exists 
 
 
 
def  unmark_from_download(vid): #if exists 
 
 
 
def  sync_with_server() :
 
 
 
def  download_from_internet(vid) :
 
	# code for fetching download url 
	# code for downloading 
	# code for saving with filename vid 
	unmark_from_download() 
	sync_with_server() 
 
def  download_from_network(vid , url) :
 
	# code for downloading 
	# code for saving with filename vid 
	unmark_from_download() 
	sync_with_server() 
 
def  idle_download() :
 
	# code to pick vid from marked ones 
	# if not exists return 0 
	# else 
	download_from_internet(vid) 
	return 1 
 
def  get_from_server(vid) :
 
	 
 
def  get_from_local(vid) :
	for t in video_types:
		f = DDIR+vid+"."+t
		if os.path.isfile(f) :
			return f
	return ""
 

def get_url(vid,rid):
	local = get_from_local(vid)
	if local == "":
		glb = get_from_server(vid)
		if glb == "":
			link = download_from_internet(vid)
			executer("update requests set dtime = now(), foundat = 'internet', link = '{0}' where rid = {1}".format(link,rid))
			return get_from_local(vid)
		else:
			download_from_network(vid,glb)
			executer("update requests set dtime = now(), foundat = 'global', link = '{0}' where rid = {1}".format(glb,rid))
			return get_from_local(vid)
	else:
		executer("update requests set dtime = now(), foundat = 'local', link = '{0}' where rid = {1}".format(local,rid))
		return local
 
 
 
def  request(vid, requester = "anon" ) : 
	executer("insert into requests(vid,requester,rtime) values ('{0}', '{1}',now())".format(vid,requester))
	executer("select last_insert_id()")
	rid = fetcher()[0][0]
	url = get_url(vid,rid) 
	return url 
 
 
 