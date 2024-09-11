declare function deepClone<T>(obj: T, seen?: WeakMap<object, any>): T;

/**
 * Determines if the provided `value` is classified as a `Function` object.
 *
 * @since 1.0.1
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} `true` if the value is a function, otherwise `false`.
 */
declare function isFunction(value: unknown): boolean;

/**
 * Determines if the provided `value` is classified as an `object`.
 *
 * @since 1.0.1
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} `true` if the value is an object, otherwise `false`.
 */
declare function isObject(value: unknown): boolean;

export { deepClone, isFunction, isObject };
