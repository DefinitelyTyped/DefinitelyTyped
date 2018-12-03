import randomObjKey = require('random-obj-key');

// $ExpectType "foo" | "bar"
randomObjKey({ foo: true, bar: true });
