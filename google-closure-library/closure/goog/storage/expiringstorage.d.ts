declare module goog {
    function require(name: 'goog.storage.ExpiringStorage'): typeof goog.storage.ExpiringStorage;
}

declare module goog.storage {

    /**
     * Provides a storage with expirning keys.
     *
     * @param {!goog.storage.mechanism.Mechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @extends {goog.storage.RichStorage}
     */
    class ExpiringStorage extends goog.storage.RichStorage {
        constructor(mechanism: goog.storage.mechanism.Mechanism);
        
        /**
         * Metadata key under which the expiration time is stored.
         *
         * @type {string}
         * @protected
         */
        static EXPIRATION_TIME_KEY: string;
        
        /**
         * Metadata key under which the creation time is stored.
         *
         * @type {string}
         * @protected
         */
        static CREATION_TIME_KEY: string;
        
        /**
         * Returns the wrapper creation time.
         *
         * @param {!Object} wrapper The wrapper.
         * @return {number|undefined} Wrapper creation time.
         */
        static getCreationTime(wrapper: Object): number|void;
        
        /**
         * Returns the wrapper expiration time.
         *
         * @param {!Object} wrapper The wrapper.
         * @return {number|undefined} Wrapper expiration time.
         */
        static getExpirationTime(wrapper: Object): number|void;
        
        /**
         * Checks if the data item has expired.
         *
         * @param {!Object} wrapper The wrapper.
         * @return {boolean} True if the item has expired.
         */
        static isExpired(wrapper: Object): boolean;
        
        /**
         * Set an item in the storage.
         *
         * @param {string} key The key to set.
         * @param {*} value The value to serialize to a string and save.
         * @param {number=} opt_expiration The number of miliseconds since epoch
         *     (as in goog.now()) when the value is to expire. If the expiration
         *     time is not provided, the value will persist as long as possible.
         * @override
         */
        set(key: string, value: any, opt_expiration?: number): void;
        
        /**
         * Get an item wrapper (the item and its metadata) from the storage.
         *
         * @param {string} key The key to get.
         * @param {boolean=} opt_expired If true, return expired wrappers as well.
         * @return {(!Object|undefined)} The wrapper, or undefined if not found.
         * @override
         */
        getWrapper(key: string, opt_expired?: boolean): Object|void;
    }
}
