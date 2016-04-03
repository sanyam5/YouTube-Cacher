//Listen for when a Tab changes state
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8000/bookkeeper/request?par=0", true);
xhr.send();
var result = xhr.responseText;
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        console.log("Tab updated: " + tab.url);

        chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
            console.log(response);
        });

    }
});
