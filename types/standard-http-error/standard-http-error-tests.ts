import HttpError = require('standard-http-error');

let error = new HttpError(200); // $ExpectType HttpError

error.code; // $ExpectType number
error.message; // $ExpectType string
error.name; // $ExpectType string
error.stack; // $ExpectType string | undefined

error = new HttpError(200, 'test'); // $ExpectType HttpError
error = new HttpError('OK', 'test'); // $ExpectType HttpError
error = new HttpError(200, 'test', { foo: 'bar' }); // $ExpectType HttpError

error.foo; // $ExpectType any

error = new HttpError(200, { message: 'test', foo: 'bar' }); // $ExpectType HttpError
