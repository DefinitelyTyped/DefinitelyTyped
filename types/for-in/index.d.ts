/**
 * Iterate over the own and inherited enumerable properties of an object.
 * The iterator function can return `false` to break the loop early.
 *
 * @param obj - Object to iterate over
 * @param fn - Iterator function receiving (value, key, obj)
 * @param thisArg - Optional `this` context for the iterator
 */
declare function forIn<T extends object>(
    obj: T,
    fn: (value: any, key: string, obj: T) => unknown,
    thisArg?: any,
): void;

export = forIn;
