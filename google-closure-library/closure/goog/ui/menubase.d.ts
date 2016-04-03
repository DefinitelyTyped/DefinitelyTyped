declare module goog {
    function require(name: 'goog.ui.MenuBase'): typeof goog.ui.MenuBase;
}

declare module goog.ui {

    /**
     * The MenuBase class provides an abstract base class for different
     * implementations of menu controls.
     *
     * @param {Element=} opt_element A DOM element for the popup.
     * @deprecated Use goog.ui.Menu.
     * @constructor
     * @extends {goog.ui.Popup}
     */
    class MenuBase extends goog.ui.Popup {
        constructor(opt_element?: Element);
        
        /**
         * Called after the menu is hidden. Derived classes can override to hook this
         * event but should make sure to call the parent class method.
         * @param {Object=} opt_target Target of the event causing the hide.
         * @protected
         * @suppress {underscore|visibility}
         * @override
         */
        onHide_(opt_target?: Object): void;
        
        /**
         * Returns the selected item
         *
         * @return {Object} The item selected or null if no item is selected.
         */
        getSelectedItem(): Object;
        
        /**
         * Sets the selected item
         *
         * @param {Object} item The item to select. The type of this item is specific
         *     to the menu class.
         */
        setSelectedItem(item: Object): void;
        
        /**
         * Mouse over handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseOver(e: goog.events.Event): void;
        
        /**
         * Mouse out handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseOut(e: goog.events.Event): void;
        
        /**
         * Mouse down handler for the menu. Derived classes should override.
         *
         * @param {!goog.events.Event} e The event object.
         * @protected
         */
        onMouseDown(e: goog.events.Event): void;
        
        /**
         * Mouse up handler for the menu. Derived classes should override.
         *
         * @param {goog.events.Event} e The event object.
         * @protected
         */
        onMouseUp(e: goog.events.Event): void;
        
        /**
         * Key down handler for the menu. Derived classes should override.
         *
         * @param {goog.events.KeyEvent} e The event object.
         * @protected
         */
        onKeyDown(e: goog.events.KeyEvent): void;
    }
}

declare module goog.ui.MenuBase {

    /**
     * Events fired by the Menu
     * @enum {string}
     */
    type Events = string;
    var Events: {
        ITEM_ACTION: Events;
    };
}
