import fp from 'path'

// 获取编译好了的模板function
const template = require('../_components/card/index.hbs')

// helper expression
module.exports = function (card) {
  return template(card)
}
