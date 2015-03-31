// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.Notifier = (function() {
    var debug_mode, notification_button_clicked, notification_clicked, tab_sort_notification_options;

    debug_mode = null;

    tab_sort_notification_options = {
      type: 'basic',
      iconUrl: 'images/notification.png',
      title: 'Pattern detected!',
      message: 'Looks like you are looking for some tabs, need help?',
      buttons: [
        {
          title: 'Accept',
          iconUrl: 'images/accept.png'
        }, {
          title: 'Reject',
          iconUrl: 'images/reject.png'
        }
      ]
    };

    function Notifier() {
      debug_mode = Constants.is_debug_mode();
      chrome.notifications.onButtonClicked.addListener(notification_button_clicked);
      chrome.notifications.onClicked.addListener(notification_clicked);
    }

    Notifier.prototype.notify = function(pattern) {
      if (debug_mode) {
        console.log("Notification: pattern occured: " + pattern);
      }
      return chrome.notifications.create("notification_" + (new Date().getTime()), tab_sort_notification_options, function(id) {});
    };

    notification_button_clicked = function(notif_id, button_index) {
      if (button_index === 0) {
        if (debug_mode) {
          console.log('recommendation accepted');
        }
      } else if (button_index === 1) {
        if (debug_mode) {
          console.log('recommendation rejected');
        }
      }
      return chrome.notifications.clear(notif_id, function(cleared) {});
    };

    notification_clicked = function(notif_id) {
      if (debug_mode) {
        console.log('recommendation accepted');
      }
      return chrome.notifications.clear(notif_id, function(cleared) {});
    };

    return Notifier;

  })();

}).call(this);
