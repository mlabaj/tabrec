'use strict'

# ======================================
# @author Martin Toma
#
# Contains application wide constants
# ======================================

class @Constants
  DEBUG_MODE = true
  USAGE_LOGGING = false

  @is_debug_mode: ->
    DEBUG_MODE

  @usage_logging_on: ->
    USAGE_LOGGING

  @get_api_url: ->
    if DEBUG_MODE
      'http://localhost:9292'
    else
      'http://tabber.fiit.stuba.sk:9292'

  @get_batch_size: ->
    if DEBUG_MODE
      5
    else
      50

  @get_max_gap: ->
    # 3 seconds
    3000

  @get_rec_timeout: ->
    if DEBUG_MODE
      # 10 sec
      10000
    else
      # 1 min
      60000

