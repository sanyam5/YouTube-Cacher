//TODO: Get a nice looking player for substitute

function get_vid()
{

}

function replace_player(url)
{

}

function set_page()
{
	var v_id = get_vid();
	var url = request(v_id);
	if(url != "")
	{
		replace_player(url);
	}
	else
	{
		//leave as it is
	}
}