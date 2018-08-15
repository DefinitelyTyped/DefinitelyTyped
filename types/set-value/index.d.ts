// Type definitions for set-value 2.0
// Project: https://github.com/jonschlinkert/set-value
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = set;

// Technically, everything will fall to the last overload,
// but the first one can be useful for signature help.

/**
 * @param object The object to set `value` on
 * @param prop The property to set.
 * @param value The value to set on `object[prop]`
 */
declare function set<T, K extends keyof T>(object: T, prop: K, value: T[K]): void;
/**
 * @param object The object to set `value` on
 * @param prop The property to set. Dot-notation may be used.
 * @param value The value to set on `object[prop]`
 */
declare function set(object: object, prop: string, value: any): void;
