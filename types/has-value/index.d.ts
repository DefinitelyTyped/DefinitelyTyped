/**
 * Returns true if a value exists, false if empty.
 * Works with deeply nested values using object paths.
 *
 * @param obj - The object to check
 * @param path - Property path as a string or array of keys
 * @param options - Options passed to get-value
 * @returns Whether the property at the path has a value
 */
declare function hasValue(obj: object, path: string | string[], options?: object): boolean;

export = hasValue;
