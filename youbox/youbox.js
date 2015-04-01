//TODO : For security and integrity do md5sum checking

function increment_count(v_id)
{

}
function mark_for_download(v_id) //if not exists
{

}
function unmark_from_download(v_id) // if exists
{

}
function sync_with_server()
{

}
function download_from_internet(v_id)
{
	//code for fetching download url
	//code for downloading
	//code for saving with filename v_id
	unmark_from_download();
	sync_with_server();
}
function download_from_network(v_id,url)
{
	//code for downloading
	//code for saving with filename v_id
	unmark_from_download();
	sync_with_server();
}
function idle_download()
{
	//code to pick v_id from marked ones
	//if not exists return 0;
	//else
	download_from_internet(v_id);
	return 1;
}
function get_from_server(v_id)
{
	
}
function get_from_local(v_id)
{

}

function get_url(v_id)
{
	var local = get_from_local(v_id);
	if(local == "") 
	{
		var glb =  get_from_server(v_id);
		if(glb == "") return "";
		else
		{
			download_from_internet(v_id,glb);
			return get_from_local(v_id);
		}
	}
	else
		return local;
}


function request(v_id)
{
	increment_count(v_id);
	var url = get_url(v_id);
	return url;
}
