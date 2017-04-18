declare module goog {
    function require(name: 'goog.ui.ColorSplitBehavior'): typeof goog.ui.ColorSplitBehavior;
}

declare module goog.ui {

    /**
     * Constructs a ColorSplitBehavior for combining a color button and a menu.
     * To use this, provide a goog.ui.ColorButton which will be attached with
     * a goog.ui.ColorMenuButton (with no caption).
     * Whenever a color is selected from the ColorMenuButton, it will be placed in
     * the ColorButton and the user can apply it over and over (by clicking the
     * ColorButton).
     * Primary use case - setting the color of text/background in a text editor.
     *
     * @param {!goog.ui.Button} colorButton A button to interact with a color menu
     *     button (preferably a goog.ui.ColorButton).
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @extends {goog.ui.SplitBehavior}
     * @constructor
     * @final
     */
    class ColorSplitBehavior extends goog.ui.SplitBehavior {
        constructor(colorButton: goog.ui.Button, opt_domHelper?: goog.dom.DomHelper);
    }
}
