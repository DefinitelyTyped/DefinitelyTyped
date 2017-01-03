// Type definitions for assert-plus 1.0
// Project: https://github.com/mcavage/node-assert-plus#readme
// Definitions by: Костя Третяк <https://github.com/KostyaTretyak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {Stream} from 'stream';

/**
 * 
 */
export function array(options: any[], message ?: string): void;

/**
 * 
 */
export function bool(options: boolean, message ?: string): void;

/**
 * 
 */
export function buffer(options: Buffer, message ?: string): void;

/**
 * 
 */
export function func(options: any, message ?: string): void;

/**
 * 
 */
export function number(options: number, message ?: string): void;

/**
 * 
 */
export function finite(options: number, message ?: string): void;

/**
 * 
 */
export function object(options: any, message ?: string): void;

/**
 * 
 */
export function string(options: string, message ?: string): void;

/**
 * 
 */
export function stream(options: Stream, message ?: string): void;

/**
 * 
 */
export function date(options: Date, message ?: string): void;

/**
 * 
 */
export function regexp(options: RegExp, message ?: string): void;

/**
 * 
 */
export function uuid(options: string, message ?: string): void;

/**
 * 
 */
export function arrayOfArray(options: any[][], message ?: string): void;

/**
 * 
 */
export function arrayOfBool(options: boolean[], message ?: string): void;

/**
 * 
 */
export function arrayOfBuffer(options: Buffer[], message ?: string): void;

/**
 * 
 */
export function arrayOfFunc(options: any[], message ?: string): void;

/**
 * 
 */
export function arrayOfNumber(options: number[], message ?: string): void;

/**
 * 
 */
export function arrayOfFinite(options: number[], message ?: string): void;

/**
 * 
 */
export function arrayOfObject(options: any[], message ?: string): void;

/**
 * 
 */
export function arrayOfString(options: string[], message ?: string): void;

/**
 * 
 */
export function arrayOfStream(options: Stream[], message ?: string): void;

/**
 * 
 */
export function arrayOfDate(options: Date[], message ?: string): void;

/**
 * 
 */
export function arrayOfRegexp(options: RegExp[], message ?: string): void;

/**
 * 
 */
export function arrayOfUuid(options: string[], message ?: string): void;

/**
 * 
 */
export function optionalArray(options ?: any[], message ?: string): void;

/**
 * 
 */
export function optionalBool(options ?: boolean, message ?: string): void;

/**
 * 
 */
export function optionalBuffer(options ?: Buffer, message ?: string): void;

/**
 * 
 */
export function optionalFunc(options ?: any, message ?: string): void;

/**
 * 
 */
export function optionalNumber(options ?: number, message ?: string): void;

/**
 * 
 */
export function optionalFinite(options ?: number, message ?: string): void;

/**
 * 
 */
export function optionalObject(options ?: any, message ?: string): void;

/**
 * 
 */
export function optionalString(options ?: string, message ?: string): void;

/**
 * 
 */
export function optionalStream(options ?: Stream, message ?: string): void;

/**
 * 
 */
export function optionalDate(options ?: Date, message ?: string): void;

/**
 * 
 */
export function optionalRegexp(options ?: RegExp, message ?: string): void;

/**
 * 
 */
export function optionalUuid(options ?: string, message ?: string): void;

/**
 * 
 */
