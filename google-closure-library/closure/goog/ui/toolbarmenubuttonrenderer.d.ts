declare module goog {
    function require(name: 'goog.ui.ToolbarMenuButtonRenderer'): typeof goog.ui.ToolbarMenuButtonRenderer;
}

declare module goog.ui {

    /**
     * Toolbar-specific renderer for {@link goog.ui.MenuButton}s, based on {@link
     * goog.ui.MenuButtonRenderer}.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     */
    class ToolbarMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of menu buttons rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the CSS class to be applied to the root element of menu buttons
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
