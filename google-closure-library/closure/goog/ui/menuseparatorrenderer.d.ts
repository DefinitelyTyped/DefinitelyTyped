declare module goog {
    function require(name: 'goog.ui.MenuSeparatorRenderer'): typeof goog.ui.MenuSeparatorRenderer;
}

declare module goog.ui {

    /**
     * Renderer for menu separators.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuSeparatorRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns an empty, styled menu separator DIV.  Overrides {@link
         * goog.ui.ControlRenderer#createDom}.
         * @param {goog.ui.Control} separator goog.ui.Separator to render.
         * @return {!Element} Root element for the separator.
         * @override
         */
        createDom(separator: goog.ui.Control): Element;
        
        /**
         * Takes an existing element, and decorates it with the separator.  Overrides
         * {@link goog.ui.ControlRenderer#decorate}.
         * @param {goog.ui.Control} separator goog.ui.MenuSeparator to decorate the
         *     element.
         * @param {Element} element Element to decorate.
         * @return {!Element} Decorated element.
         * @override
         */
        decorate(separator: goog.ui.Control, element: Element): Element;
        
        /**
         * Overrides {@link goog.ui.ControlRenderer#setContent} to do nothing, since
         * separators are empty.
         * @param {Element} separator The separator's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *    set as the separators's content (ignored).
         * @override
         */
        setContent(separator: Element, content: goog.ui.ControlContent): void;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
