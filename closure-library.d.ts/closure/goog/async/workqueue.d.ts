declare module goog {
    function require(name: 'goog.async.WorkQueue'): typeof goog.async.WorkQueue;
    function require(name: 'goog.async.WorkItem'): typeof goog.async.WorkItem;
}

declare module goog.async {

    /**
     * A low GC workqueue. The key elements of this design:
     *   - avoids the need for goog.bind or equivalent by carrying scope
     *   - avoids the need for array reallocation by using a linked list
     *   - minimizes work entry objects allocation by recycling objects
     * @constructor
     * @final
     * @struct
     */
    class WorkQueue {
        constructor();
        
        /** @const @private {goog.async.FreeList<goog.async.WorkItem>} */
        static freelist_: any;
        
        /**
         * @param {function()} fn
         * @param {Object|null|undefined} scope
         */
        add(fn: () => any, scope: Object|void|void): void;
        
        /**
         * @return {goog.async.WorkItem}
         */
        remove(): goog.async.WorkItem;
        
        /**
         * @param {goog.async.WorkItem} item
         */
        returnUnused(item: goog.async.WorkItem): void;
    }

    /**
     * @constructor
     * @final
     * @struct
     */
    class WorkItem {
        constructor();
        
        /**
         * @param {function()} fn
         * @param {Object|null|undefined} scope
         */
        set(fn: () => any, scope: Object|void|void): void;
        
        /** Reset the work item so they don't prevent GC before reuse */
        reset(): void;
    }
}
