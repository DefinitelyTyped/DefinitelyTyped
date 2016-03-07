declare module goog {
    function require(name: 'goog.ui.Select'): typeof goog.ui.Select;
}

declare module goog.ui {

    /**
     * A selection control.  Extends {@link goog.ui.MenuButton} by composing a
     * menu with a selection model, and automatically updating the button's caption
     * based on the current selection.
     *
     * Select fires the following events:
     *   CHANGE - after selection changes.
     *
     * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
     *     structure to display as the button's caption when nothing is selected.
     *     Defaults to no caption.
     * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
     *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class Select extends goog.ui.MenuButton {
        constructor(opt_caption?: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
        
        /**
         * Decorates the given element with this control.  Overrides the superclass
         * implementation by initializing the default caption on the select button.
         * @param {Element} element Element to decorate.
         * @override
         */
        decorateInternal(element: Element): void;
        
        /**
         * Handles {@link goog.ui.Component.EventType.ACTION} events dispatched by
         * the menu item clicked by the user.  Updates the selection model, calls
         * the superclass implementation to hide the menu, stops the propagation of
         * the event, and dispatches an ACTION event on behalf of the select control
         * itself.  Overrides {@link goog.ui.MenuButton#handleMenuAction}.
         * @param {goog.events.Event} e Action event to handle.
         * @override
         */
        handleMenuAction(e: goog.events.Event): void;
        
        /**
         * Handles {@link goog.events.EventType.SELECT} events raised by the
         * selection model when the selection changes.  Updates the contents of the
         * select button.
         * @param {goog.events.Event} e Selection event to handle.
         */
        handleSelectionChange(e: goog.events.Event): void;
        
        /**
         * Replaces the menu currently attached to the control (if any) with the given
         * argument, and updates the selection model.  Does nothing if the new menu is
         * the same as the old one.  Overrides {@link goog.ui.MenuButton#setMenu}.
         * @param {goog.ui.Menu} menu New menu to be attached to the menu button.
         * @return {goog.ui.Menu|undefined} Previous menu (undefined if none).
         * @override
         */
        setMenu(menu: goog.ui.Menu): goog.ui.Menu|void;
        
        /**
         * Returns the default caption to be shown when no option is selected.
         * @return {goog.ui.ControlContent} Default caption.
         */
        getDefaultCaption(): goog.ui.ControlContent;
        
        /**
         * Sets the default caption to the given string or DOM structure.
         * @param {goog.ui.ControlContent} caption Default caption to be shown
         *    when no option is selected.
         */
        setDefaultCaption(caption: goog.ui.ControlContent): void;
        
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.Control} item Menu item to add to the menu.
         * @override
         */
        addItem(item: goog.ui.Control): void;
        
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item Menu item to add to the
         *     menu.
         * @param {number} index Index at which to insert the menu item.
         * @override
         */
        addItemAt(item: goog.ui.MenuItem|goog.ui.MenuSeparator, index: number): void;
        
        /**
         * Removes an item from the menu and disposes it.
         * @param {goog.ui.MenuItem|goog.ui.MenuSeparator} item The menu item to remove.
         * @override
         */
        removeItem(item: goog.ui.MenuItem|goog.ui.MenuSeparator): void;
        
        /**
         * Removes a menu item at a given index in the menu and disposes it.
         * @param {number} index Index of item.
         * @override
         */
        removeItemAt(index: number): void;
        
        /**
         * Selects the specified option (assumed to be in the select menu), and
         * deselects the previously selected option, if any.  A null argument clears
         * the selection.
         * @param {goog.ui.MenuItem} item Option to be selected (null to clear
         *     the selection).
         */
        setSelectedItem(item: goog.ui.MenuItem): void;
        
        /**
         * Selects the option at the specified index, or clears the selection if the
         * index is out of bounds.
         * @param {number} index Index of the option to be selected.
         */
        setSelectedIndex(index: number): void;
        
        /**
         * Selects the first option found with an associated value equal to the
         * argument, or clears the selection if no such option is found.  A null
         * argument also clears the selection.  Overrides {@link
         * goog.ui.Button#setValue}.
         * @param {*} value Value of the option to be selected (null to clear
         *     the selection).
         * @override
         */
        setValue(value: any): void;
        
        /**
         * Returns the currently selected option.
         * @return {goog.ui.MenuItem} The currently selected option (null if none).
         */
        getSelectedItem(): goog.ui.MenuItem;
        
        /**
         * Returns the index of the currently selected option.
         * @return {number} 0-based index of the currently selected option (-1 if none).
         */
        getSelectedIndex(): number;
        
        /**
         * @return {goog.ui.SelectionModel} The selection model.
         * @protected
         */
        getSelectionModel(): goog.ui.SelectionModel;
        
        /**
         * Updates the caption to be shown in the select button.  If no option is
         * selected and a default caption is set, sets the caption to the default
         * caption; otherwise to the empty string.
         * @protected
         */
        updateCaption(): void;
        
        /**
         * Opens or closes the menu.  Overrides {@link goog.ui.MenuButton#setOpen} by
         * highlighting the currently selected option on open.
         * @param {boolean} open Whether to open or close the menu.
         * @param {goog.events.Event=} opt_e Mousedown event that caused the menu to
         *     be opened.
         * @override
         */
        setOpen(open: boolean, opt_e?: goog.events.Event): void;
    }
}
