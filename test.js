'use strict'

var test = require('tape')
var bindObject = require('./')

test('bind-object', function (t) {
  t.plan(4)
  var object = {
    foo: function (a, b) {
      t.equal(this, object)
      t.equal(a, 1)
      t.equal(b, 2)
    },
    bar: 'baz'
  }
  bindObject(object)
  var foo = object.foo
  foo(1, 2)
  t.equal(object.bar, 'baz')
})
