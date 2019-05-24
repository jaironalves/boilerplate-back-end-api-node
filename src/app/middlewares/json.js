const express = require('express')
const buildError = require('../services/buildError')

/**
 * @returns {express.RequestHandler}
 */
const expressJson = () =>
  express.json({
    verify: (_req, res, buf, _encoding) => {
      try {
        JSON.parse(buf)
      } catch (e) {
        return res.status(404).send(buildError(0, 2, 'JSON da requisição inválido'))
      }
    },
  })

module.exports = expressJson
