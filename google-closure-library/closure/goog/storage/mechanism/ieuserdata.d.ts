declare module goog {
    function require(name: 'goog.storage.mechanism.IEUserData'): typeof goog.storage.mechanism.IEUserData;
}

declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism using IE userData.
     *
     * @param {string} storageKey The key (store name) to store the data under.
     * @param {string=} opt_storageNodeId The ID of the associated HTML element,
     *     one will be created if not provided.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class IEUserData extends goog.storage.mechanism.IterableMechanism {
        constructor(storageKey: string, opt_storageNodeId?: string);
        
        /**
         * Encoding map for characters which are not encoded by encodeURIComponent().
         * See encodeKey_ documentation for encoding details.
         *
         * @type {!Object}
         * @const
         */
        static ENCODE_MAP: Object;
        
        /**
         * Determines whether or not the mechanism is available.
         *
         * @return {boolean} True if the mechanism is available.
         */
        isAvailable(): boolean;
    }
}
