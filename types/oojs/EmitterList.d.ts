declare namespace OO {
    interface EmitterListEventMap {
        add: [item: EventEmitter, index: number];
        clear: [];
        move: [item: EventEmitter, index: number, oldIndex: number];
        remove: [item: EventEmitter, index: number];
    }

    /**
     * Contain and manage a list of {@link OO.EventEmitter} items.
     *
     * Aggregates and manages their events collectively.
     *
     * This mixin must be used in a class that also mixes in {@link OO.EventEmitter}.
     */
    interface EmitterList {
        /**
         * Get all items.
         *
         * @return Items in the list
         */
        getItems(): EventEmitter[];

        /**
         * Get the index of a specific item.
         *
         * @param item Requested item
         * @return Index of the item
         */
        getItemIndex(item: EventEmitter): number;

        /**
         * Get number of items.
         *
         * @return Number of items in the list
         */
        getItemCount(): number;

        /**
         * Check if a list contains no items.
         *
         * @return  Group is empty
         */
        isEmpty(): boolean;

        /**
         * Aggregate the events emitted by the group.
         *
         * When events are aggregated, the group will listen to all contained items for the event,
         * and then emit the event under a new name. The new event will contain an additional leading
         * parameter containing the item that emitted the original event. Other arguments emitted from
         * the original event are passed through.
         *
         * @param events An object keyed by the name of the event that
         *  should be aggregated  (e.g., ‘click’) and the value of the new name to use
         *  (e.g., ‘groupClick’). A `null` value will remove aggregated events.
         * @throws {Error} If aggregation already exists
         */
        aggregate(events: Record<string, string | null>): void;

        /**
         * Add items to the list.
         *
         * @param items Item to add or
         *  an array of items to add
         * @param index Index to add items at. If no index is
         *  given, or if the index that is given is invalid, the item
         *  will be added at the end of the list.
         */
        addItems(items: EventEmitter | EventEmitter[], index?: number): this;

        /**
         * Remove items.
         *
         * @param items Items to remove
         */
        removeItems(items: EventEmitter | EventEmitter[]): this;

        /**
         * Clear all items.
         */
        clearItems(): this;
    }

    interface EmitterListConstructor {
        new(): EmitterList;
        prototype: EmitterList;
        static: {};
    }

    const EmitterList: EmitterListConstructor;
}
