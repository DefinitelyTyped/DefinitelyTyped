/**
 * Checks if a value is an object or array (but not null or RegExp).
 *
 * @param val - The value to check
 * @returns true if the value is an object or array (not null/undefined/RegExp)
 *
 * @example
 * ```javascript
 * var isObjectOrArray = require('objectorarray');
 *
 * isObjectOrArray({}); // true
 * isObjectOrArray([]); // true
 * isObjectOrArray(null); // false
 * isObjectOrArray(undefined); // false
 * isObjectOrArray(/regex/); // false
 * isObjectOrArray('string'); // false
 * isObjectOrArray(123); // false
 * ```
 */
declare function objectorarray(val: unknown): val is object;

export = objectorarray;
