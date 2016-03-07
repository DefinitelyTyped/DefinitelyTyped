declare module goog {
    function require(name: 'goog.ui.Css3MenuButtonRenderer'): typeof goog.ui.Css3MenuButtonRenderer;
}

declare module goog.ui {

    /**
     * Custom renderer for {@link goog.ui.MenuButton}s. Css3 buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     * @final
     */
    class Css3MenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.MenuButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-css3-button goog-css3-menu-button">
         *    <div class="goog-css3-button-caption">Contents...</div>
         *    <div class="goog-css3-button-dropdown"></div>
         *  </div>
         *
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
