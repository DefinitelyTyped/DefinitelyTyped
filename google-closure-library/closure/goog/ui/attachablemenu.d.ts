declare module goog {
    function require(name: 'goog.ui.AttachableMenu'): typeof goog.ui.AttachableMenu;
}

declare module goog.ui {

    /**
     * An implementation of a menu that can attach itself to DOM element that
     * are annotated appropriately.
     *
     * The following attributes are used by the AttachableMenu
     *
     * menu-item - Should be set on DOM elements that function as items in the
     * menu that can be selected.
     * classNameSelected - A class that will be added to the element's class names
     * when the item is selected via keyboard or mouse.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @constructor
     * @extends {goog.ui.MenuBase}
     * @deprecated Use goog.ui.PopupMenu.
     * @final
     */
    class AttachableMenu extends goog.ui.MenuBase {
        constructor(opt_element?: Element);
        
        /**
         * Sets the class name to use for menu items
         *
         * @return {string} The class name to use for items.
         */
        getItemClassName(): string;
        
        /**
         * Sets the class name to use for menu items
         *
         * @param {string} name The class name to use for items.
         */
        setItemClassName(name: string): void;
        
        /**
         * Sets the class name to use for selected menu items
         * todo(user) - reevaluate if we can simulate pseudo classes in IE
         *
         * @return {string} The class name to use for selected items.
         */
        getSelectedItemClassName(): string;
        
        /**
         * Sets the class name to use for selected menu items
         * todo(user) - reevaluate if we can simulate pseudo classes in IE
         *
         * @param {string} name The class name to use for selected items.
         */
        setSelectedItemClassName(name: string): void;
        
        /**
         * Returns the selected item
         *
         * @return {Element} The item selected or null if no item is selected.
         * @override
         */
        getSelectedItem(): Element;
        
        /**
         * Returns the next or previous item. Used for up/down arrows.
         *
         * @param {boolean} prev True to go to the previous element instead of next.
         * @return {Element} The next or previous element.
         * @protected
         */
        getNextPrevItem(prev: boolean): Element;
        
        /**
         * Mouse over handler for the menu.
         * @param {goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseOver(e: goog.events.Event): void;
        
        /**
         * Mouse out handler for the menu.
         * @param {goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseOut(e: goog.events.Event): void;
        
        /**
         * Mouse down handler for the menu. Prevents default to avoid text selection.
         * @param {!goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseDown(e: goog.events.Event): void;
        
        /**
         * Mouse up handler for the menu.
         * @param {goog.events.Event} e The event object.
         * @protected
         * @override
         */
        onMouseUp(e: goog.events.Event): void;
        
        /**
         * Key down handler for the menu.
         * @param {goog.events.KeyEvent} e The event object.
         * @protected
         * @override
         */
        onKeyDown(e: goog.events.KeyEvent): void;
    }
}
