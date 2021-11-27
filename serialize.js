const serializeJs = require('serialize-javascript')
const { serializeError } = require('serialize-error')

function serialize (message) {
  if (message instanceof Error) {
    message = serializeError(message)
  }
  return serializeJs(message)
}

module.exports = serialize
