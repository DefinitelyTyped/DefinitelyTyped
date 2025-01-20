declare class Multimap<K = any, V = any> {
    constructor(iterable?: ReadonlyArray<[K, V]> | ReadonlySet<[K, V]>);

    /**
     * Number of values
     */
    size: number;

    /**
     * Number of keys
     */
    count: number;

    clear(): void;

    /**
     * @param key
     * @param val
     * @return true if any thing changed
     */
    delete(key: K, val?: V): boolean;

    /**
     * @param iter
     */
    forEach(iter: (value: V, key: K, map: Multimap<K, V>) => void): void;

    /**
     * @param iter
     */
    forEachEntry(iter: (value: V[], key: K, map: Multimap<K, V>) => void): void;

    /**
     * @param key
     */
    get(key: K): V[];

    /**
     * @param key
     * @param val
     * @return whether the map contains 'key' or 'key=>val' pair
     */
    has(key: K, val?: V): boolean;

    /**
     * @return all the keys in the map
     */
    keys(): { [Symbol.iterator](): IterableIterator<K>; next: () => { value: K; done: boolean } };

    /**
     * @param key
     * @param val
     */
    set(key: K, val: V, ...args: V[]): this;

    /**
     * @return all the values in the map
     */
    values(): { [Symbol.iterator](): IterableIterator<V>; next: () => { value: V; done: boolean } };
}

export = Multimap;
