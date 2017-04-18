declare module goog {
    function require(name: 'goog.storage.CollectableStorage'): typeof goog.storage.CollectableStorage;
}

declare module goog.storage {

    /**
     * Provides a storage with expirning keys and a collection method.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
     *     storage mechanism.
     * @constructor
     * @extends {goog.storage.ExpiringStorage}
     */
    class CollectableStorage extends goog.storage.ExpiringStorage {
        constructor(mechanism: goog.storage.mechanism.IterableMechanism);
        
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {Array<string>} keys List of all keys.
         * @param {boolean=} opt_strict Also remove invalid keys.
         * @return {!Array<string>} a list of expired keys.
         * @protected
         */
        collectInternal(keys: Array<string>, opt_strict?: boolean): Array<string>;
        
        /**
         * Cleans up the storage by removing expired keys.
         *
         * @param {boolean=} opt_strict Also remove invalid keys.
         */
        collect(opt_strict?: boolean): void;
    }
}
