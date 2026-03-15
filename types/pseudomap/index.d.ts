declare class PseudoMap<K, V> {
    constructor(set?: PseudoMap<K, V> | Map<K, V> | ReadonlyArray<[K, V]>);

    readonly size: number;

    clear(): void;
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    has(key: K): boolean;
    delete(key: K): boolean;
    forEach(callback: (value: V, key: K, map: PseudoMap<K, V>) => void, thisArg?: any): void;
}

export = PseudoMap;
