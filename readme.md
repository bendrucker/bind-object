# bind-object [![Build Status](https://travis-ci.org/bendrucker/bind-object.svg?branch=master)](https://travis-ci.org/bendrucker/bind-object) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/bind-object.svg)](https://greenkeeper.io/)

> Bind all methods in an object

## Install

```
$ npm install --save bind-object
```

## Usage

```js
var bindObject = require('bind-object')
var object = {
  foo: function () {
    return this.bar
  },
  bar: 'baz'
}
bindObject(object)
var foo = object.foo
foo() // => 'baz'
```

## API

#### `bindObject(object)` -> `object`

Binds the functions in an object to the object itself and ignores other values. Returns the original object for convenience.

##### object

*Required*  
Type: `object`

The object to bind.

## License

MIT © [Ben Drucker](http://bendrucker.me)
