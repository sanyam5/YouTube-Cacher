 
def  increment_count(v_id) :
 
 
 
def  mark_for_download(v_id): #if not exists 
 
 
 
def  unmark_from_download(v_id): #if exists 
 
 
 
def  sync_with_server() :
 
 
 
def  download_from_internet(v_id) :
 
	# code for fetching download url 
	# code for downloading 
	# code for saving with filename v_id 
	unmark_from_download() 
	sync_with_server() 
 
def  download_from_network(v_id , url) :
 
	# code for downloading 
	# code for saving with filename v_id 
	unmark_from_download() 
	sync_with_server() 
 
def  idle_download() :
 
	# code to pick v_id from marked ones 
	# if not exists return 0 
	# else 
	download_from_internet(v_id) 
	return 1 
 
def  get_from_server(v_id) :
 
	 
 
def  get_from_local(v_id) :
 
 
 
 
def  get_url(v_id) :
 
	local = get_from_local(v_id) 
	if(local == "")  
	 
		glb =  get_from_server(v_id) 
		if(glb == "") return "" 
		else 
		 
			download_from_internet(v_id,glb) 
			return get_from_local(v_id) 
		 
	 
	else 
		return local 
 
 
 
def  request(v_id) :
 
	increment_count(v_id) 
	url = get_url(v_id) 
	return url 
 
 
 