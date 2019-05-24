module.exports = (range, code, description) => {
  return {
    code: range + code,
    description,
  }
}
