import known = require('known');

const obj = { foo: true };

const obj2 = known(obj);

obj2.foo;
obj2.bar; // $ExpectError
