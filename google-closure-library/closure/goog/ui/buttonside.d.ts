declare module goog {
    function require(name: 'goog.ui.ButtonSide'): typeof goog.ui.ButtonSide;
}

declare module goog.ui {

    /**
     * Constants for button sides, see {@link goog.ui.Button.prototype.setCollapsed}
     * for details.
     * @enum {number}
     */
    type ButtonSide = number;
    var ButtonSide: {
        NONE: ButtonSide;
        START: ButtonSide;
        END: ButtonSide;
        BOTH: ButtonSide;
    };
}
