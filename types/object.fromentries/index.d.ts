// Adapted from node_modules/typescript/lib/lib.es2019.object.d.ts

/**
 * Returns an object created by key-value entries for properties and methods
 * @param entries An iterable object that contains key-value entries for properties and methods.
 */
declare function fromEntries<T = any>(
    entries: Iterable<readonly [PropertyKey, T]>,
): {
    [k in PropertyKey]: T;
};

/**
 * Returns an object created by key-value entries for properties and methods
 * @param entries An iterable object that contains key-value entries for properties and methods.
 */
declare function fromEntries(entries: Iterable<readonly any[]>): any;

export = fromEntries;
