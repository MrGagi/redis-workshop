const consola = require('consola')
const redis = require('./../redis')

const EXPIRE_IN_SECONDS = 30
const key = 'loggedout-users'

module.exports = (url, { html }) => {
  /**
   * Since everything has been generated you should store HTML into redis
   * 💡Every cache should expire, unless it's gonna be there forever
   */
  redis.STORE_COMMAND()
}
