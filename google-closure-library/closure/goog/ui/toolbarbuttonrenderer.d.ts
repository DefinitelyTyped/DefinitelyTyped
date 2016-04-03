declare module goog {
    function require(name: 'goog.ui.ToolbarButtonRenderer'): typeof goog.ui.ToolbarButtonRenderer;
}

declare module goog.ui {

    /**
     * Toolbar-specific renderer for {@link goog.ui.Button}s, based on {@link
     * goog.ui.CustomButtonRenderer}.
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class ToolbarButtonRenderer extends goog.ui.CustomButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of buttons rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the CSS class to be applied to the root element of buttons rendered
         * using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
