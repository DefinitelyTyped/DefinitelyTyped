import StandardError = require('standard-error');

let error = new StandardError('test'); // $ExpectType StandardError

error.message; // $ExpectType string
error.name; // $ExpectType string
error.stack; // $ExpectType string | undefined

error = new StandardError({ name: 'test', foo: 'bar' }); // $ExpectType StandardError

error.foo; // $ExpectType any

error = new StandardError('test', { foo: 'bar' }); // $ExpectType StandardError
