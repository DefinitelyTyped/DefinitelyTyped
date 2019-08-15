// Type definitions for es6-weak-map 1.2
// Project: https://github.com/medikoo/es6-weak-map
// Definitions by: Pine Mizune <https://github.com/pine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = WeakMap;
export as namespace WeakMap;

interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

declare class WeakMap<K, V> {
    constructor();
    constructor(iterable: Iterable<[K, V]>);

    delete(key: K): boolean;
    get(key: K): V;
    has(key: K): boolean;
    set(key: K, value?: V): WeakMap<K, V>;
}
