
// function replace_player()
// {

//     var video = document.createElement("video");
//     video.setAttribute("id","ytcacher-video");
//     video.src = url;
//     video.autoplay = true;
//     video.controls = true;
//     //TODO: get a trigger on when the video completes and fire the same events as youtube would do on the end of its video.
//     video.width = "640"; //TODO: make these consistent with youtube's layout.
//     video.height = "390";

//     var child = document.getElementById("player-mole-container");
//     var par = document.getElementById("player");
//     if(child && par)
//     {
//         par.removeChild(child);
//     }
//     var placer = document.getElementById("placeholder-player");
//     if(placer)
//         placer.parentNode.removeChild(placer);
//     //remove existing video
//     var curvideo = document.getElementById("ytcacher-video");
//     if(curvideo)
//     {
//         vidpar = curvideo.parentNode;
//         vidpar.removeChild(curvideo);
//         vidpar.appendChild(video);
//     }
//     else
//     {
//         par.appendChild(video);
//     }
// }

// function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     url = url.toLowerCase(); // This is just to avoid case sensitiveness
//     name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// function setpage(){
//     requester = "chrome_plugin_0.1";
//     var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://localhost:8000/bookkeeper/request?par=0", true);
    // xhr.send();
    // var result = xhr.responseText;
//     alert(result);
//     id = getParameterByName('v', url)
//     replace_player("http://localhost:8000/streamer/www.youtube.com/"+id);
// }
// setpage();

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

alert("hola1");
var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8000/bookkeeper/request?par=0", true);
    xhr.send();
    var result = xhr.responseText;
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     //here we get the new

//     // console.log("URL CHANGED: " + request.data.url);

//     // var xhr = new XMLHttpRequest();
//     // chrome.runtime.getCurrent(function(tab){
//     //         // console.log(tab.url);
//     //         alert(tab.url);
//     //     }
//     // );
// // alert(document.location.href);

//     // console.log(sender);
//     // getCurrentTabUrl(function(url){
//         // alert(sender.id
//     // })
//     // url = document.location.href
//     // var placer = document.getElementById("watch-uploader-info");
//     // var script = document.createElement("script");
//     // script.setAttribute("id","ytcacher-script");
//     // text = 'url = "'+url+'"';
//     // text += '\n\nfunction replace_player()\n{\n\n    var video = document.createElement("video");\n    video.setAttribute("id","ytcacher-video");\n    video.src = url;\n    video.autoplay = true;\n    video.controls = true;\n    //TODO: get a trigger on when the video completes and fire the same events as youtube would do on the end of its video.\n    video.width = "640"; //TODO: make these consistent with youtube\'s layout.\n    video.height = "390";\n\n    var child = document.getElementById("player-mole-container");\n    var par = document.getElementById("player");\n    if(child && par)\n    {\n        par.removeChild(child);\n    }\n    var placer = document.getElementById("placeholder-player");\n    if(placer)\n        placer.parentNode.removeChild(placer);\n    //remove existing video\n    var curvideo = document.getElementById("ytcacher-video");\n    if(curvideo)\n    {\n        vidpar = curvideo.parentNode;\n        vidpar.removeChild(curvideo);\n        vidpar.appendChild(video);\n    }\n    else\n    {\n        par.appendChild(video);\n    }\n}\n\nfunction getParameterByName(name, url) {\n    if (!url) url = window.location.href;\n    url = url.toLowerCase(); // This is just to avoid case sensitiveness\n    name = name.replace(/[\\[\\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name\n    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),\n        results = regex.exec(url);\n    if (!results) return null;\n    if (!results[2]) return \'\';\n    return decodeURIComponent(results[2].replace(/\\+/g, " "));\n}\n\nfunction setpage(){\n    requester = "chrome_plugin_0.1";\n    var xhr = new XMLHttpRequest();\n    xhr.open("GET", "http://localhost:8000/bookkeeper/request?par=0", true);\n    xhr.send();\n    var result = xhr.responseText;\n    alert(result);\n    id = getParameterByName(\'v\', url)\n    replace_player("http://localhost:8000/streamer/www.youtube.com/"+id);\n}\nsetpage();\n';
//     // script.innerHTML = text
//     // placer.appendChild(script);

//     // getCurrentTabUrl(function(url){
//     //     var placer = document.getElementById("watch-uploader-info");
//     //     var script = document.createElement("script");
//     //     script.setAttribute("id","ytcacher-script");
//     //     text = 'url = '+url;
//     //     text += '\n\nfunction replace_player()\n{\n\n    var video = document.createElement("video");\n    video.setAttribute("id","ytcacher-video");\n    video.src = url;\n    video.autoplay = true;\n    video.controls = true;\n    //TODO: get a trigger on when the video completes and fire the same events as youtube would do on the end of its video.\n    video.width = "640"; //TODO: make these consistent with youtube\'s layout.\n    video.height = "390";\n\n    var child = document.getElementById("player-mole-container");\n    var par = document.getElementById("player");\n    if(child && par)\n    {\n        par.removeChild(child);\n    }\n    var placer = document.getElementById("placeholder-player");\n    if(placer)\n        placer.parentNode.removeChild(placer);\n    //remove existing video\n    var curvideo = document.getElementById("ytcacher-video");\n    if(curvideo)\n    {\n        vidpar = curvideo.parentNode;\n        vidpar.removeChild(curvideo);\n        vidpar.appendChild(video);\n    }\n    else\n    {\n        par.appendChild(video);\n    }\n}\n\nfunction getParameterByName(name, url) {\n    if (!url) url = window.location.href;\n    url = url.toLowerCase(); // This is just to avoid case sensitiveness\n    name = name.replace(/[\\[\\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name\n    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),\n        results = regex.exec(url);\n    if (!results) return null;\n    if (!results[2]) return \'\';\n    return decodeURIComponent(results[2].replace(/\\+/g, " "));\n}\n\nfunction setpage(){\n    requester = "chrome_plugin_0.1";\n    var xhr = new XMLHttpRequest();\n    xhr.open("GET", "http://localhost:8000/bookkeeper/request?par=0", true);\n    xhr.send();\n    var result = xhr.responseText;\n    alert(result);\n    id = getParameterByName(\'v\', url)\n    replace_player("http://localhost:8000/streamer/www.youtube.com/"+id);\n}\nsetpage();\n';
//     //     script.innerHTML = text
//     //     placer.appendChild(script);
//     // });

//     // xhr.open("GET", "http://localhost:8000/bookkeeper/request?par=0", true);
//     // xhr.send();

//     // var result = xhr.responseText;
//     // setTimeout(setpage, 2000); //TODO: bind setpage to some event rather than a timeout, such that it is ensured that page has loaded fully.

// });

