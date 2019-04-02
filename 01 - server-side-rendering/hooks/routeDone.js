const consola = require('consola')
const redis = require('./../redis')

module.exports = (url, { html }) => {
  /**
   * Since everything has been generated you should store HTML into redis
   * 💡Every cache should expire, unless it's gonna be there forever
   *
   */
  redis.STORE_COMMAND()
}
