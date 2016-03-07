declare module goog {
    function require(name: 'goog.storage.mechanism.HTML5WebStorage'): typeof goog.storage.mechanism.HTML5WebStorage;
}

declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism that uses HTML5 Web storage.
     *
     * @param {Storage} storage The Web storage object.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     */
    class HTML5WebStorage extends goog.storage.mechanism.IterableMechanism {
        constructor(storage: Storage);
        
        /**
         * Determines whether or not the mechanism is available.
         * It works only if the provided web storage object exists and is enabled.
         *
         * @return {boolean} True if the mechanism is available.
         */
        isAvailable(): boolean;
        
        /**
         * Gets the key for a given key index. If an index outside of
         * [0..this.getCount()) is specified, this function returns null.
         * @param {number} index A key index.
         * @return {?string} A storage key, or null if the specified index is out of
         *     range.
         */
        key(index: number): string;
    }
}
