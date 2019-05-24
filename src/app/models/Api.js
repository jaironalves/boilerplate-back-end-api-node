class ApiModel {
  constructor(codeName, absolutePath, requestPath, version, expires) {
    this.codeName = codeName
    this.absolutePath = absolutePath
    this.requestPath = requestPath
    this.version = version
    this.expires = expires
  }
}

const list = () => {
  var apiV1 = new ApiModel('Rigel', '/api/v1', '/api/v1', 'v1', undefined)

  return [apiV1]
}

const Api = {
  list,
}

module.exports = Api
