declare module goog {
    function require(name: 'goog.ui.ToolbarSeparatorRenderer'): typeof goog.ui.ToolbarSeparatorRenderer;
}

declare module goog.ui {

    /**
     * Renderer for toolbar separators.
     * @constructor
     * @extends {goog.ui.MenuSeparatorRenderer}
     */
    class ToolbarSeparatorRenderer extends goog.ui.MenuSeparatorRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns a styled toolbar separator implemented by the following DOM:
         * <div class="goog-toolbar-separator goog-inline-block">&nbsp;</div>
         * Overrides {@link goog.ui.MenuSeparatorRenderer#createDom}.
         * @param {goog.ui.Control} separator goog.ui.Separator to render.
         * @return {!Element} Root element for the separator.
         * @override
         */
        createDom(separator: goog.ui.Control): Element;
        
        /**
         * Takes an existing element, and decorates it with the separator.  Overrides
         * {@link goog.ui.MenuSeparatorRenderer#decorate}.
         * @param {goog.ui.Control} separator goog.ui.Separator to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {!Element} Decorated element.
         * @override
         */
        decorate(separator: goog.ui.Control, element: Element): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
