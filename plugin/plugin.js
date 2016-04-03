//TODO: Get a nice looking player for substitute

function get_vid()
{

}

function replace_player(url)
{
	var child = document.getElementById("player-mole-container");
    var placer = document.getElementById("placeholder-player");
    var video = document.createElement("video");
    video.src = url;
    video.autoPlay = true;
    video.controls = true;
    video.width = "640";
    video.height = "390";
    var par = child.parentNode;
    par.removeChild(child);
    placer.parentNode.removeChild(placer);
    par.appendChild(video);
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
