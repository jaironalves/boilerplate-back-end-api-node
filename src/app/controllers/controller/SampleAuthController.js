const express = require('express')
const authMiddleware = require('../../middlewares/auth')

const list = (req, res, next) => {
  try {
    const listAll = []
    res.status(200).send({ listAll })
  } catch (error) {
    req.ecode = 2000
    next(error)
  }
}

/**
 * @param {import('express').Router} router
 */
const configureRouter = router => {
  const sampleRouter = express.Router()

  sampleRouter.use(authMiddleware)
  sampleRouter.get('/', list)

  router.use('/sampleauth', sampleRouter)
}

module.exports = configureRouter
