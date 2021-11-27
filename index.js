const api = require('./api')

const levels = {
  emergency: 'emergency',
  alert: 'alert',
  critical: 'critical',
  error: 'error',
  warning: 'warning',
  notice: 'notice',
  info: 'info',
  debug: 'debug'
}

const yarder = {
  init (uri, key) {
    api.uri = uri
    api.key = key
  },

  emergency (body) {
    api.create(levels.emergency, body)
  },

  alert (body) {
    api.create(levels.alert, body)
  },

  critical (body) {
    api.create(levels.critical, body)
  },

  error (body) {
    api.create(levels.error, body)
  },

  warning (body) {
    api.create(levels.warning, body)
  },

  notice (body) {
    api.create(levels.notice, body)
  },

  info (body) {
    api.create(levels.info, body)
  },

  debug (body) {
    api.create(levels.debug, body)
  }
}

module.exports = yarder
