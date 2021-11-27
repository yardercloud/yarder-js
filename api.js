const axios = require('axios')
const serialize = require('./serialize')

const api = {
  uri: null,
  key: null,

  get http () {
    return axios.create({
      baseURL: this.uri,
      headers: {
        'Yarder-API-Key': this.key
      }
    })
  },

  create (level, body) {
    const log = {
      level,
      body: serialize(body)
    }
    this.http.post('/', log)
      .catch(error => {
        const data = error.response ? error.response.data.message : error.message
        const message = `Failed to create yarder log: ${data}`
        console.error(message)
      })
  }
}

module.exports = api
