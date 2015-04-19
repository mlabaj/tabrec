// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.Notifier = (function() {
    var multi_activate_notification_options, notification_button_clicked, notification_clicked, notification_closed, revert_notification_options, send_resolution, show_revert, _conn, _debug_mode, _executor, _pattern, _uid;

    _conn = new Connection();

    _executor = new Executor();

    _debug_mode = null;

    _pattern = null;

    _uid = null;

    multi_activate_notification_options = {
      type: 'basic',
      iconUrl: 'images/notification.png',
      title: 'Recommendation available!',
      message: 'Are you looking for something? We can help. Note that executed action can be reverted.',
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

    revert_notification_options = {
      type: 'basic',
      iconUrl: 'images/revert_notification.png',
      title: 'Action was performed!',
      message: 'Dont like what happened? Click revert to load previous state.',
      buttons: [
        {
          title: 'Revert',
          iconUrl: 'images/revert.png'
        }
      ]
    };

    function Notifier(user_id) {
      _debug_mode = Constants.is_debug_mode();
      _uid = user_id;
      chrome.notifications.onButtonClicked.addListener(notification_button_clicked);
      chrome.notifications.onClicked.addListener(notification_clicked);
      chrome.notifications.onClosed.addListener(notification_closed);
    }

    Notifier.prototype.show_pattern = function(pattern) {
      _pattern = pattern;
      if (_debug_mode) {
        console.log("Notification: pattern occured: " + _pattern);
      }
      return chrome.notifications.create("pattern_" + (new Date().getTime()), multi_activate_notification_options, function(id) {});
    };

    show_revert = function() {
      return chrome.notifications.create("revert_" + (new Date().getTime()), revert_notification_options, function(id) {});
    };

    notification_button_clicked = function(notif_id, button_index) {
      if (notif_id.indexOf('pattern') === 0) {
        if (button_index === 0) {
          send_resolution('ACCEPTED');
          _executor.execute(_pattern);
          show_revert();
        } else if (button_index === 1) {
          send_resolution('REJECTED');
        }
      } else if (notif_id.indexOf('revert') === 0) {
        if (button_index === 0) {
          send_resolution('REVERTED');
          _executor.revert(_pattern);
        }
      }
      return chrome.notifications.clear(notif_id, function(cleared) {});
    };

    notification_clicked = function(notif_id) {
      if (notif_id.indexOf('pattern') === 0) {
        send_resolution('ACCEPTED');
        _executor.execute(_pattern);
        show_revert();
      } else if (notif_id.indexOf('revert') === 0) {
        send_resolution('REVERTED');
        _executor.revert(_pattern);
      }
      return chrome.notifications.clear(notif_id, function(cleared) {});
    };

    notification_closed = function(notif_id, by_user) {
      if (by_user && notif_id.indexOf('pattern') === 0) {
        return send_resolution('REJECTED');
      }
    };

    send_resolution = function(resolution) {
      return _conn.create_rec_log({
        pattern: _pattern,
        resolution: resolution,
        user_id: _uid
      });
    };

    return Notifier;

  })();

}).call(this);
