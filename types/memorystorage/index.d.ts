/**
 * A memory-backed implementation of the Web Storage API.
 *
 * Creates a MemoryStorage object that implements the Web Storage API
 * (like localStorage/sessionStorage) but stores data in memory.
 *
 * @example
 * ```javascript
 * const MemoryStorage = require('memorystorage');
 *
 * // Create isolated storage
 * const storage = new MemoryStorage('my-app');
 *
 * // Use like localStorage
 * storage.setItem('key', 'value');
 * console.log(storage.getItem('key')); // 'value'
 * ```
 */
declare class MemoryStorage {
    /**
     * Creates a new MemoryStorage object.
     *
     * If no arguments are given, the storage will read from and write to the
     * global memory storage. If a string id is given, the storage will be
     * isolated to that namespace.
     *
     * @param id - Optional string to isolate this storage from others
     */
    constructor(id?: string);

    /**
     * The id of this storage instance.
     */
    readonly id: string;

    /**
     * The number of key/value pairs in the storage.
     */
    readonly length: number;

    /**
     * Returns the value associated with the given key, or null if the key does not exist.
     *
     * @param key - The key to look up
     * @returns The value, or null if not found
     */
    getItem(key: string): string | null;

    /**
     * Sets the value for the given key. Creates the key if it doesn't exist.
     *
     * @param key - The key to set
     * @param value - The value to store
     */
    setItem(key: string, value: string): void;

    /**
     * Removes the key/value pair with the given key, if it exists.
     *
     * @param key - The key to remove
     */
    removeItem(key: string): void;

    /**
     * Returns the name of the key at the given index, or null if the index is out of range.
     *
     * @param index - The zero-based index
     * @returns The key name, or null if index is out of range
     */
    key(index: number): string | null;

    /**
     * Removes all key/value pairs from the storage.
     */
    clear(): void;

    /**
     * Allows direct property access for stored items.
     */
    [key: string]: string | ((...args: any[]) => any) | number | undefined;
}

/**
 * Factory function to create a MemoryStorage instance.
 * Can be called with or without `new`.
 *
 * @param id - Optional string to isolate this storage from others
 */
declare function MemoryStorage(id?: string): MemoryStorage;

export = MemoryStorage;
export as namespace MemoryStorage;
