declare module goog {
    function require(name: 'goog.fx.DragDropGroup'): typeof goog.fx.DragDropGroup;
}

declare module goog.fx {

    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * multiple HTML Elements (items). All items share the same drop target(s) but
     * can be dragged individually.
     *
     * @extends {goog.fx.AbstractDragDrop}
     * @constructor
     */
    class DragDropGroup extends goog.fx.AbstractDragDrop {
        constructor();
        
        /**
         * Add item to drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @param {Object=} opt_data Data associated with the source/target.
         * @throws Error If no element argument is provided or if the type is
         *     invalid
         * @override
         */
        addItem(element: Element|string, opt_data?: Object): void;
        
        /**
         * Add DragDropItem to drag object.
         *
         * @param {goog.fx.DragDropItem} item DragDropItem being added to the
         *     drag object.
         * @throws Error If no element argument is provided or if the type is
         *     invalid
         */
        addDragDropItem(item: goog.fx.DragDropItem): void;
        
        /**
         * Remove item from drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, that was previously added with addItem().
         */
        removeItem(element: Element|string): void;
        
        /**
         * Marks the supplied list of items as selected. A drag operation for any of the
         * selected items will affect all of them.
         *
         * @param {Array<goog.fx.DragDropItem>} list List of items to select or null to
         *     clear selection.
         *
         * TODO(eae): Not yet implemented.
         */
        setSelection(list: Array<goog.fx.DragDropItem>): void;
    }
}
