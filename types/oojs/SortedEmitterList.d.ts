declare namespace OO {
    type SortingCallback = (a: EventEmitter, b: EventEmitter) => number;

    /**
     * Manage a sorted list of {@link OO.EmitterList} objects.
     *
     * The sort order is based on a callback that compares two items. The return value of
     * callback( a, b ) must be less than zero if a < b, greater than zero if a > b, and zero
     * if a is equal to b. The callback should only return zero if the two objects are
     * considered equal.
     *
     * When an item changes in a way that could affect their sorting behavior, it must
     * emit the `itemSortChange` event.
     * This will cause it to be re-sorted automatically.
     *
     * This mixin must be used in a class that also mixes in {@link OO.EventEmitter}.
     */
    interface SortedEmitterList extends EmitterList {
        /**
         * Handle a case where an item changed a property that relates
         * to its sorted order.
         *
         * @param item Item in the list
         */
        onItemSortChange(item: EventEmitter): void;

        /**
         * Change the sorting callback for this sorted list.
         *
         * The callback receives two items. The return value of callback(a, b) must be less than zero
         * if a < b, greater than zero if a > b, and zero if a is equal to b.
         *
         * @param sortingCallback Sorting callback
         */
        setSortingCallback(sortingCallback: SortingCallback): void;

        /**
         * Add items to the sorted list.
         *
         * @param items Item to add or
         *  an array of items to add
         */
        addItems(items: EventEmitter | EventEmitter[]): this;

        /**
         * Find the index a given item should be inserted at. If the item is already
         * in the list, this will return the index where the item currently is.
         *
         * @param item Items to insert
         * @return The index the item should be inserted at
         */
        findInsertionIndex(item: EventEmitter): number;
    }

    interface SortedEmitterListConstructor {
        /** @param sortingCallback Callback that compares two items. */
        new(sortingCallback: SortingCallback): SortedEmitterList;
        prototype: SortedEmitterList;
        super: EmitterListConstructor;
        /** @deprecated Use `super` instead */
        parent: EmitterListConstructor;
        static: {};
    }

    const SortedEmitterList: SortedEmitterListConstructor;
}
