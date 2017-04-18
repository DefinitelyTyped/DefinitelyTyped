declare module goog {
    function require(name: 'goog.ui.FilteredMenu'): typeof goog.ui.FilteredMenu;
}

declare module goog.ui {

    /**
     * Filtered menu class.
     * @param {goog.ui.MenuRenderer=} opt_renderer Renderer used to render filtered
     *     menu; defaults to {@link goog.ui.MenuRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Menu}
     */
    class FilteredMenu extends goog.ui.Menu {
        constructor(opt_renderer?: goog.ui.MenuRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets the filter label (the label displayed in the filter input element if no
         * text has been entered).
         * @param {?string} label Label text.
         */
        setFilterLabel(label: string): void;
        
        /**
         * @return {string} The filter label.
         */
        getFilterLabel(): string;
        
        /**
         * Sets the filter string.
         * @param {?string} str Filter string.
         */
        setFilter(str: string): void;
        
        /**
         * Returns the filter string.
         * @return {string} Current filter or an an empty string.
         */
        getFilter(): string;
        
        /**
         * Sets the index of first item that should be affected by the filter. Menu
         * items with a lower index will not be affected by the filter.
         * @param {number} index Index of first item that should be affected by filter.
         */
        setFilterFromIndex(index: number): void;
        
        /**
         * Returns the index of first item that is affected by the filter.
         * @return {number} Index of first item that is affected by filter.
         */
        getFilterFromIndex(): number;
        
        /**
         * Gets a list of items entered in the search box.
         * @return {!Array<string>} The entered items.
         */
        getEnteredItems(): Array<string>;
        
        /**
         * Sets whether multiple items can be entered comma separated.
         * @param {boolean} b Whether multiple items can be entered.
         */
        setAllowMultiple(b: boolean): void;
        
        /**
         * @return {boolean} Whether multiple items can be entered comma separated.
         */
        getAllowMultiple(): boolean;
        
        /**
         * Sets whether the specified child should be affected (shown/hidden) by the
         * filter criteria.
         * @param {goog.ui.Component} child Child to change.
         * @param {boolean} persistent Whether the child should be persistent.
         */
        setPersistentVisibility(child: goog.ui.Component, persistent: boolean): void;
        
        /**
         * Returns whether the specified child should be affected (shown/hidden) by the
         * filter criteria.
         * @param {goog.ui.Component} child Menu item to check.
         * @return {boolean} Whether the menu item is persistent.
         */
        hasPersistentVisibility(child: goog.ui.Component): boolean;
        
        /**
         * Handles filter input events.
         * @param {goog.events.BrowserEvent} e The event object.
         */
        handleFilterEvent(e: goog.events.BrowserEvent): void;
        
        /**
         * Handles the menu's behavior for a key event. The highlighted menu item will
         * be given the opportunity to handle the key behavior.
         * @param {goog.events.KeyEvent} e A browser event.
         * @return {boolean} Whether the event was handled.
         * @override
         */
        handleKeyEventInternal(e: goog.events.KeyEvent): boolean;
        
        /**
         * Sets the highlighted index, unless the HIGHLIGHT event is intercepted and
         * cancelled.  -1 = no highlight. Also scrolls the menu item into view.
         * @param {number} index Index of menu item to highlight.
         * @override
         */
        setHighlightedIndex(index: number): void;
        
        /**
         * Returns the filter input element.
         * @return {Element} Input element.
         */
        getFilterInputElement(): Element;
    }
}

declare module goog.ui.FilteredMenu {

    /**
     * Events fired by component.
     * @enum {string}
     */
    type EventType = string;
    var EventType: {
        [index: string]: EventType;
        // FILTER_CHANGED: EventType;
    };

    /**
     * Filter menu element ids.
     * @enum {string}
     * @private
     */
    type Id_ = string;
    var Id_: {
        CONTENT_ELEMENT: Id_;
    };
}