export function optionalArrayOfArray(options ?: any[][], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfBool(options ?: boolean[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfBuffer(options ?: Buffer[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfFunc(options ?: any[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfNumber(options ?: number[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfFinite(options ?: number[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfObject(options ?: any[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfString(options ?: string[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfStream(options ?: Stream[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfDate(options ?: Date[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfRegexp(options ?: RegExp[], message ?: string): void;

/**
 * 
 */
export function optionalArrayOfUuid(options ?: string[], message ?: string): void;

/**
 * 
 */
export function AssertionError(options: any, message ?: string): void;

/**
 * Throws an `AssertionError`. If `message` is falsy, the error message is set
 * as the values of `actual` and `expected` separated by the provided `operator`.
 * Otherwise, the error message is the value of `message`.
 * 
 * ```js
 * const assert = require('assert');
 * 
 * assert.fail(1, 2, undefined, '>');
 * // AssertionError: 1 > 2
 * 
 * assert.fail(1, 2, 'whoops', '>');
 * // AssertionError: whoops
 * ```
 */
export function fail(actual: any, expected: any, message: any, operator: any): void;


/**
 * Tests if `value` is truthy. It is equivalent to `assert.equal(!!value, true, message)`.
 * 
 * If `value` is not truthy, an `AssertionError` is thrown with a `message` property
 * set equal to the value of the `message` parameter.
 * If the `message` parameter is `undefined`, a default error message is assigned.
 * 
 * ```js
 * const assert = require('assert');
 * 
 * assert.ok(true);
 * // OK
 * assert.ok(1);
 * // OK
 * assert.ok(false);
 * // throws "AssertionError: false == true"
 * assert.ok(0);
 * // throws "AssertionError: 0 == true"
 * assert.ok(false, 'it\'s false');
 * // throws "AssertionError: it's false"
 * ```
 */
export function ok(options: any, message ?: string): void;

/**
 * Tests shallow, coercive equality between the actual and expected parameters
 * using the equal comparison operator ( `==` ).
 * 
 * ```js
 * const assert = require('assert');
 * 
 * assert.equal(1, 1);
 * // OK, 1 == 1
 * assert.equal(1, '1');
 * // OK, 1 == '1'
 * 
 * assert.equal(1, 2);
 * // AssertionError: 1 == 2
 * assert.equal({a: {b: 1}}, {a: {b: 1}});
 * //AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
 * ```
 * 
 * If the values are not equal, an `AssertionError` is thrown with
 * a `message` property set equal to the value of the `message` parameter.
 * If the `message` parameter is undefined, a default error message is assigned.
 */
export function equal(actual: any, expected: any, message ?: string): void;

/**
 * Tests shallow, coercive inequality with the not equal comparison operator ( `!=` ).
 * 
 * ```js
 * const assert = require('assert');
 * 
 * assert.notEqual(1, 2);
 * // OK
 * 
 * assert.notEqual(1, 1);
 * // AssertionError: 1 != 1
 * 
 * assert.notEqual(1, '1');
 * // AssertionError: 1 != '1'
 * ```
 * 
 * If the values are equal, an `AssertionError` is thrown with
 * a `message` property set equal to the value of the `message` parameter.
 * If the `message` parameter is undefined, a default error message is assigned.
 */
export function notEqual(actual: any, expected: any, message ?: string): void;

/**
 * Tests for deep equality between the `actual` and `expected` parameters.
 * Primitive values are compared with the equal comparison operator ( `==` ).
 * 
 * Only enumerable "own" properties are considered.
 * The `deepEqual()` implementation does not test object prototypes, attached symbols,
 * or non-enumerable properties. This can lead to some potentially surprising results.
 * For example, the following example does not throw an `AssertionError` because
 * the properties on the Error object are non-enumerable:
 * 
 * ```js
 * // WARNING: This does not throw an AssertionError!
 * assert.deepEqual(Error('a'), Error('b'));
 * ```
 * 
 * "Deep" equality means that the enumerable "own" properties of child objects are evaluated also.
 * 
 * If the values are not equal, an `AssertionError` is thrown with a `message` property
 * set equal to the value of the `message` parameter. If the `message` parameter is undefined,
 * a default error message is assigned.
 */
export function deepEqual(actual: any, expected: any, message ?: string): void;

/**
 * Tests for any deep inequality. Opposite of `assert.deepEqual()`.
 * 
 * ```js
 * const assert = require('assert');
 * 
 * const obj1 = { a : { b : 1 } };
 * const obj2 = { a : { b : 2 } };
 * const obj3 = { a : { b : 1 } };
 * const obj4 = Object.create(obj1);
 * 
 * assert.notDeepEqual(obj1, obj1);
 * // AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
 * 
 * assert.notDeepEqual(obj1, obj2);
 * // OK, obj1 and obj2 are not deeply equal
 * 
 * assert.notDeepEqual(obj1, obj3);
 * // AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
 * 
 * assert.notDeepEqual(obj1, obj4);
 * // OK, obj1 and obj2 are not deeply equal
 * ```
 * 
 * If the values are deeply equal, an `AssertionError` is thrown with
 * a `message` property set equal to the value of the `message` parameter.
 * If the `message` parameter is undefined, a default error message is assigned.
 */
export function notDeepEqual(actual: any, expected: any, message ?: string): void;

/**
 * Tests strict equality as determined by the strict equality operator ( `===` ).
 * 
 * ```js
 * const assert = require('assert');
 * 
 * assert.strictEqual(1, 2);
 * // AssertionError: 1 === 2
 * 
 * assert.strictEqual(1, 1);
 * // OK
 * 
 * assert.strictEqual(1, '1');
 * // AssertionError: 1 === '1'
 * ```
 * 
 * If the values are not strictly equal, an `AssertionError` is thrown with
 * a `message` property set equal to the value of the `message` parameter.
 * If the `message` parameter is undefined, a default error message is assigned.
 */
export function strictEqual(actual: any, expected: any, message ?: string): void;

/**
 * Tests strict inequality as determined by the strict not equal operator ( `!==` ).
 * 
 * ```js
 * const assert = require('assert');
 * 
 * assert.notStrictEqual(1, 2);
 * // OK
 * 
 * assert.notStrictEqual(1, 1);
 * // AssertionError: 1 !== 1
 * 
 * assert.notStrictEqual(1, '1');
 * // OK
 * ```
 * 
 * If the values are strictly equal, an `AssertionError` is thrown with a `message` property
 * set equal to the value of the `message` parameter. If the `message` parameter is undefined,
 * a default error message is assigned.
 */
export function notStrictEqual(actual: any, expected: any, message ?: string): void;

/**
 * 
 */
export function throws(block: any, error ?: any, message ?: string): void;

/**
 * Asserts that the function `block` does not throw an error. See `assert.throws()` for more details.
 * 
 * When `assert.doesNotThrow()` is called, it will immediately call the `block` function.
 * 
 * If an error is thrown and it is the same type as that specified by the `error` parameter,
 * then an `AssertionError` is thrown. If the error is of a different type,
 * or if the `error` parameter is undefined, the error is propagated back to the caller.
 * 
 * The following, for instance, will throw the TypeError because there is no matching error type in the assertion:
 * ```js
 * assert.doesNotThrow(
 *   () => {
 *     throw new TypeError('Wrong value');
 *   },
 *   SyntaxError
 * );
 * ```
 * 
 * However, the following will result in an `AssertionError` with the message 'Got unwanted exception (TypeError)..':
 * ```js
 * assert.doesNotThrow(
 *   () => {
 *     throw new TypeError('Wrong value');
 *   },
 *   TypeError
 * );
 * ```
 * 
 * If an `AssertionError` is thrown and a value is provided for the `message` parameter,
 * the value of `message` will be appended to the `AssertionError` message:
 * ```js
 * assert.doesNotThrow(
 *   () => {
 *     throw new TypeError('Wrong value');
 *   },
 *   TypeError,
 *   'Whoops'
 * );
 * // Throws: AssertionError: Got unwanted exception (TypeError). Whoops
 * ```
 */
export function doesNotThrow(block: any, error ?: any, message ?: string): void;

/**
 * Throws `value` if `value` is truthy. This is useful when testing the `error` argument in callbacks.
 * ```js
 * const assert = require('assert');
 * 
 * assert.ifError(0);
 * // OK
 * assert.ifError(1);
 * // Throws 1
 * assert.ifError('error');
 * // Throws 'error'
 * assert.ifError(new Error());
 * // Throws Error
 * ```
 */
export function ifError(value: any): void;


export as namespace AssertPlus;
