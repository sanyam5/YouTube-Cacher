// A trivial script for adding a button to Google page

// Checking page title
// if (document.title.indexOf("Google") != -1) {
//     //Creating Elements
//     var btn = document.createElement("BUTTON")
//     var t = document.createTextNode("CLICK ME");
//     btn.appendChild(t);
//     //Appending to DOM
//     document.body.appendChild(btn);
// }


// var child = document.getElementById("player-api");
// child.parentNode.removeChild(child);

    // var child = document.getElementById("player-api");
    // var child2 = document.getElementById("player-api");
    // var child = document.getElementsByClassName("html5-video-container");
    // child = child[0];

    // var child2 = document.getElementsByClassName("html5-video-controls");
    // child2 = child2[0];

    // var video = document.createElement("video");
    // video.src = "http://localhost/youtube/movie.mp4";
    // video.autoPlay = true;
    // video.controls = true;
    //  video.width = "640";
    // video.height = "360";
    // // document.getElementById("choot").appendChild(video);
    // var par = child.parentNode;
    // par.removeChild(child);
    // par.removeChild(child2);
    // par.appendChild(video);
    // child.parentNode.replaceChild(video,child);






    // var child = document.getElementById("player");
    // var placer = document.getElementById("placeholder-player");
    // // var placer = document.getElementsByClassName("player-api player-width player-height")[0];
    // var video = document.createElement("video");
    // video.src = "http://localhost/youtube/movie.mp4";
    // video.autoPlay = true;
    // video.controls = true;
    //  video.width = "640";
    // video.height = "390";
    // // document.getElementById("choot").appendChild(video);
    // var par = child.parentNode;
    // par.removeChild(child);
    // placer.parentNode.removeChild(placer);
    // par.appendChild(video);


function seekend()
{
    // alert("cool");
//   chrome.tabs.getCurrent(function (tab) {
//   //Your code below...
//   var tabUrl = encodeURIComponent(tab.url);
//   var tabTitle = encodeURIComponent(tab.title);
//   chrome.tabs.update(tab.id, {url: "https://www.mipanga.com/Content/Submit?url=" + tabUrl + "&title=" + tabTitle});
// });
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
   alert(sender.tab.url);
});
}

seekend();
