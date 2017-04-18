declare module goog {
    function require(name: 'goog.ui.ColorPalette'): typeof goog.ui.ColorPalette;
}

declare module goog.ui {

    /**
     * A color palette is a grid of color swatches that the user can highlight or
     * select via the keyboard or the mouse.  The selection state of the palette is
     * controlled by a selection model.  When the user makes a selection, the
     * component fires an ACTION event.  Event listeners may retrieve the selected
     * color using the {@link #getSelectedColor} method.
     *
     * @param {Array<string>=} opt_colors Array of colors in any valid CSS color
     *     format.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Renderer used to render or
     *     decorate the palette; defaults to {@link goog.ui.PaletteRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Palette}
     */
    class ColorPalette extends goog.ui.Palette {
        constructor(opt_colors?: Array<string>, opt_renderer?: goog.ui.PaletteRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Returns the array of colors represented in the color palette.
         * @return {Array<string>} Array of colors.
         */
        getColors(): Array<string>;
        
        /**
         * Sets the colors that are contained in the palette.
         * @param {Array<string>} colors Array of colors in any valid CSS color format.
         * @param {Array<string>=} opt_labels The array of labels to be used as
         *        tooltips. When not provided, the color value will be used.
         */
        setColors(colors: Array<string>, opt_labels?: Array<string>): void;
        
        /**
         * @return {?string} The current selected color in hex, or null.
         */
        getSelectedColor(): string;
        
        /**
         * Sets the selected color.  Clears the selection if the argument is null or
         * can't be parsed as a color.
         * @param {?string} color The color to set as selected; null clears the
         *     selection.
         */
        setSelectedColor(color: string): void;
        
        /**
         * @return {!Array<!Node>} An array of DOM nodes for each color.
         * @protected
         */
        createColorNodes(): Array<Node>;
    }
}
