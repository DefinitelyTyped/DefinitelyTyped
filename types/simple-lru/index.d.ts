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
