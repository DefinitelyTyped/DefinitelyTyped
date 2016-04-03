declare module goog {
    function require(name: 'goog.ui.MenuSeparator'): typeof goog.ui.MenuSeparator;
}

declare module goog.ui {

    /**
     * Class representing a menu separator.  A menu separator extends {@link
     * goog.ui.Separator} by always setting its renderer to {@link
     * goog.ui.MenuSeparatorRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @constructor
     * @extends {goog.ui.Separator}
     */
    class MenuSeparator extends goog.ui.Separator {
        constructor(opt_domHelper?: goog.dom.DomHelper);
    }
}
