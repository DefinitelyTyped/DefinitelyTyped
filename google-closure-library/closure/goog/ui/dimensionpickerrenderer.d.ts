declare module goog {
    function require(name: 'goog.ui.DimensionPickerRenderer'): typeof goog.ui.DimensionPickerRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.DimensionPicker}s.  Renders the
     * palette as two divs, one with the un-highlighted background, and one with the
     * highlighted background.
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class DimensionPickerRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Overrides {@link goog.ui.ControlRenderer#canDecorate} to allow decorating
         * empty DIVs only.
         * @param {Element} element The element to check.
         * @return {boolean} Whether if the element is an empty div.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} to decorate empty DIVs.
         * @param {goog.ui.Control} control goog.ui.DimensionPicker to decorate.
         * @param {Element} element The element to decorate.
         * @return {Element} The decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
        
        /**
         * Scales various elements in order to update the palette's size.
         * @param {goog.ui.DimensionPicker} palette The palette object.
         * @param {Element} element The element to set the style of.
         */
        updateSize(palette: goog.ui.DimensionPicker, element: Element): void;
        
        /**
         * Creates a div and adds the appropriate contents to it.
         * @param {goog.ui.Control} control Picker to render.
         * @return {!Element} Root element for the palette.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
        
        /**
         * Initializes the control's DOM when the control enters the document.  Called
         * from {@link goog.ui.Control#enterDocument}.
         * @param {goog.ui.Control} control Palette whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(control: goog.ui.Control): void;
        
        /**
         * Get the element to listen for mouse move events on.
         * @param {goog.ui.DimensionPicker} palette The palette to listen on.
         * @return {Element} The element to listen for mouse move events on.
         */
        getMouseMoveElement(palette: goog.ui.DimensionPicker): Element;
        
        /**
         * Returns the x offset in to the grid for the given mouse x position.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} x The mouse event x position.
         * @return {number} The x offset in to the grid.
         */
        getGridOffsetX(palette: goog.ui.DimensionPicker, x: number): number;
        
        /**
         * Returns the y offset in to the grid for the given mouse y position.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} y The mouse event y position.
         * @return {number} The y offset in to the grid.
         */
        getGridOffsetY(palette: goog.ui.DimensionPicker, y: number): number;
        
        /**
         * Sets the highlighted size. Does nothing if the palette hasn't been rendered.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         * @param {number} columns The number of columns to highlight.
         * @param {number} rows The number of rows to highlight.
         */
        setHighlightedSize(palette: goog.ui.DimensionPicker, columns: number, rows: number): void;
        
        /**
         * Position the mouse catcher such that it receives mouse events past the
         * selectedsize up to the maximum size.  Takes care to not introduce scrollbars.
         * Should be called on enter document and when the window changes size.
         * @param {goog.ui.DimensionPicker} palette The table size palette.
         */
        positionMouseCatcher(palette: goog.ui.DimensionPicker): void;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
