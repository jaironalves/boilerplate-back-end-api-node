require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

const url = process.env.DATABASE_URL
const migrationStorageTableName = '_sequelize_meta'

module.exports = { url, migrationStorageTableName }
