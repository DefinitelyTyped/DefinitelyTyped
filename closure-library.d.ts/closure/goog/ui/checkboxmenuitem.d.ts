declare module goog {
    function require(name: 'goog.ui.CheckBoxMenuItem'): typeof goog.ui.CheckBoxMenuItem;
}

declare module goog.ui {

    /**
     * Class representing a checkbox menu item.  This is just a convenience class
     * that extends {@link goog.ui.MenuItem} by making it checkable.
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
    class CheckBoxMenuItem extends goog.ui.MenuItem {
        constructor(content: goog.ui.ControlContent, opt_model?: any, opt_domHelper?: goog.dom.DomHelper);
    }
}
