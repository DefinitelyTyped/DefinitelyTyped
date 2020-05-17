import hasOwnProperty = require('has');

// $ExpectType boolean
hasOwnProperty(Object.prototype, 'hasOwnProperty');
hasOwnProperty({ prop: null }, 'hasOwnProperty');
hasOwnProperty('foo', 'bar');
hasOwnProperty(123, '456');
hasOwnProperty(Symbol.iterator, Symbol.toStringTag);

// $ExpectError
hasOwnProperty(undefined, '');

// $ExpectError
hasOwnProperty(null, '');
