'use strict'

module.exports = function bindObject (object) {
  for (var key in object) {
    object[key] = (function bind (self, value) {
      if (typeof value === 'function') {
        return function bound () {
          return value.apply(self, arguments)
        }
      }
      return value
    })(object, object[key])
  }
  return object
}
