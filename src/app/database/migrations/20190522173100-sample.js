'use strict'

const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('sample', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  })

const down = (queryInterface, _Sequelize) => queryInterface.dropTable('sample')

module.exports = {
  up,
  down,
}
