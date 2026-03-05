/**
 * A memory-backed implementation of the Web Storage API.
 *
 * @see https://github.com/download/memorystorage
 */

interface MemoryStorage {
    /** The identifier for this storage instance. */
    readonly id: string;

    /** The number of key/value pairs currently present in the storage. */
    readonly length: number;

    /**
     * Returns the value associated with the given key, or `null` if the key does not exist.
     * @param key The name of the key to retrieve the value of.
     */
    getItem(key: string): string | null;

    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     * @param key The name of the key to create/update.
     * @param value The value to set.
     */
    setItem(key: string, value: string): void;

    /**
     * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
     * @param key The name of the key to remove.
     */
    removeItem(key: string): void;

    /**
     * Returns the name of the nth key, or `null` if n is greater than or equal to the number of key/value pairs.
     * @param index The index of the key to return.
     */
    key(index: number): string | null;

    /**
     * Removes all key/value pairs, if there are any.
     */
    clear(): void;

    /** Index signature to allow accessing stored items as properties. */
    [key: string]: any;
}

interface MemoryStorageConstructor {
    /**
     * Creates a new MemoryStorage object implementing the Web Storage API using memory.
     *
     * If no arguments are given, the created memory storage object will read from and write to the
     * `global` memory storage. If a string argument is given, the new storage object will read from
     * and write to its own segment of memory.
     *
     * Can be called with or without `new`.
     *
     * @param id Optional string argument used to isolate this memory storage object from others.
     */
    new(id?: string): MemoryStorage;
    (id?: string): MemoryStorage;
}

declare const MemoryStorage: MemoryStorageConstructor;

export = MemoryStorage;
