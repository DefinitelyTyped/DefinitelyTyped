/**
 * Returns a filtered copy of an object with only the specified keys, similar to `_.pick` from lodash / underscore.
 *
 * @param object
 * @param keys
 */
declare function pick<T extends object, U extends keyof T>(object: T, keys: readonly U[]): Pick<T, U>;

export = pick;
