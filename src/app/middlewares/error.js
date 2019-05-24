const buildError = require('../services/buildError')

/**
 * @returns {import('express').ErrorRequestHandler}
 */
const logHandler = () => (err, _req, _res, next) => {
  console.error(err.stack) // eslint-disable-line no-console
  next(err)
}

/**
 * @returns {import('express').ErrorRequestHandler}
 */
const databaseHandler = () => (err, _req, res, next) => {
  if (err.routine) {
    let description = `Erro interno de conexão com a base de dados.
      Contate o administrador e informe os dados abaixo: 
      ${err.code} - ${err.message} - ${err.routine}`

    res.status(500).send(buildError(0, 1, description))
  } else next(err)
}

/**
 * @returns {import('express').ErrorRequestHandler}
 */
const clientHandler = () => (err, req, res, next) => {
  if (req.errorRange) {
    let code = req.errorRange + 999
    const description = `${err}`
    const error = {
      code,
      description,
    }

    res.status(500).send(error)
  } else {
    next(err)
  }
}

/**
 * @returns {import('express').ErrorRequestHandler}
 */
const defaultHandler = () => (err, _req, res, _next) => {
  res.status(500)
  res.render('error', { error: err })
}

module.exports = {
  logHandler,
  databaseHandler,
  clientHandler,
  defaultHandler,
}
/*

export default app => {
  if (app.get('env') === 'development') app.use(logErrorHandler)
  app.use(databaseErrorHandler)
  app.use(clientErrorHandler)
  app.use(defaultHandler)
}*/
