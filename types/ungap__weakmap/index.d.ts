// Type definitions for @ungap/weakmap 0.1
// Project: https://github.com/ungap/weakmap#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Based on definitions from `lib.es2015.collection` and `lib.es2015.iterable`.
 */
declare class WeakMap<K extends object = object, V = any> {
    constructor(entries?: ReadonlyArray<[K, V]> | null);
    constructor(iterable: Iterable<[K, V]> | null | undefined);

    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
}

export = WeakMap;
export as namespace WeakMap;
