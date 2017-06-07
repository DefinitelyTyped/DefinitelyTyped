import * as StandardError from 'standard-error';

let error = new StandardError('test'); //$ExpectType StandardError.error

error.message; //$ExpectType string
error.name; //$ExpectType string
error.stack; //$ExpectType string

error = new StandardError({ name: 'test', foo: 'bar' }); //$ExpectType StandardError.error

error.foo; //$ExpectType any

error = new StandardError('test', { foo: 'bar' }); //$ExpectType StandardError.error