// Type definitions for proclaim 3.6
// Project: https://github.com/rowanmanning/proclaim
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface AssertionError {
    msg: string;
    actual: any;
    expected: any;
    operator: string;
    stackStartFunction: any;
}

// export as namespace proclaim;
export = proclaim;
declare function proclaim(value: any, msg?: string): AssertionError|void;

declare namespace proclaim {
    /**
     * Throw an assertion error.
     */
    function fail(actual: any, expected: any, msg?: string, operator?: string): AssertionError;

    /**
     * Assert that value is truthy.
     */
    const ok: typeof proclaim;
    /**
     * Assert that value is falsy.
     */
    function notOk(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual == expected.
     */
    function equal(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual != expected.
     */
    function notEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual === expected.
     */
    function strictEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual !== expected.
     */
    function notStrictEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual is deeply equal to expected.
     */
    function deepEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual is not deeply equal to expected.
     */
    function notDeepEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual is deeply equal to expected, as determined by the strict equality operator ===.
     */
    function deepStrictEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual is not deeply equal to expected, as determined by the strict not equal operator !==.
     */
    function notDeepStrictEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that fn throws an error.
     */
    function throws(fn: () => void, expected?: any, msg?: string): AssertionError|void;

    /**
     * Assert that fn does not throw an error.
     */
    function doesNotThrow(fn: () => void, expected?: any, msg?: string): AssertionError|void;

    /**
     * Assert that typeof actual === expected.
     */
    function isTypeOf(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that typeof actual !== expected.
     */
    function isNotTypeOf(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual instanceof expected.
     */
    function isInstanceOf(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that !(actual instanceof expected).
     */
    function isNotInstanceOf(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is an array.
     */
    function isArray(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not an array.
     */
    function isNotArray(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is a boolean.
     */
    function isBoolean(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not a boolean.
     */
    function isNotBoolean(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value === true.
     */
    function isTrue(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value === false.
     */
    function isFalse(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is a function.
     */
    function isFunction(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not a function.
     */
    function isNotFunction(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is NaN.
     */
    function isNaN(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not NaN.
     */
    function isNotNaN(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value === null.
     */
    function isNull(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value !== null.
     */
    function isNotNull(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is a number.
     */
    function isNumber(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not a number.
     */
    function isNotNumber(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is an object.
     */
    function isObject(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not an object.
     */
    function isNotObject(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is a string.
     */
    function isString(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value is not a string.
     */
    function isNotString(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value === undefined.
     */
    function isUndefined(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that value !== undefined.
     */
    function isDefined(value: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual matches the RegExp in expected.
     */
    function match(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual does not match the RegExp in expected.
     */
    function notMatch(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that haystack contains needle.
     */
    function include(haystack: any, needle: any, msg?: string): AssertionError|void;

    /**
     * Assert that haystack does not contain needle.
     */
    function doesNotInclude(haystack: any, needle: any, msg?: string): AssertionError|void;

    /**
     * Assert that value.length === expected.
     */
    function lengthEquals(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual < expected.
     */
    function lessThan(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual <= expected.
     */
    function lessThanOrEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual > expected.
     */
    function greaterThan(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that actual >= expected.
     */
    function greaterThanOrEqual(actual: any, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that fn.length === expected.
     */
    function arity(fn: () => void, expected: any, msg?: string): AssertionError|void;

    /**
     * Assert that Math.abs(actual - expected) < (0.5 * Math.pow(10, -precision)).
     */
    function almostEqual(actual: any, expected: any, precision: number, msg?: string): AssertionError|void;

    /**
     * Assert that obj[property] is not enumerable.
     */
    function isNotEnumerable(object: object, property: any, msg?: string): AssertionError|void;

    /**
     * Assert that obj[property] is enumerable.
     */
    function isEnumerable(object: object, property: any, msg?: string): AssertionError|void;

    /**
     * Assert that fn.name === expected.
     */
    function hasName(fn: () => void, expected: any, msg?: string): AssertionError|void;
}
