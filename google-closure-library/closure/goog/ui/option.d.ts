declare module goog {
    function require(name: 'goog.ui.Option'): typeof goog.ui.Option;
}

declare module goog.ui {

    /**
     * Class representing a menu option.  This is just a convenience class that
     * extends {@link goog.ui.MenuItem} by making it selectable.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {*=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @constructor
     * @extends {goog.ui.MenuItem}
     */
    class Option extends goog.ui.MenuItem {
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Performs the appropriate action when the option is activated by the user.
         * Overrides the superclass implementation by not changing the selection state
         * of the option and not dispatching any SELECTED events, for backwards
         * compatibility with existing uses of this class.
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         * @override
         */
        performActionInternal(e: goog.events.Event): boolean;
    }
}
