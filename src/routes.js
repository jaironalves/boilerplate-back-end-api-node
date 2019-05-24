const express = require('express')
const controllers = require('./app/controllers')
const Api = require('./app/models/Api')

const routes = express.Router()
const v1 = express.Router()

controllers(v1, 'v1')

routes.use('/api', v1)
routes.use('/api/v1', v1)

routes.get('/', (_req, res) => {
  res.send(Api.list())
})

module.exports = routes
