const express = require('express')
const db = require('../../database')
const Sample = require('../../models/Sample')
const buildError = require('../../services/buildError')

const errorRange = 1000

const register = async (req, res, next) => {
  try {
    const { name, password } = req.body

    if (!name) return res.status(400).send(buildError(errorRange, 1, 'Nome obrigatório'))

    const sampleDb = await db.DbSample.findOne({ where: { name } })

    if (sampleDb) return res.status(400).send(buildError(errorRange, 2, 'Já esta cadastrado'))

    const sample = new Sample({
      name,
      password,
    })
    const created = await db.DbSample.create(sample)
    sample.initDataValues(created.dataValues)
    res.send({ sample, token: sample.generateToken() })
  } catch (error) {
    req.errorRange = errorRange
    next(error)
  }
}

const authenticate = async (req, res) => {
  const { name, password } = req.body

  if (!name) return res.status(400).send(buildError(errorRange, 1, 'Nome obrigatório'))

  const sample = await db.DbSample.findOne({ name })

  if (!sample) return res.status(400).send(buildError(errorRange, 3, 'Não cadastrado'))

  sample.ha

  if (!sample.checkPassword(password))
    return res.status(400).send(buildError(errorRange, 4, 'Senha incorreta'))

  sample.senhaHash = undefined

  res.send({ sample, token: sample.generateToken() })
}

/**
 * @param {import('express').Router} router
 */
const configureRouter = router => {
  const sampleRouter = express.Router()

  sampleRouter.post('/register', register)
  sampleRouter.post('/authenticate', authenticate)

  router.use('/sample', sampleRouter)
}

module.exports = configureRouter
