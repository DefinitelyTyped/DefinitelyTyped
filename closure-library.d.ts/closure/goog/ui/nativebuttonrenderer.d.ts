declare module goog {
    function require(name: 'goog.ui.NativeButtonRenderer'): typeof goog.ui.NativeButtonRenderer;
}

declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
     * button elements.  Since native HTML buttons have built-in support for many
     * features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class NativeButtonRenderer extends goog.ui.ButtonRenderer {
        constructor();
        
        /**
         * Returns the button's contents wrapped in a native HTML button element.  Sets
         * the button's disabled attribute as needed.
         * @param {goog.ui.Control} button Button to render.
         * @return {Element} Root element for the button (a native HTML button element).
         * @override
         */
        createDom(button: goog.ui.Control): Element;
        
        /**
         * Overrides {@link goog.ui.ButtonRenderer#canDecorate} by returning true only
         * if the element is an HTML button.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
    }
}
