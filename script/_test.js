const fs = require('fs')
const path = require('path')

const pathEnv = path.join(__dirname, '../.env.test')

function log(err) {
  console.log(err) // eslint-disable-line no-console
}

try {
  if (!fs.existsSync(pathEnv)) {
    log(
      '.env.test file not exists.\n Please use ".env.example" to create ".env.test" file in root directory\n'
    )
    process.exit(1)
  }
} catch (err) {
  log(err)
  process.exit(1)
}
