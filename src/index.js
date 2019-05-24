const app = require('./app')

const hostNameDev = '127.0.0.1'
const port = process.env.PORT || 3001

app.listen(port, () => {
  if (app.get('env') === 'development')
    console.log(`Servidor executando em http://${hostNameDev}:${port}/`) // eslint-disable-line no-console
})
