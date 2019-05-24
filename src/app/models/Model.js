class Model {
  /**
   * @param {Object} dataValues
   */
  setDataValues(dataValues) {
    if (dataValues) {
      Object.keys(this).forEach(property => {
        this[property] = undefined
      })

      Object.keys(dataValues).forEach(dataValuePropertyName => {
        if (Object.getOwnPropertyNames(this).includes(dataValuePropertyName))
          this[dataValuePropertyName] = dataValues[dataValuePropertyName]
      })
    }
  }
}

module.exports = Model
