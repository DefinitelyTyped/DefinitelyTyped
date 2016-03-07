declare module goog {
    function require(name: 'goog.ui.FilterObservingMenuItemRenderer'): typeof goog.ui.FilterObservingMenuItemRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.FilterObservingMenuItem}s. Each item has
     * the following structure:
     *    <div class="goog-filterobsmenuitem"><div>...(content)...</div></div>
     *
     * @constructor
     * @extends {goog.ui.MenuItemRenderer}
     * @final
     */
    class FilterObservingMenuItemRenderer extends goog.ui.MenuItemRenderer {
        constructor();
        
        /**
         * CSS class name the renderer applies to menu item elements.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the CSS class to be applied to menu items rendered using this
         * renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
