declare module goog {
    function require(name: 'goog.ui.MenuHeader'): typeof goog.ui.MenuHeader;
}

declare module goog.ui {

    /**
     * Class representing a menu header.
     * @param {goog.ui.ControlContent} content Text caption or DOM structure to
     *     display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuHeaderRenderer=} opt_renderer Optional renderer.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class MenuHeader extends goog.ui.Control {
        constructor(content: goog.ui.ControlContent, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuHeaderRenderer);
    }
}
