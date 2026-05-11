declare class HashMap<TKey, TValue> {
    /**
     * Creates an empty hashmap.
     */
    constructor();

    /**
     * Creates a hashmap with the key-value pairs of map or from an array of key-values.
     *
     * @param data A hashmap to copy from or a set or key-value pairs for the initialization.
     */
    constructor(data: HashMap<TKey, TValue> | Array<[TKey, TValue]>);

    /**
     * Creates a hashmap with several key-value pairs.
     *
     * @param keysAndValues key1, value1, key2, value2...
     */
    constructor(...keysAndValues: Array<(TKey | TValue)>);

    /**
     * Return value from hashmap.
     *
     * @param key Key.
     * @return Value stored under given key. If no value is stored for the key, returns undefined.
     */
    get(key: TKey): TValue | undefined;

    /**
     * Store value in hashmap.
     *
     * @param key Key.
     * @param value Value.
     * @return Self.
     */
    set(key: TKey, value: TValue): HashMap<TKey, TValue>;

    /**
     * Store several key-value pairs.
     *
     * @param keysAndValues key1, value1, key2, value2...
     * @return Self.
     */
    multi(...keysAndValues: Array<TKey | TValue>): HashMap<TKey, TValue>;

    /**
     * Copy all key-value pairs from other to this instance.
     *
     * @param map Other map.
     * @return Self.
     */
    copy(map: HashMap<TKey, TValue>): HashMap<TKey, TValue>;

    /**
     * Checks if given key exists in hashmap.
     *
     * @param key Key.
     * @return Whether given key exists in hashmap.
     */
    has(key: TKey): boolean;

    /**
     * Returns key under which given value is stored.
     *
     * @param value Value.
     * @return Key which is assigned to value stored.
     */
    search(value: TValue): TKey;

    /**
     * Removes given key from hashmap.
     *
     * @param key Key.
     * @return Self.
     */
    delete(key: TKey): HashMap<TKey, TValue>;

    /**
     * Removes given key from hashmap.
     *
     * @param key Key.
     * @return Self.
     * @deprecated Since 2.3.0
     */
    remove(key: TKey): HashMap<TKey, TValue>;

    /**
     * Returns all contained keys.
     *
     * @return List of keys.
     */
    keys(): TKey[];

    /**
     * Returns all container values.
     *
     * @return List of values.
     */
    values(): TValue[];

    /**
     * Returns all key-value pairs.
     *
     * @return List of key-value pairs.
     * @since 2.3.0
     */
    entries(): Array<[TKey, TValue]>;

    /**
     * Returns size of hashmap (number of entries).
     *
     * @return Number of entries in hashmap.
     */
    count(): number;

    /**
     * Clears hashmap.
     *
     * @return Self.
     */
    clear(): HashMap<TKey, TValue>;

    /**
     * Creates a new hashmap with all the key-value pairs of the original
     *
     * @return New hashmap.
     */
    clone(): HashMap<TKey, TValue>;

    /**
     * Iterates over hashmap.
     *
     * @param callback Function to be invoked for every hashmap entry.
     * @return Self.
     */
    forEach(callback: (value: TValue, key: TKey) => void): HashMap<TKey, TValue>;
}

export = HashMap;
export as namespace HashMap;
