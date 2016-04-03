//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        console.log("Tab updated: " + tab.url);

        chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
            console.log(response);
        });

    }
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "check")
    {
        // alert("requesting for" + request.video_url);
        $.get("http://localhost:8000/bookkeeper/request",{video_url:request.video_url, requester:"plugin"}, function (data){
            // alert("got reply from django");
            if(data.ok==true && data.available==true)
                sendResponse({url: data.url});
            else
                sendResponse({url: ''});
        });
    }
    return true;
  });
