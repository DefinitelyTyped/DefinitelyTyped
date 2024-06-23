declare class HashMap<KeyType, ValueType> {
    /**
     * Return value from hashmap.
     *
     * @param key Key.
     * @return Value stored under given key.
     */
    get(key: KeyType): ValueType;

    /**
     * Store value in hashmap.
     *
     * @param key Key.
     * @param value Value.
     */
    set(key: KeyType, value: ValueType): void;

    /**
     * Checks if given key exists in hashmap.
     *
     * @param key Key.
     * @return Whether given key exists in hashmap.
     */
    has(key: KeyType): boolean;

    /**
     * Removes given key from hashmap.
     *
     * @param key Key.
     */
    remove(key: KeyType): void;

    /**
     * Returns all contained keys.
     *
     * @return List of keys.
     */
    keys(): KeyType[];

    /**
     * Returns all container values.
     *
     * @return List of values.
     */
    values(): ValueType[];

    /**
     * Returns size of hashmap (number of entries).
     *
     * @return Number of entries in hashmap.
     */
    count(): number;

    /**
     * Clears hashmap.
     */
    clear(): void;

    /**
     * Iterates over hashmap.
     *
     * @param callback Function to be invoked for every hashmap entry.
     */
    forEach(callback: (value: ValueType, key: KeyType) => void): void;
}
