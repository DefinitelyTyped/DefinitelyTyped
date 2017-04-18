declare module goog {
    function require(name: 'goog.ui.SubMenu'): typeof goog.ui.SubMenu;
}

declare module goog.ui {

    /**
     * Class representing a submenu that can be added as an item to other menus.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the submenu (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
     *     interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Renderer used to render or
     *     decorate the component; defaults to {@link goog.ui.SubMenuRenderer}.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class SubMenu extends goog.ui.MenuItem {
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
        
        /**
         * The delay before opening the sub menu in milliseconds.
         * @type {number}
         */
        static MENU_DELAY_MS: number;
        
        /**
         * @override
         * Dismisses the submenu on a delay, with the result that the user needs less
         * accuracy when moving to submenus.  Alternate implementations could use
         * geometry instead of a timer.
         * @param {boolean} highlight Whether item should be highlighted.
         * @param {boolean=} opt_btnPressed Whether the mouse button is held down.
         */
        setHighlighted(highlight: boolean, opt_btnPressed?: boolean): void;
        
        /**
         * Show the submenu and ensure that all siblings are hidden.
         */
        showSubMenu(): void;
        
        /**
         * Dismisses the menu and all further submenus.
         */
        dismissSubMenu(): void;
        
        /**
         * Clears the show and hide timers for the sub menu.
         */
        clearTimers(): void;
        
        /**
         * Sets the menu item to be visible or invisible.
         * @param {boolean} visible Whether to show or hide the component.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         * @override
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
        
        /**
         * Handles a key event that is passed to the menu item from its parent because
         * it is highlighted.  If the right key is pressed the sub menu takes control
         * and delegates further key events to its menu until it is dismissed OR the
         * left key is pressed.
         * @param {goog.events.KeyEvent} e A key event.
         * @return {boolean} Whether the event was handled.
         * @override
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
        
        /**
         * @override
         * Sets a timer to show the submenu and then dispatches an ENTER event to the
         * parent menu.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @protected
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
        
        /**
         * Overrides the default mouseup event handler, so that the ACTION isn't
         * dispatched for the submenu itself, instead the submenu is shown instantly.
         * @param {goog.events.Event} e The browser event.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         * @override
         */
        performActionInternal(e: goog.events.Event): boolean;
        
        /**
         * Sets whether the submenu is aligned at the end of the parent menu.
         * @param {boolean} alignToEnd True to align to end, false to align to start.
         */
        setAlignToEnd(alignToEnd: boolean): void;
        
        /**
         * Determines whether the submenu is aligned at the end of the parent menu.
         * @return {boolean} True if aligned to the end (the default), false if
         *     aligned to the start.
         */
        isAlignedToEnd(): boolean;
        
        /**
         * Positions the submenu. This method should be called if the sub menu is
         * opened and the menu element's size changes (e.g., when adding/removing items
         * to an opened sub menu).
         */
        positionSubMenu(): void;
        
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         */
        addItem(item: goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator): void;
        
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu
         *     item to add to the menu.
         * @param {number} n Index at which to insert the menu item.
         */
        addItemAt(item: goog.ui.MenuHeader|goog.ui.MenuItem|goog.ui.MenuSeparator, n: number): void;
        
        /**
         * Removes an item from the menu and disposes it.
         * @param {goog.ui.MenuItem} item The menu item to remove.
         */
        removeItem(item: goog.ui.MenuItem): void;
        
        /**
         * Removes a menu item at a given index in the menu and disposes it.
         * @param {number} n Index of item.
         */
        removeItemAt(n: number): void;
        
        /**
         * Returns a reference to the menu item at a given index.
         * @param {number} n Index of menu item.
         * @return {goog.ui.Component} Reference to the menu item.
         */
        getItemAt(n: number): goog.ui.Component;
        
        /**
         * Returns the number of items in the sub menu (including separators).
         * @return {number} The number of items in the menu.
         */
        getItemCount(): number;
        
        /**
         * Returns the menu items contained in the sub menu.
         * @return {!Array<!goog.ui.MenuItem>} An array of menu items.
         * @deprecated Use getItemAt/getItemCount instead.
         */
        getItems(): Array<goog.ui.MenuItem>;
        
        /**
         * Gets a reference to the submenu's actual menu.
         * @return {!goog.ui.Menu} Reference to the object representing the sub menu.
         */
        getMenu(): goog.ui.Menu;
        
        /**
         * Sets the submenu to a specific menu.
         * @param {goog.ui.Menu} menu The menu to show when this item is selected.
         * @param {boolean=} opt_internal Whether this menu is an "internal" menu, and
         *     should be disposed of when this object is disposed of.
         */
        setMenu(menu: goog.ui.Menu, opt_internal?: boolean): void;
        
        /**
         * Returns true if the provided element is to be considered inside the menu for
         * purposes such as dismissing the menu on an event.  This is so submenus can
         * make use of elements outside their own DOM.
         * @param {Element} element The element to test for.
         * @return {boolean} Whether or not the provided element is contained.
         */
        containsElement(element: Element): boolean;
        
        /**
         * @param {boolean} isAdjustable Whether this submenu is adjustable.
         */
        setPositionAdjustable(isAdjustable: boolean): void;
        
        /**
         * @return {boolean} Whether this submenu is adjustable.
         */
        isPositionAdjustable(): boolean;
    }
}
