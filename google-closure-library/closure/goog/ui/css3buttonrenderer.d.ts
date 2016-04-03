declare module goog {
    function require(name: 'goog.ui.Css3ButtonRenderer'): typeof goog.ui.Css3ButtonRenderer;
}

declare module goog.ui {

    /**
     * Custom renderer for {@link goog.ui.Button}s. Css3 buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     * @final
     */
    class Css3ButtonRenderer extends goog.ui.ButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-css3-button">
         *      Contents...
         *    </div>
         * Overrides {@link goog.ui.ButtonRenderer#createDom}.
         * @param {goog.ui.Control} control goog.ui.Button to render.
         * @return {!Element} Root element for the button.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
        
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.ButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
