declare module goog {
    function require(name: 'goog.ui.SelectionModel'): typeof goog.ui.SelectionModel;
}

declare module goog.ui {

    /**
     * Single-selection model.  Dispatches a {@link goog.events.EventType.SELECT}
     * event when a selection is made.
     * @param {Array<Object>=} opt_items Array of items; defaults to empty.
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class SelectionModel extends goog.events.EventTarget {
        constructor(opt_items?: Array<Object>);
        
        /**
         * Returns the selection handler function used by the selection model to change
         * the internal selection state of items under its control.
         * @return {Function} Selection handler function (null if none).
         */
        getSelectionHandler(): Function;
        
        /**
         * Sets the selection handler function to be used by the selection model to
         * change the internal selection state of items under its control.  The
         * function must take two arguments:  an item and a Boolean to indicate whether
         * the item is to be selected or deselected.  Selection handler functions are
         * only needed if the items in the selection model don't natively support the
         * {@code setSelected(Boolean)} interface.
         * @param {Function} handler Selection handler function.
         */
        setSelectionHandler(handler: Function): void;
        
        /**
         * Returns the number of items controlled by the selection model.
         * @return {number} Number of items.
         */
        getItemCount(): number;
        
        /**
         * Returns the 0-based index of the given item within the selection model, or
         * -1 if no such item is found.
         * @param {Object|undefined} item Item to look for.
         * @return {number} Index of the given item (-1 if none).
         */
        indexOfItem(item: Object|void): number;
        
        /**
         * @return {Object|undefined} The first item, or undefined if there are no items
         *     in the model.
         */
        getFirst(): Object|void;
        
        /**
         * @return {Object|undefined} The last item, or undefined if there are no items
         *     in the model.
         */
        getLast(): Object|void;
        
        /**
         * Returns the item at the given 0-based index.
         * @param {number} index Index of the item to return.
         * @return {Object} Item at the given index (null if none).
         */
        getItemAt(index: number): Object;
        
        /**
         * Bulk-adds items to the selection model.  This is more efficient than calling
         * {@link #addItem} for each new item.
         * @param {Array<Object>|undefined} items New items to add.
         */
        addItems(items: Array<Object>|void): void;
        
        /**
         * Adds an item at the end of the list.
         * @param {Object} item Item to add.
         */
        addItem(item: Object): void;
        
        /**
         * Adds an item at the given index.
         * @param {Object} item Item to add.
         * @param {number} index Index at which to add the new item.
         */
        addItemAt(item: Object, index: number): void;
        
        /**
         * Removes the given item (if it exists).  Dispatches a {@code SELECT} event if
         * the removed item was the currently selected item.
         * @param {Object} item Item to remove.
         */
        removeItem(item: Object): void;
        
        /**
         * Removes the item at the given index.
         * @param {number} index Index of the item to remove.
         */
        removeItemAt(index: number): void;
        
        /**
         * @return {Object} The currently selected item, or null if none.
         */
        getSelectedItem(): Object;
        
        /**
         * @return {!Array<Object>} All items in the selection model.
         */
        getItems(): Array<Object>;
        
        /**
         * Selects the given item, deselecting any previously selected item, and
         * dispatches a {@code SELECT} event.
         * @param {Object} item Item to select (null to clear the selection).
         */
        setSelectedItem(item: Object): void;
        
        /**
         * @return {number} The 0-based index of the currently selected item, or -1
         *     if none.
         */
        getSelectedIndex(): number;
        
        /**
         * Selects the item at the given index, deselecting any previously selected
         * item, and dispatches a {@code SELECT} event.
         * @param {number} index Index to select (-1 to clear the selection).
         */
        setSelectedIndex(index: number): void;
        
        /**
         * Clears the selection model by removing all items from the selection.
         */
        clear(): void;
    }
}
