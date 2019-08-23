// Type definitions for proclaim 3.6
// Project: https://github.com/rowanmanning/proclaim
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export {};

interface AssertionError {
    msg: string;
    actual: any;
    expected: any;
    operator: string;
    stackStartFunction: any;
}

/**
 * Throw an assertion error.
 */
export function fail(actual: any, expected: any, msg: string, operator: string): AssertionError;

/**
 * Assert that value is truthy.
 */
export function ok(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is falsy.
 */
export function notOk(value: any, msg: string): AssertionError|void;

/**
 * Assert that actual == expected.
 */
export function equal(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual != expected.
 */
export function notEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual === expected.
 */
export function strictEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual !== expected.
 */
export function notStrictEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual is deeply equal to expected.
 */
export function deepEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual is not deeply equal to expected.
 */
export function notDeepEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual is deeply equal to expected, as determined by the strict equality operator ===.
 */
export function deepStrictEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual is not deeply equal to expected, as determined by the strict not equal operator !==.
 */
export function notDeepStrictEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that fn throws an error.
 */
export function throws(fn: () => void, expected: any, msg: string): AssertionError|void;

/**
 * Assert that fn does not throw an error.
 */
export function doesNotThrow(fn: () => void, expected: any, msg: string): AssertionError|void;

/**
 * Assert that typeof actual === expected.
 */
export function isTypeOf(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that typeof actual !== expected.
 */
export function isNotTypeOf(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual instanceof expected.
 */
export function isInstanceOf(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that !(actual instanceof expected).
 */
export function isNotInstanceOf(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that value is an array.
 */
export function isArray(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not an array.
 */
export function isNotArray(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is a boolean.
 */
export function isBoolean(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not a boolean.
 */
export function isNotBoolean(value: any, msg: string): AssertionError|void;

/**
 * Assert that value === true.
 */
export function isTrue(value: any, msg: string): AssertionError|void;

/**
 * Assert that value === false.
 */
export function isFalse(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is a function.
 */
export function isFunction(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not a function.
 */
export function isNotFunction(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is NaN.
 */
export function isNaN(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not NaN.
 */
export function isNotNaN(value: any, msg: string): AssertionError|void;

/**
 * Assert that value === null.
 */
export function isNull(value: any, msg: string): AssertionError|void;

/**
 * Assert that value !== null.
 */
export function isNotNull(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is a number.
 */
export function isNumber(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not a number.
 */
export function isNotNumber(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is an object.
 */
export function isObject(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not an object.
 */
export function isNotObject(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is a string.
 */
export function isString(value: any, msg: string): AssertionError|void;

/**
 * Assert that value is not a string.
 */
export function isNotString(value: any, msg: string): AssertionError|void;

/**
 * Assert that value === undefined.
 */
export function isUndefined(value: any, msg: string): AssertionError|void;

/**
 * Assert that value !== undefined.
 */
export function isDefined(value: any, msg: string): AssertionError|void;

/**
 * Assert that actual matches the RegExp in expected.
 */
export function match(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual does not match the RegExp in expected.
 */
export function notMatch(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that haystack contains needle.
 */
export function include(haystack: any, needle: any, msg: string): AssertionError|void;

/**
 * Assert that haystack does not contain needle.
 */
export function doesNotInclude(haystack: any, needle: any, msg: string): AssertionError|void;

/**
 * Assert that value.length === expected.
 */
export function lengthEquals(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual < expected.
 */
export function lessThan(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual <= expected.
 */
export function lessThanOrEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual > expected.
 */
export function greaterThan(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that actual >= expected.
 */
export function greaterThanOrEqual(actual: any, expected: any, msg: string): AssertionError|void;

/**
 * Assert that fn.length === expected.
 */
export function arity(fn: () => void, expected: any, msg: string): AssertionError|void;

/**
 * Assert that Math.abs(actual - expected) < (0.5 * Math.pow(10, -precision)).
 */
export function almostEqual(actual: any, expected: any, precision: number, msg: string): AssertionError|void;

/**
 * Assert that obj[property] is not enumerable.
 */
export function isNotEnumerable(object: object, property: any, msg: string): AssertionError|void;

/**
 * Assert that obj[property] is enumerable.
 */
export function isEnumerable(object: object, property: any, msg: string): AssertionError|void;

/**
 * Assert that fn.name === expected.
 */
export function hasName(fn: () => void, expected: any, msg: string): AssertionError|void;
