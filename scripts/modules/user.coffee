'use strict'

# ======================================
# @author Martin Toma
#
# This class is used to get
# a unique user UUID
# ======================================

class @User
  connection = null

  constructor: () ->
    connection = new Connection()

  # ===================================
  # Public methods
  # ===================================

  # In context of user and session ids
  in_context: (callback) ->
    # Load user id from storage or generate new UUID
    chrome.storage.sync.get ['user_id'], (result) ->
      session_id = generate_uuid()
      if result.user_id
        create_if_not_exists(result.user_id)
        callback(result.user_id, session_id)
      else
        new_id = generate_uuid()
        chrome.storage.sync.set
          'user_id': new_id, ->
            create_user(new_id)
            callback(new_id, session_id)

  # ===================================
  # Private methods
  # ===================================

  generate_uuid = () ->
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) ->
        r = Math.random() * 16 | 0
        v = if c is 'x' then r else (r & 0x3|0x8)
        v.toString(16))

  create_if_not_exists = (id) ->
    connection.get_user(id, (user) ->
      unless user
        create_user(id)
    )

  create_user = (id) ->
    connection.create_user({
      id: id
      rec_mode: 'default'
      experience: 'default'
    })
