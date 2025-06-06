// Initialize storage
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({promptData: []}, function() {
      console.log('Storage initialized.');
    });
  });
  // Listen for messages from popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "savePrompt") {
        // Code to save prompt
        sendResponse({status: "Prompt saved"});
      }
    }
  );
  