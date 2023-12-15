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
