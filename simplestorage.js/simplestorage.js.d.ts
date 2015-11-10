// Type definitions for simpleStorage v0.1.3
// Project: https://github.com/andris9/simpleStorage
// Definitions by: Áxel Costas Pena <https://github.com/axelcostaspena>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module simplestoragejs {

    /**
     * {@link simpleStorage} API is a subset of {@link http://www.jstorage.info/|jStorage} with slight modifications, so for most cases it should work out of the box if you are converting from {@link http://www.jstorage.info/|jStorage}. Main difference is between return values - if an action failed because of an error (storage full, storage not available, invalid data used etc.), you get the error object as the return value. {@link http://www.jstorage.info/|jStorage} never indicated anything if an error occurred.
     * @see https://github.com/andris9/simpleStorage#usage
     */
    export interface SimpleStorage {

        version: string;

        /**
         * Check if local storage can be used.
         * Returns <code>true</code> if storage is available.
         * @see https://github.com/andris9/simpleStorage#canuse
         */
        canUse(): boolean;

        /**
         * Store or update a value in local storage.
         * Returns <code>true</code> if value was stored, <code>false</code> if value was not stored or <code>{@link Error}</code> object if value was not stored because of an error.
         * @param key The key for the value.
         * @param value Value to be stored (can be any JSONeable value).
         * @param [options] Optional options object.
         * @see https://github.com/andris9/simpleStorage#setkey-value-options
         */
        set(key: string, value: any, options?: SetOptions): boolean|Error;

        /**
         * Retrieve a value from local storage.
         * Returns the value for a key or undefined if the key was not found.
         * @param key The key to be retrieved.
         * @see https://github.com/andris9/simpleStorage#getkey
         */
        get(key: string): any;

        /**
         * Removes a value from local storage.
         * Returns <code>true</code> if the value was deleted, <code>false</code> if the value was not found or <code>{@link Error}</code> object if value was not deleted because of an error.
         * @param key The key to be deleted.
         * @see https://github.com/andris9/simpleStorage#deletekeykey
         */
        deleteKey(key: string): boolean|Error;

        /**
         * Set a millisecond timeout. When the timeout is reached, the key is removed automatically from local storage.
         * Returns <code>true</code> if ttl was set, <code>false</code> if value was not found or <code>{@link Error}</code> object if ttl was not set because of an error.
         * @param key The key to be updated.
         * @param ttl Timeout in milliseconds. If the value is 0, timeout is cleared from the key.
         * @see https://github.com/andris9/simpleStorage#setttlkey-ttl
         */
        setTTL(key: string, ttl: number): boolean|Error;

        /**
         * Retrieve remaining milliseconds for a key with TTL.
         * Returns the finite number of remaining milliseconds, <code>Infinity</code> if TTL is not set for the selected key or <code>false</code> if the selected key does not exist or is expired.
         * @param key The key to be checked.
         * @see https://github.com/andris9/simpleStorage#getttlkey
         */
        getTTL(key: string): number|boolean;

        /**
         * Clear all values.
         * Returns <code>true</code> if storage was flushed or <code>{@link Error}</code> object if storage was not flushed because of an error.
         * @see https://github.com/andris9/simpleStorage#flush
         */
        flush(): boolean|Error;

        /**
         * Retrieve all used keys as an array.
         * Returns an array of keys.
         * @see https://github.com/andris9/simpleStorage#index
         */
        index(): [string]|boolean;

        /**
         * Get used storage in symbol count.
         * @see https://github.com/andris9/simpleStorage#storagesize
         */
        storageSize(): number;
    }

    /**
     * @see https://github.com/andris9/simpleStorage#setkey-value-options
     */
    export interface SetOptions {
        /**
         * Sets the time-to-live (TTL) value in milliseconds for the given key/value.
         */
        TTL?: number;
    }

}

declare module "simpleStorage" {
    export = simpleStorage;
}

/**
 * Cross-browser key-value store database to store data locally in the browser.
 * {@link simpleStorage} is a fork of {@link http://www.jstorage.info/|jStorage} that only includes the minimal set of features. Basically it is a wrapper for native <code>{@link JSON}</code> + <code>{@link WindowLocalStorage.localStorage|localStorage}</code> with some TTL magic mixed in.
 * The module has no dependencies, you can use it as a standalone script (introduces {@link simpleStorage} global) or as an AMD module. All modern browsers (including mobile) are supported, older browsers (IE7, Firefox 3) are not.
 * {@link simpleStorage} is very small - about 1kB in size when minimized and gzipped.
 * @see https://github.com/andris9/simpleStorage#simplestorage
 */
declare var simpleStorage:simplestoragejs.SimpleStorage;
