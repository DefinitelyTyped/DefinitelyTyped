declare module goog {
    function require(name: 'goog.storage.mechanism.Mechanism'): typeof goog.storage.mechanism.Mechanism;
}

declare module goog.storage.mechanism {

    /**
     * Basic interface for all storage mechanisms.
     *
     * @constructor
     */
    class Mechanism {
        constructor();
        
        /**
         * Set a value for a key.
         *
         * @param {string} key The key to set.
         * @param {string} value The string to save.
         */
        set(key: string, value: string): void;
        
        /**
         * Get the value stored under a key.
         *
         * @param {string} key The key to get.
         * @return {?string} The corresponding value, null if not found.
         */
        get(key: string): string;
        
        /**
         * Remove a key and its value.
         *
         * @param {string} key The key to remove.
         */
        remove(key: string): void;
    }
}
