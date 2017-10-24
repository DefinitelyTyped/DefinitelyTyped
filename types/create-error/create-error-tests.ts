/// <reference types="mocha" />

declare function equal<T>(a: T, b: T): void;
declare function deepEqual<T>(a: T, b: T): void;

import * as createError from 'create-error';

// Example taken from https://github.com/tgriesser/create-error/blob/0.3.1/README.md#use

interface MyCustomError extends createError.Error<MyCustomError> {
  messages: string[];
  someVal: string;
}
var MyCustomError  = createError<MyCustomError>('MyCustomError');

interface SubCustomError extends MyCustomError {
}
var SubCustomError = createError<SubCustomError>(MyCustomError, 'CoolSubError', {messages: []});

var sub = new SubCustomError('My Message', {someVal: 'value'});

sub instanceof SubCustomError // true
sub instanceof MyCustomError  // true
sub instanceof Error          // true

deepEqual(sub.messages, []) // true
equal(sub.someVal, 'value') // true


// Taken and adapted from https://github.com/tgriesser/create-error/blob/0.3.1/test/index.js


describe('create-error', function() {

  describe('error creation', function() {

    it('should create a new error', function() {
      var TestingError = createError('TestingError');
      var a = new TestingError('msgA');
      var b = new TestingError('msgB');
      equal((a instanceof TestingError), true);
      equal((a instanceof Error), true);
      equal(a.message, 'msgA');
      equal(b.message, 'msgB');
      equal((a.stack.length > 0), true);
    });

    it('should attach properties in the second argument', function() {
      interface TestingError extends createError.Error<TestingError> {
        anArray: string[];
      }
      var TestingError = createError<TestingError>('TestingError', {anArray: []});
      var a = new TestingError('Test the array');
      deepEqual(a.anArray, []);
    });

    it('should give the name "CustomError" if the name is omitted', function() {
      var TestingError = createError();
      var a = new TestingError("msg");
      equal(a.name, 'CustomError');
    });

    it('should not reference the same property in subsequent errors', function() {
      interface TestingError extends createError.Error<TestingError> {
        anArray: string[];
      }
      var TestingError = createError<TestingError>('TestingError', {anArray: []});
      var a = new TestingError('Test the array');
      a.anArray.push('a');
      var b = new TestingError('');
      deepEqual(b.anArray, []);
    });

    it('should allow for empty objects on the cloned hash', function() {
      interface TestingError extends createError.Error<TestingError> {
        anEmptyObj: Object;
      }
      var TestingError = createError<TestingError>('TestingError', {anEmptyObj: Object.create(null)});
      var a = new TestingError('Test the array');
      deepEqual(a.anEmptyObj, Object.create(null));
    });

    it('attaches attrs in the second arg of the error ctor, #3', function() {
      interface RequestError extends createError.Error<RequestError> {
        status: number;
      }
      var RequestError = createError<RequestError>('RequestError', {status: 400});
      var reqErr = new RequestError('404 Error', {status: 404});
      equal(reqErr.status, 404);
      equal(reqErr.message, '404 Error');
      equal(reqErr.name, 'RequestError');
    });

  });

  describe('subclassing errors', function() {

    it('takes an object in the first argument', function() {
      var TestingError = createError('TestingError');
      var SubTestingError = createError(TestingError, 'SubTestingError');
      var x = new SubTestingError();
      equal((x instanceof SubTestingError), true);
      equal((x instanceof TestingError), true);
      equal((x instanceof Error), true);
    });

    it('attaches the properties appropriately.', function() {
      interface SubTestingError extends createError.Error<SubTestingError> {
        key: string[];
      }
      var TestingError = createError('TestingError');
      var SubTestingError = createError<SubTestingError>(TestingError, 'SubTestingError', {key: []});
      var x = new SubTestingError();
      deepEqual(x.key, []);
    });

    it('allows for a default message, #4', function() {
      var TestingError = createError('TestingError', {message: 'Error with testing'});
      var x = new TestingError();
      equal(x.message, 'Error with testing');
    });

  });

  describe('invalid values sent to the second argument', function() {

    it('should ignore falsy values', function() {
      var TestingError  = createError('TestingError', '');
      var TestingError2 = createError('TestingError', null);
      var TestingError3 = createError('TestingError', void 0);
      var a = new TestingError('Test the array');
      var b = new TestingError2('Test the array');
      var c = new TestingError3('Test the array');
    });

    it('should ignore arrays', function() {
      interface TestingError extends createError.Error<TestingError> {
        anArray: string[];
      }
      var TestingError = createError<TestingError>('TestingError', [{anArray: []}]);
      var a = new TestingError('Test the array');
      equal(a.anArray, void 0);
    });

  });

});
