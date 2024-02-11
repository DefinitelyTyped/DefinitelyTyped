interface AssertionError {
    msg: string;
    actual: any;
    expected: any;
    operator: string;
    stackStartFunction: any;
}

// export as namespace proclaim;
export = proclaim;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
declare function proclaim(value: any, msg?: string): AssertionError | void;

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
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function notOk(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual == expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function equal(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual != expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function notEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual === expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function strictEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual !== expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function notStrictEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual is deeply equal to expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function deepEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual is not deeply equal to expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function notDeepEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual is deeply equal to expected, as determined by the strict equality operator ===.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function deepStrictEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual is not deeply equal to expected, as determined by the strict not equal operator !==.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function notDeepStrictEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that fn throws an error.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function throws(fn: () => void, expected?: any, msg?: string): AssertionError | void;

    /**
     * Assert that fn does not throw an error.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function doesNotThrow(fn: () => void, expected?: any, msg?: string): AssertionError | void;

    /**
     * Assert that typeof actual === expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isTypeOf(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that typeof actual !== expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotTypeOf(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual instanceof expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isInstanceOf(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that !(actual instanceof expected).
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotInstanceOf(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is an array.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isArray(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not an array.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotArray(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is a boolean.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isBoolean(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not a boolean.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotBoolean(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value === true.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isTrue(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value === false.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isFalse(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is a function.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isFunction(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not a function.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotFunction(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is NaN.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNaN(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not NaN.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotNaN(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value === null.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNull(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value !== null.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotNull(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is a number.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNumber(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not a number.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotNumber(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is an object.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isObject(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not an object.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotObject(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is a string.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isString(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value is not a string.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotString(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value === undefined.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isUndefined(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that value !== undefined.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isDefined(value: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual matches the RegExp in expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function match(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual does not match the RegExp in expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function notMatch(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that haystack contains needle.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function include(haystack: any, needle: any, msg?: string): AssertionError | void;

    /**
     * Assert that haystack does not contain needle.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function doesNotInclude(haystack: any, needle: any, msg?: string): AssertionError | void;

    /**
     * Assert that value.length === expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function lengthEquals(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual < expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function lessThan(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual <= expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function lessThanOrEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual > expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function greaterThan(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that actual >= expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function greaterThanOrEqual(actual: any, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that fn.length === expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function arity(fn: () => void, expected: any, msg?: string): AssertionError | void;

    /**
     * Assert that Math.abs(actual - expected) < (0.5 * Math.pow(10, -precision)).
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function almostEqual(actual: any, expected: any, precision: number, msg?: string): AssertionError | void;

    /**
     * Assert that obj[property] is not enumerable.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isNotEnumerable(object: object, property: any, msg?: string): AssertionError | void;

    /**
     * Assert that obj[property] is enumerable.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function isEnumerable(object: object, property: any, msg?: string): AssertionError | void;

    /**
     * Assert that fn.name === expected.
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function hasName(fn: () => void, expected: any, msg?: string): AssertionError | void;
}
