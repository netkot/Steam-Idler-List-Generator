// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

    chrome.tabs.executeScript({
        file: 'thirdParty/jquery-3.3.1.slim.js'
    });
    
    
    chrome.tabs.executeScript({
    file: 'show_data.js'
  });


});