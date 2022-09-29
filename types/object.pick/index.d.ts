// Type definitions for object.pick 1.3
// Project: https://github.com/jonschlinkert/object.pick
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * Returns a filtered copy of an object with only the specified keys, similar to `_.pick` from lodash / underscore.
 *
 * @param object
 * @param keys
 */
declare function pick<T extends object, U extends keyof T>(object: T, keys: readonly U[]): Pick<T, U>;

export = pick;
