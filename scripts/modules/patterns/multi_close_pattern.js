// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  this.MultiClosePattern = (function() {
    var CURRENT_VERSION, DBG_MODE, NAME, PATTERN_SEQUENCE, _current_sequence, _recorded, clear_arrays;

    PATTERN_SEQUENCE = null;

    NAME = null;

    DBG_MODE = null;

    CURRENT_VERSION = null;

    _recorded = [];

    _current_sequence = [];

    function MultiClosePattern() {
      DBG_MODE = Constants.is_debug_mode();
      CURRENT_VERSION = Constants.get_current_close_pattern_version();
      PATTERN_SEQUENCE = ['TAB_REMOVED', 'TAB_REMOVED', 'TAB_REMOVED', 'TAB_REMOVED'];
      NAME = "MULTI_CLOSE_" + CURRENT_VERSION;
    }

    MultiClosePattern.prototype.pattern_sequence = function() {
      return PATTERN_SEQUENCE.toString();
    };

    MultiClosePattern.prototype.current_sequence = function() {
      return _current_sequence.toString();
    };

    MultiClosePattern.prototype.name = function() {
      return NAME;
    };

    MultiClosePattern.prototype.register_event = function(event_name, event_data) {
      _current_sequence.push(event_name);
      if (DBG_MODE) {
        return console.log("Multi close: current sequence: " + _current_sequence);
      }
    };

    MultiClosePattern.prototype.specific_conditions_satisfied = function() {
      return true;
    };

    MultiClosePattern.prototype.reset_states = function() {
      if (DBG_MODE) {
        console.log("Multi close: resetting states");
      }
      return clear_arrays();
    };

    clear_arrays = function() {
      _recorded = [];
      return _current_sequence = [];
    };

    return MultiClosePattern;

  })();

}).call(this);
