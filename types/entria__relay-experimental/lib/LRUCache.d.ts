export interface Cache<T> {
    get(key: string): T | null;
    set(key: string, value: T): void;
    has(key: string): boolean;
    delete(key: string): void;
    size(): number;
    capacity(): number;
    clear(): void;
}

/**
 * JS maps (both plain objects and Map) maintain key insertion
 * order, which means there is an easy way to simulate LRU behavior
 * that should also perform quite well:
 *
 * To insert a new value, first delete the key from the inner _map,
 * then _map.set(k, v). By deleting and reinserting, you ensure that the
 * map sees the key as the last inserted key.
 *
 * Get does the same: if the key is present, delete and reinsert it.
 */
declare class LRUCache<T> implements Cache<T> {
    _capacity: number;
    _map: Map<string, T>;

    constructor(capacity: number);

    set(key: string, value: T): void;

    get(key: string): T | null;

    has(key: string): boolean;

    delete(key: string): void;

    size(): number;

    capacity(): number;

    clear(): void;
}

// tslint:disable-next-line:no-unnecessary-generics
declare function create<T>(capacity: number): LRUCache<T>;

export { create };
