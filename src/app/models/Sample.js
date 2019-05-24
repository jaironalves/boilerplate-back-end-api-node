const auth = require('../services/auth')
const Model = require('./Model')

class Sample extends Model {
  init() {
    this.id = ''
    this.name = ''
    this.password_hash = ''
    this.created_at = new Date()
    this.updated_at = new Date()
  }

  /**
   * @param {Object} [dataValues={}]
   * @param {string} [dataValues.id]
   * @param {string} [dataValues.name]
   * @param {string} [dataValues.password]
   * @param {string} [dataValues.password_hash]
   * @param {Date} [dataValues.created_at]
   * @param {Date} [dataValues.updated_at]
   */
  constructor(dataValues) {
    super()
    this.init()
    this.setDataValues(dataValues)
  }

  /**
   * @param {Object} [dataValues={}]
   * @param {string} [dataValues.id]
   * @param {string} [dataValues.name]
   * @param {string} [dataValues.password]
   * @param {string} [dataValues.password_hash]
   * @param {Date} [dataValues.created_at]
   * @param {Date} [dataValues.updated_at]
   */
  setDataValues(dataValues) {
    if (dataValues.password && !dataValues.password_hash)
      dataValues.password_hash = auth.hashGenerate(dataValues.password)
    super.setDataValues(dataValues)
  }

  /**
   * @param {string} password
   */
  checkPassword(password) {
    return auth.hashCompare(password, this.password_hash)
  }

  generateToken() {
    return auth.tokenGenerate({ id: this.id })
  }
}

module.exports = Sample
