const Sequelize = require('sequelize')
const DataTypes = require('sequelize').DataTypes
const modelsInit = require('./models')
const config = require('../../config/sequelize')

const sequelize = new Sequelize(config.url, config)

const models = modelsInit(sequelize, DataTypes)

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models))

const dbContext = {
  sequelize,
  Sequelize,
  ...models,
}

module.exports = dbContext
