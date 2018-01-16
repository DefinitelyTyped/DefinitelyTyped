// Type definitions for quick-lru 1.1
// Project: https://github.com/sindresorhus/quick-lru#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = QuickLRU;

declare class QuickLRU<K, V> implements Iterable<[K, V]> {
    readonly size: number;
    constructor(options?: QuickLRU.Options);
    [Symbol.iterator](): Iterator<[K, V]>;
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    has(key: K): boolean;
    peek(key: K): V | undefined;
    delete(key: K): void;
    clear(): void;
    keys(): Iterable<K>;
    values(): Iterable<V>;
}

declare namespace QuickLRU {
    interface Options {
        maxSize: number;
    }
}
