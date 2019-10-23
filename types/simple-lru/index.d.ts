// Type definitions for simple-lru 0.0
// Project: https://github.com/smagch/simple-lru
// Definitions by: NN <https://github.com/NN--->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare class SimpleLRU<K, V> {
    constructor(max: number);
    del(key: K): V | undefined;
    get(key: K): V | undefined;
    has(key: K): boolean;
    keys(): K[];
    length(): number;
    max(max?: number): number;
    peek(key: K): V | undefined;
    reset(): void;
    set(key: K, val: V): void;
    static version: string;
}

export = SimpleLRU;
