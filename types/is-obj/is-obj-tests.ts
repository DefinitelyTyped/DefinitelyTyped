import isObj = require('is-obj');

isObj({foo: 'bar'});
// => true

isObj([1, 2, 3]);
// => true

isObj('foo');
// => false
