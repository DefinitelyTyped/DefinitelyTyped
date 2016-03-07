declare module goog {
    function require(name: 'goog.ui.FilterObservingMenuItem'): typeof goog.ui.FilterObservingMenuItem;
}

declare module goog.ui {

    /**
     * Class representing a filter observing menu item.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class FilterObservingMenuItem extends goog.ui.MenuItem {
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer);
        
        /**
         * Sets the observer functions.
         * @param {Function} f function(goog.ui.FilterObservingMenuItem, string).
         */
        setObserver(f: Function): void;
        
        /**
         * Calls the observer function if one has been specified.
         * @param {?string=} opt_str Filter string.
         */
        callObserver(opt_str?: string): void;
    }
}
