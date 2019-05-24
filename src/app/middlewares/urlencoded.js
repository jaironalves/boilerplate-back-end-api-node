const express = require('express')

/**
 * @returns {express.RequestHandler}
 */
const expressUrlEncoded = () => express.urlencoded({ extended: false })

module.exports = expressUrlEncoded
