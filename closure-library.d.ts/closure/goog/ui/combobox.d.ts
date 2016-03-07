declare module goog {
    function require(name: 'goog.ui.ComboBox'): typeof goog.ui.ComboBox;
    function require(name: 'goog.ui.ComboBoxItem'): typeof goog.ui.ComboBoxItem;
}

declare module goog.ui {

    /**
     * A ComboBox control.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {goog.ui.Menu=} opt_menu Optional menu component.
     *     This menu is disposed of by this control.
     * @param {goog.ui.LabelInput=} opt_labelInput Optional label input.
     *     This label input is disposed of by this control.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class ComboBox extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_menu?: goog.ui.Menu, opt_labelInput?: goog.ui.LabelInput);
        
        /**
         * Number of milliseconds to wait before dismissing combobox after blur.
         * @type {number}
         */
        static BLUR_DISMISS_TIMER_MS: number;
        
        /**
         * Enables/Disables the combo box.
         * @param {boolean} enabled Whether to enable (true) or disable (false) the
         *     combo box.
         */
        setEnabled(enabled: boolean): void;
        
        /**
         * @return {boolean} Whether the menu item is enabled.
         */
        isEnabled(): boolean;
        
        /**
         * Combo box currently can't decorate elements.
         * @return {boolean} The value false.
         * @override
         */
        canDecorate(): boolean;
        
        /**
         * Dismisses the menu and resets the value of the edit field.
         */
        dismiss(): void;
        
        /**
         * Adds a new menu item at the end of the menu.
         * @param {goog.ui.MenuItem} item Menu item to add to the menu.
         */
        addItem(item: goog.ui.MenuItem): void;
        
        /**
         * Adds a new menu item at a specific index in the menu.
         * @param {goog.ui.MenuItem} item Menu item to add to the menu.
         * @param {number} n Index at which to insert the menu item.
         */
        addItemAt(item: goog.ui.MenuItem, n: number): void;
        
        /**
         * Removes an item from the menu and disposes it.
         * @param {goog.ui.MenuItem} item The menu item to remove.
         */
        removeItem(item: goog.ui.MenuItem): void;
        
        /**
         * Remove all of the items from the ComboBox menu
         */
        removeAllItems(): void;
        
        /**
         * Removes a menu item at a given index in the menu.
         * @param {number} n Index of item.
         */
        removeItemAt(n: number): void;
        
        /**
         * Returns a reference to the menu item at a given index.
         * @param {number} n Index of menu item.
         * @return {goog.ui.MenuItem?} Reference to the menu item.
         */
        getItemAt(n: number): goog.ui.MenuItem;
        
        /**
         * Returns the number of items in the list, including non-visible items,
         * such as separators.
         * @return {number} Number of items in the menu for this combobox.
         */
        getItemCount(): number;
        
        /**
         * @return {goog.ui.Menu} The menu that pops up.
         */
        getMenu(): goog.ui.Menu;
        
        /**
         * @return {Element} The input element.
         */
        getInputElement(): Element;
        
        /**
         * @return {goog.ui.LabelInput} A LabelInput control that manages the
         *     focus/blur state of the input box.
         */
        getLabelInput(): goog.ui.LabelInput;
        
        /**
         * Sets the match function to be used when filtering the combo box menu.
         * @param {Function} matchFunction The match function to be used when filtering
         *     the combo box menu.
         */
        setMatchFunction(matchFunction: Function): void;
        
        /**
         * @return {Function} The match function for the combox box.
         */
        getMatchFunction(): Function;
        
        /**
         * Sets the default text for the combo box.
         * @param {string} text The default text for the combo box.
         */
        setDefaultText(text: string): void;
        
        /**
         * @return {string} text The default text for the combox box.
         */
        getDefaultText(): string;
        
        /**
         * Sets the field name for the combo box.
         * @param {string} fieldName The field name for the combo box.
         */
        setFieldName(fieldName: string): void;
        
        /**
         * @return {string} The field name for the combo box.
         */
        getFieldName(): string;
        
        /**
         * Set to true if a unicode inverted triangle should be displayed in the
         * dropdown button.
         * This option defaults to false for backwards compatibility.
         * @param {boolean} useDropdownArrow True to use the dropdown arrow.
         */
        setUseDropdownArrow(useDropdownArrow: boolean): void;
        
        /**
         * Sets the current value of the combo box.
         * @param {string} value The new value.
         */
        setValue(value: string): void;
        
        /**
         * @return {string} The current value of the combo box.
         */
        getValue(): string;
        
        /**
         * @return {string} HTML escaped token.
         */
        getToken(): string;
        
        /**
         * Positions the menu.
         * @protected
         */
        positionMenu(): void;
        
        /**
         * Handles keyboard events from the input box.  Returns true if the combo box
         * was able to handle the event, false otherwise.
         * @param {goog.events.KeyEvent} e Key event to handle.
         * @return {boolean} Whether the event was handled by the combo box.
         * @protected
         * @suppress {visibility} performActionInternal
         */
        handleKeyEvent(e: goog.events.KeyEvent): boolean;
    }

    /**
     * Class for combo box items.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {Object=} opt_data Identifying data for the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional dom helper used for dom
     *     interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class ComboBoxItem extends goog.ui.MenuItem {
        constructor(content: goog.ui.ControlContent, opt_data?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
        
        /**
         * Sets the menu item to be sticky or not sticky.
         * @param {boolean} sticky Whether the menu item should be sticky.
         */
        setSticky(sticky: boolean): void;
        
        /**
         * @return {boolean} Whether the menu item is sticky.
         */
        isSticky(): boolean;
        
        /**
         * Sets the format for a menu item based on a token, bolding the token.
         * @param {string} token The token.
         */
        setFormatFromToken(token: string): void;
    }
}
