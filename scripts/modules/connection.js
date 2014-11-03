// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.Connection = (function() {
    var get_collection, get_member, post_collection;

    function Connection(url) {
      this.url = url;
    }

    Connection.prototype.get_user = function(id) {
      return get_member(this.url, 'users', id);
    };

    Connection.prototype.get_events = function() {
      return get_collection(this.url, 'events');
    };

    Connection.prototype.post_usage_logs = function(data) {
      return post_collection(this.url, data, 'usage_logs');
    };

    get_member = function(url, resource, id) {
      return $.ajax("" + url + "/" + resource + "/" + id, {
        type: 'GET',
        dataType: 'json',
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log("Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          return console.log("User id: " + data['id'] + " experience: " + data['experience'] + " rec_mode: " + data['rec_mode']);
        }
      });
    };

    get_collection = function(url, resource) {
      return $.ajax("" + url + "/" + resource, {
        type: 'GET',
        dataType: 'json',
        error: function(jqXHR, textStatus, errorThrown) {
          return console.log("Error: " + textStatus);
        },
        success: function(data, textStatus, jqXHR) {
          var event, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            event = data[_i];
            _results.push(console.log("" + event['name']));
          }
          return _results;
        }
      });
    };

    post_collection = function(url, data, resource) {
      return $.ajax("" + url + "/" + resource, {
        type: 'POST',
        dataType: 'json',
        data: {
          data: data
        },
        success: function(data, textStatus, jqXHR) {
          return console.log("Status: " + textStatus);
        }
      });
    };

    return Connection;

  })();

}).call(this);