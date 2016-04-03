declare module goog {
    function require(name: 'goog.ui.MenuHeaderRenderer'): typeof goog.ui.MenuHeaderRenderer;
}

declare module goog.ui {

    /**
     * Renderer for menu headers.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuHeaderRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
