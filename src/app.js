const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const json = require('./app/middlewares/json')
const urlencoded = require('./app/middlewares/urlencoded')
const error = require('./app/middlewares/error')
const routes = require('./routes')

class AppController {
  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.express.use(cors())
    this.express.use(logger('dev'))
    this.express.use(json())
    this.express.use(urlencoded())

    if (this.express.get('env') === 'development') this.express.use(error.logHandler())
    this.express.use(error.databaseHandler())
    this.express.use(error.clientHandler())
    this.express.use(error.defaultHandler())
  }

  routes() {
    this.express.use(routes)
  }
}

module.exports = new AppController().express
