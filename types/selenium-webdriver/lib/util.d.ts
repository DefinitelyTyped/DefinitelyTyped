/**
 * Determines whether a {@code value} should be treated as an object.
 * @param {?} value The value to test.
 * @returns {boolean} Whether the value is an object.
 */
export function isObject(value: any): boolean;

/**
 * Determines whether a {@code value} should be treated as a promise.
 * Any object whose "then" property is a function will be considered a promise.
 *
 * @param {?} value The value to test.
 * @return {boolean} Whether the value is a promise.
 */
export function isPromise(value: any): boolean;
