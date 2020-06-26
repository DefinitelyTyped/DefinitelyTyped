import ES2016 = require('./es2016');

interface ES2017 extends Omit<ES2016, 'EnumerableOwnNames' | 'IterableToArrayLike'> {
    ToIndex(value: unknown): number;

    /** Get own enumerable property keys. */
    EnumerableOwnProperties(O: object, kind: 'key'): string[];

    /** Get own enumerable property values. */
    EnumerableOwnProperties<T>(O: { [s: string]: T } | ArrayLike<T>, kind: 'value'): T[];

    /** Get own enumerable property entries. */
    EnumerableOwnProperties<T>(O: { [s: string]: T } | ArrayLike<T>, kind: 'key+value'): Array<[string, T]>;

    /** Get own enumerable property entries. */
    EnumerableOwnProperties(O: object, kind: 'key+value'): Array<[string, unknown]>;

    /** Get own enumerable properties. */
    EnumerableOwnProperties(O: object, kind: 'key' | 'value' | 'key+value'): unknown[];

    /**
     * @param items The items
     * @param method The method to use to get the `Iterator`
     */
    IterableToList<T>(items: Iterable<T>): T[];
    IterableToList<O, T>(items: O, method: (this: O) => Iterator<T>): T[];
}

declare namespace ES2017 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2016.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2016.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2016.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2016.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2016.PropertyDescriptor<T>;
}

declare const ES2017: ES2017;
export = ES2017;
