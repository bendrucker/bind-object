'use strict'

var bind = require('bind-to')

module.exports = function bindObject (object) {
  return bind(object, object)
}
