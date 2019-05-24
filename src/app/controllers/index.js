const SampleController = require('./controller/SampleController')
const SampleAuthController = require('./controller/SampleAuthController')

/**
 * @param {import('express').Router} router
 */
const configControllerRoutes = router => {
  SampleController(router)
  SampleAuthController(router)
}

module.exports = configControllerRoutes
