// Generated by CoffeeScript 1.8.0
(function() {
  chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === 'install') {
      return chrome.tabs.create({
        url: chrome.runtime.getURL('options.html'),
        active: true
      });
    }
  });

}).call(this);