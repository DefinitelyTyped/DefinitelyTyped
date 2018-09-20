import objstr = require('obj-str');

const isTrue = () => true;

objstr({ foo: true, bar: false, baz: isTrue() });
// => 'foo baz'
