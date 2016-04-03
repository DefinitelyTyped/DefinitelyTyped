declare module goog {
    function require(name: 'goog.ui.SelectionMenuButton'): typeof goog.ui.SelectionMenuButton;
    function require(name: 'goog.ui.SelectionMenuButton.SelectionState'): typeof goog.ui.SelectionMenuButton.SelectionState;
}

declare module goog.ui {

    /**
     * A selection menu button control.  Extends {@link goog.ui.MenuButton}.
     * Menu contains 'select all' and 'select none' MenuItems for selecting all and
     * no items by default. Other MenuItems can be added by user.
     *
     * The checkbox content fires the action events associated with the 'select all'
     * and 'select none' menu items.
     *
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the menu button; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.ui.MenuItemRenderer=} opt_itemRenderer Optional menu item
     *     renderer.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class SelectionMenuButton extends goog.ui.MenuButton {
        constructor(opt_renderer?: goog.ui.ButtonRenderer, opt_itemRenderer?: goog.ui.MenuItemRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Select button state
         * @type {goog.ui.SelectionMenuButton.SelectionState}
         * @protected
         */
        selectionState: goog.ui.SelectionMenuButton.SelectionState;
        
        /**
         * Enables button and embedded checkbox.
         * @param {boolean} enable Whether to enable or disable the button.
         * @override
         */
        setEnabled(enable: boolean): void;
        
        /**
         * Enables the embedded checkbox.
         * @param {boolean} enable Whether to enable or disable the checkbox.
         * @protected
         */
        setCheckboxEnabled(enable: boolean): void;
        
        /**
         * Gets the checkbox element. Needed because if decorating html, getContent()
         * may include and comment/text elements in addition to the input element.
         * @return {Element} Checkbox.
         * @protected
         */
        getCheckboxElement(): Element;
        
        /**
         * Checkbox click handler.
         * @param {goog.events.BrowserEvent} e Checkbox click event.
         * @protected
         */
        handleCheckboxClick(e: goog.events.BrowserEvent): void;
        
        /**
         * Set up events related to the checkbox.
         * @protected
         */
        addCheckboxEvent(): void;
        
        /**
         * Creates and adds the checkbox to the button.
         * @protected
         */
        createCheckbox(): void;
        
        /**
         * Set selection state and update checkbox.
         * @param {goog.ui.SelectionMenuButton.SelectionState} state Selection state.
         */
        setSelectionState(state: goog.ui.SelectionMenuButton.SelectionState): void;
        
        /**
        * Get selection state.
        * @return {goog.ui.SelectionMenuButton.SelectionState} Selection state.
        */
        getSelectionState(): goog.ui.SelectionMenuButton.SelectionState;
    }
}

declare module goog.ui.SelectionMenuButton {

    /**
     * Constants for menu action types.
     * @enum {number}
     */
    type SelectionState = number;
    var SelectionState: {
        ALL: SelectionState;
        SOME: SelectionState;
        NONE: SelectionState;
    };
}
