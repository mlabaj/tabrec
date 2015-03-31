// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var user;

  user = new User();

  user.in_context(function(user_id, session_id) {
    var logger, usage_logger;
    if (Constants.usage_logging_on()) {
      usage_logger = new UsageLogger(user_id, session_id);
      usage_logger.start();
    }
    logger = new Logger(user_id, session_id);
    return logger.start();
  });

}).call(this);
