// Type definitions for keshi 1.0
// Project: https://github.com/DominicTobias/keshi#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare function keshi(cleanupInterval?: string | number): Keshi;

interface Keshi {
    /**
     * Stops the cleanup task, canceling any future cleanup actions.
     */
    stopCleanupTask: () => void;

    /**
     * Resolves a cached value, retrieving it from the cache, or adding it if it does not exist.
     * @param key The key to use for the current value.
     * @param value The value to retrieve/store.
     * @param expiresIn The length of time to cache the value for. (Format milliseconds/ms string).
     * @returns The value returned or stored in the cache.
     * @see https://github.com/guille/ms.js For information about ms strings.
     */
    resolve: <T = any>(key: string, value: T, expiresIn: string | number) => Promise<T>;

    /**
     * Removes the item specified by the key from the cache.
     * @param key The key of the cache item to delete.
     */
    del: (key: string) => void;

    /**
     * Clears the cache, removing all items.
     */
    clear: () => void;
}

export default keshi;
