const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const redis = require('../redis')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const key = 'loggedout-users'
const readCache = (req, res, next) => {
  redis.get(key, (err, response) => {
    if (!response || err) {
      return next()
    }

    res.send(response)
  })
}

const slowDownResponse = (req, res, next) => {
  setTimeout(() => {
    next()
  }, 2000)
}

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(readCache)

  // simulate some work
  app.use(slowDownResponse)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port)
  consola.ready({
    message: `Server listening on http://localhost:${port}`,
    badge: true
  })
}
start()
