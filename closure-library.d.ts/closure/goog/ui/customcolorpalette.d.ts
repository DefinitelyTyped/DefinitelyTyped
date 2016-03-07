declare module goog {
    function require(name: 'goog.ui.CustomColorPalette'): typeof goog.ui.CustomColorPalette;
}

declare module goog.ui {

    /**
     * A custom color palette is a grid of color swatches and a button that allows
     * the user to add additional colors to the palette
     *
     * @param {Array<string>} initColors Array of initial colors to populate the
     *     palette with.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.ColorPalette}
     * @final
     */
    class CustomColorPalette extends goog.ui.ColorPalette {
        constructor(initColors: Array<string>, opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Returns an array of DOM nodes for each color, and an additional cell with a
         * '+'.
         * @return {!Array<Node>} Array of div elements.
         * @override
         */
        createColorNodes(): Array<Node>;
        
        /**
         * @override
         * @param {goog.events.Event} e Mouse or key event that triggered the action.
         * @return {boolean} True if the action was allowed to proceed, false otherwise.
         */
        performActionInternal(e: goog.events.Event): boolean;
        
        /**
         * Prompts the user to enter a custom color.  Currently uses a window.prompt
         * but could be updated to use a dialog box with a WheelColorPalette.
         */
        promptForCustomColor(): void;
    }
}
