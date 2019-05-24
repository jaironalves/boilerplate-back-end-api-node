const bcrypt = require('bcrypt')
const authConfig = require('../../config/auth')
const jwt = require('jsonwebtoken')

const auth = {
  hashGenerate(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },

  hashCompare(password, hash) {
    return bcrypt.compareSync(password, hash)
  },

  tokenGenerate(params = {}) {
    return jwt.sign({ params }, authConfig.secret, {
      expiresIn: 86400,
    })
  },
}

module.exports = auth
