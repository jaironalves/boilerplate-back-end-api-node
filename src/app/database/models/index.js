const DbSample = require('./DbSample')

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} dataTypes
 */
const InitModels = (sequelize, dataTypes) => {
  DbSample.init(sequelize, dataTypes)

  return {
    DbSample,
  }
}

module.exports = InitModels
