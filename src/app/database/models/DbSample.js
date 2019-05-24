const uuidv4 = require('uuid/v4')
const Model = require('sequelize').Model

class DbSample extends Model {
  /**
   * @param {import('sequelize').Sequelize} sequelize
   * @param {import('sequelize').DataTypes} dataTypes
   */
  static init(sequelize, dataTypes) {
    super.init(
      {
        id: { type: dataTypes.UUIDV4, primaryKey: true },
        name: dataTypes.STRING,
        password_hash: dataTypes.STRING,
      },
      {
        tableName: 'sample',
        modelName: 'sample',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        hooks: {
          beforeCreate: async dbSample => {
            dbSample.id = uuidv4()
          },
        },
        sequelize,
      }
    )
  }
}

module.exports = DbSample
