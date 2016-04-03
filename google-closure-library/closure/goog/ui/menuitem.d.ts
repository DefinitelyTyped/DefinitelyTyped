declare module goog {
    function require(name: 'goog.ui.MenuItem'): typeof goog.ui.MenuItem;
}

declare module goog.ui {

    /**
     * Class representing an item in a menu.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class MenuItem extends goog.ui.Control {
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
        
        /**
         * The class set on an element that contains a keyboard accelerator hint.
         * @type {string}
         */
        static ACCELERATOR_CLASS: string;
        
        /**
         * Returns the value associated with the menu item.  The default implementation
         * returns the model object associated with the item (if any), or its caption.
         * @return {*} Value associated with the menu item, if any, or its caption.
         */
        getValue(): any;
        
        /**
         * Sets the value associated with the menu item.  The default implementation
         * stores the value as the model of the menu item.
         * @param {*} value Value to be associated with the menu item.
         */
        setValue(value: any): void;
        
        /**
         * Sets the menu item to be selectable or not.  Set to true for menu items
         * that represent selectable options.
         * @param {boolean} selectable Whether the menu item is selectable.
         */
        setSelectable(selectable: boolean): void;
        
        /**
         * Sets the menu item to be checkable or not.  Set to true for menu items
         * that represent checkable options.
         * @param {boolean} checkable Whether the menu item is checkable.
         */
        setCheckable(checkable: boolean): void;
        
        /**
         * @return {?string} The keyboard accelerator text, or null if the menu item
         *     doesn't have one.
         */
        getAccelerator(): string;
        
        /**
         * Sets the mnemonic key code. The mnemonic is the key associated with this
         * action.
         * @param {goog.events.KeyCodes} key The key code.
         */
        setMnemonic(key: goog.events.KeyCodes): void;
        
        /**
         * Gets the mnemonic key code. The mnemonic is the key associated with this
         * action.
         * @return {goog.events.KeyCodes} The key code of the mnemonic key.
         */
        getMnemonic(): goog.events.KeyCodes;
        
        /**
         * @override
         * @return {goog.ui.Menu}
         */
        getParent(): goog.ui.Menu;
        
        /**
         * @override
         * @return {goog.ui.Menu}
         */
        getParentEventTarget(): goog.ui.Menu;
    }
}
