// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.MultiActivate = (function() {
    var NAME, SEQUENCE, not_next_to, _current_ma_version, _dbg_mode, _last_activated_tab_position;

    SEQUENCE = null;

    NAME = null;

    _dbg_mode = null;

    _current_ma_version = null;

    _last_activated_tab_position = null;

    function MultiActivate() {
      _dbg_mode = Constants.is_debug_mode();
      _current_ma_version = Constants.get_current_activate_pattern_version();
      SEQUENCE = ['TAB_ACTIVATED', 'TAB_ACTIVATED', 'TAB_ACTIVATED', 'TAB_ACTIVATED'];
      NAME = "MULTI_ACTIVATE_" + _current_ma_version;
    }

    MultiActivate.prototype.sequence = function() {
      return SEQUENCE;
    };

    MultiActivate.prototype.name = function() {
      return NAME;
    };

    MultiActivate.prototype.should_record_activate = function(tab_position, tab_id) {
      if (_last_activated_tab_position === null || not_next_to(tab_position, _last_activated_tab_position)) {
        _last_activated_tab_position = tab_position;
        return true;
      } else {
        _last_activated_tab_position = tab_position;
        return false;
      }
    };

    not_next_to = function(pos1, pos2) {
      return Math.abs(pos1 - pos2) !== 1;
    };

    return MultiActivate;

  })();

}).call(this);
