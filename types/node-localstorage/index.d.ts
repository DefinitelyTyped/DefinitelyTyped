// Type definitions for node-localstorage 1.3
// Project: https://github.com/lmaccherone/node-localstorage
// Definitions by: Allen Gammel <https://github.com/intolerance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export class LocalStorage {
    /**
     * Creates a new LocalStorage instance
     * @param location The location in which the local storage resides
     * @param quota The partitioned size of the local storage
     */
    constructor(location: string, quota?: number);
    /**
     * The number of keys in the local storage.
     */
    length: number;
    /**
     * Clears the local storage
     */
    clear(): void;
    /**
     * Gets the value of the given [key]
     * @param key The key whose value you want to retrieve.
     */
    getItem(key: string): string | null;
    /**
     * Retrieves the value of the key at the [index].
     * @param index The index of the key in which you want to return the value of.
     */
    key(index: number): string;
    /**
     * Removes the specified [key] from local storage.
     * @param key The key you want to remove.
     */
    removeItem(key: string): void;
    /**
     * 
     * @param key Unique identifier for the new local storage item
     * @param value The value of the item
     */
    setItem(key: string, value: string): void;
}
export class JSONStorage extends LocalStorage {
    /**
     * Creates a new LocalStorage instance
     * @param location The location in which the local storage resides
     * @param quota The partitioned size of the local storage
     */
    constructor(location: string, quota?: number);
    /**
     * Gets the value of the given [key]
     * @param key The key whose value you want to retrieve.
     * @returns `Array of Objects` or an `Object`. This `getItem` method performs a `JSON.parse` on the value before returning it.
     */
    getItem(key: string): any | null;
    /**
     * 
     * @param key Unique identifier for the new local storage item
     * @param value The value associated with the `key`. This `setItem` method performs a `JSON.stringify` on the value before storing it. The `value` *must* be a valid `JSON` object.
     */
    setItem(key: string, value: string | [] | object): void;
}
