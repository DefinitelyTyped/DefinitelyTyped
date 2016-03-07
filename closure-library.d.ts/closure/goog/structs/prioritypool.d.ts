declare module goog {
    function require(name: 'goog.structs.PriorityPool'): typeof goog.structs.PriorityPool;
}

declare module goog.structs {

    /**
     * A generic pool class. If max is greater than min, an error is thrown.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @constructor
     * @extends {goog.structs.Pool<VALUE>}
     * @template VALUE
     */
    class PriorityPool<VALUE> extends goog.structs.Pool<VALUE> {
        constructor(opt_minCount?: number, opt_maxCount?: number);
        
        /**
         * Get a new object from the the pool, if there is one available, otherwise
         * return undefined.
         * @param {Function=} opt_callback The function to callback when an object is
         *     available. This could be immediately. If this is not present, then an
         *     object is immediately returned if available, or undefined if not.
         * @param {number=} opt_priority The priority of the request. A smaller value
         *     means a higher priority.
         * @return {VALUE|undefined} The new object from the pool if there is one
         *     available and a callback is not given. Otherwise, undefined.
         * @override
         */
        getObject(opt_callback?: Function, opt_priority?: number): VALUE|void;
        
        /**
         * Adds an object to the collection of objects that are free. If the object can
         * not be added, then it is disposed.
         *
         * NOTE: This method does not remove the object from the in use collection.
         *
         * @param {VALUE} obj The object to add to the collection of free objects.
         * @override
         */
        addFreeObject(obj: VALUE): void;
    }
}
