import * as HttpError from 'standard-http-error';

let error = new HttpError(200); //$ExpectType HttpError.error

error.code; //$ExpectType number
error.message; //$ExpectType string
error.name; //$ExpectType string
error.stack; //$ExpectType string

error = new HttpError(200, 'test'); //$ExpectType HttpError.error
error = new HttpError('OK', 'test'); //$ExpectType HttpError.error
error = new HttpError(200, 'test', { foo: 'bar' }); //$ExpectType HttpError.error

error.foo; //$ExpectType any

error = new HttpError(200, { message: 'test', foo: 'bar' }); //$ExpectType HttpError.error