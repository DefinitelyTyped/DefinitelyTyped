declare module goog {
    function require(name: 'goog.net.XhrIoPool'): typeof goog.net.XhrIoPool;
}

declare module goog.net {

    /**
     * A pool of XhrIo objects.
     * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
     *     request.
     * @param {number=} opt_minCount Minimum number of objects (Default: 1).
     * @param {number=} opt_maxCount Maximum number of objects (Default: 10).
     * @constructor
     * @extends {goog.structs.PriorityPool}
     */
    class XhrIoPool extends goog.structs.PriorityPool<any> {
        constructor(opt_headers?: goog.structs.Map<any, any>, opt_minCount?: number, opt_maxCount?: number);
        
        /**
         * Creates an instance of an XhrIo object to use in the pool.
         * @return {!goog.net.XhrIo} The created object.
         * @override
         */
        createObject(): goog.net.XhrIo;
        
        /**
         * Determine if an object has become unusable and should not be used.
         * @param {Object} obj The object to test.
         * @return {boolean} Whether the object can be reused, which is true if the
         *     object is not disposed and not active.
         * @override
         */
        objectCanBeReused(obj: Object): boolean;
    }
}
