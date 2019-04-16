import isPlainObj = require('is-plain-obj');

isPlainObj({ foo: 'bar' }); // $ExpectType boolean
