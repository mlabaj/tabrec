// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var LoadOptions, ResetOptions, SaveOptions;

  ResetOptions = function() {
    $('#user-level-select').val('beginner');
    return $('#rec-mode-select').val('semi-interactive');
  };

  LoadOptions = function() {
    var savedLevel, savedMode;
    savedLevel = null;
    savedMode = null;
    return chrome.storage.sync.get(['user_level', 'rec_mode'], function(result) {
      if (result.user_level && result.rec_mode) {
        $('#user-level-select').val(result.user_level);
        return $('#rec-mode-select').val(result.rec_mode);
      } else {
        return ResetOptions();
      }
    });
  };

  SaveOptions = function() {
    var recMode, userLevel;
    userLevel = $('#user-level-select').val();
    recMode = $('#rec-mode-select').val();
    return chrome.storage.sync.set({
      'user_level': userLevel,
      'rec_mode': recMode
    }, function() {
      return alert('Settings saved');
    });
  };

  $('#save-settings').click(function() {
    return SaveOptions();
  });

  $('#reset-settings').click(function() {
    return ResetOptions();
  });

  $(document).ready(function() {
    return LoadOptions();
  });

}).call(this);
