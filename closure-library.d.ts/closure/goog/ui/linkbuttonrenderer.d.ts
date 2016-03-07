declare module goog {
    function require(name: 'goog.ui.LinkButtonRenderer'): typeof goog.ui.LinkButtonRenderer;
}

declare module goog.ui {

    /**
     * Link renderer for {@link goog.ui.Button}s.  Link buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     * @constructor
     * @extends {goog.ui.FlatButtonRenderer}
     */
    class LinkButtonRenderer extends goog.ui.FlatButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
    }
}
