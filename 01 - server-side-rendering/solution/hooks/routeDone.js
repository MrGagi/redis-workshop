const consola = require('consola')
const redis = require('./../redis')

const EXPIRE_IN_SECONDS = 30
const key = 'loggedout-users'

module.exports = (url, { html }) => {
  redis.setex(key, EXPIRE_IN_SECONDS, html, (err, redisResponse) => {
    if (err) {
      consola.log('Error while storing:', err)
      return
    }
    consola.log('Response has been stored:', redisResponse)
  })
}
