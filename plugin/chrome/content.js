
function replace_player(url)
{

    var video = document.createElement("video");
    video.setAttribute("id","ytcacher-video");
    video.src = url;
    video.autoplay = true;
    video.controls = true;
    //TODO: get a trigger on when the video completes and fire the same events as youtube would do on the end of its video.
    video.width = "640"; //TODO: make these consistent with youtube's layout.
    video.height = "390";

    var child = document.getElementById("player-mole-container");
    var par = document.getElementById("player");
    if(child && par)
    {
        par.removeChild(child);
    }
    var placer = document.getElementById("placeholder-player");
    if(placer)
        placer.parentNode.removeChild(placer);
    //remove existing video
    var curvideo = document.getElementById("ytcacher-video");
    if(curvideo)
    {
        vidpar = curvideo.parentNode;
        vidpar.removeChild(curvideo);
        vidpar.appendChild(video);
    }
    else
    {
        par.appendChild(video);
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setpage(url){
    replace_player(url);
}

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //here we get the new

    // console.log("URL CHANGED: " + request.data.url);
    chrome.runtime.sendMessage({type: "check", video_url:request.data.url}, function(response) {
    if (response.url != '')
        // alert("got response " + response.url);
        setTimeout(function(){
            setpage(response.url);
        }, 2000); //TODO: bind setpage to some event rather than a timeout, such that it is ensured that page has loaded fully.
    });

});

