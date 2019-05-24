const buildError = require('../services/buildError')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const errorRange = 4000

function authHandler(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).send(buildError(errorRange, 1, 'Header de autorização não fornecido'))

  const parts = authHeader.split(' ')

  if (parts.length === 2)
    return res
      .status(401)
      .send(
        buildError(errorRange, 2, 'Header de autorização espera duas partes: {Bearer xhTOKENhx}')
      )

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme))
    return res
      .status(401)
      .send(
        buildError(errorRange, 3, 'Header de autorização precisa ser Bearer: {Bearer xhTOKENhx}')
      )

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send(buildError(errorRange, 4, 'Token de autorização inválido'))

    req.userId = decoded.id

    return next()
  })
}

export default router => {
  router.use(authHandler)
}
