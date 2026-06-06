/**
 * Deterministic JSON.stringify() - outputs the same string regardless of key
 * insertion order by sorting object keys alphabetically.
 *
 * @param val - The value to stringify
 * @returns A JSON string representation, or undefined if the value cannot be stringified
 *
 * @example
 * ```javascript
 * const stringify = require('fast-stable-stringify');
 * const obj = { c: 8, b: [{ z: 6, y: 5, x: 4 }, 7], a: 3 };
 * console.log(stringify(obj));
 * // Output: {"a":3,"b":[{"x":4,"y":5,"z":6},7],"c":8}
 * ```
 */
declare function stringify(val: unknown): string | undefined;

export = stringify;
