declare module goog {
    function require(name: 'goog.ui.TabBarRenderer'): typeof goog.ui.TabBarRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.TabBar}s, based on the {@code TabPane}
     * code.  The tab bar's DOM structure is determined by its orientation and
     * location relative to tab contents.  For example, a horizontal tab bar
     * located above tab contents looks like this:
     * <pre>
     *   <div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top">
     *     ...(tabs here)...
     *   </div>
     * </pre>
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     */
    class TabBarRenderer extends goog.ui.ContainerRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the CSS class name to be applied to the root element of all tab bars
         * rendered or decorated using this renderer.
         * @return {string} Renderer-specific CSS class name.
         * @override
         */
        getCssClass(): string;
        
        /**
         * Sets the tab bar's state based on the given CSS class name, encountered
         * during decoration.  Overrides the superclass implementation by recognizing
         * class names representing tab bar orientation and location.
         * @param {goog.ui.Container} tabBar Tab bar to configure.
         * @param {string} className CSS class name.
         * @param {string} baseClass Base class name used as the root of state-specific
         *     class names (typically the renderer's own class name).
         * @protected
         * @override
         */
        setStateFromClassName(tabBar: goog.ui.Container, className: string, baseClass: string): void;
        
        /**
         * Returns all CSS class names applicable to the tab bar, based on its state.
         * Overrides the superclass implementation by appending the location-specific
         * class name to the list.
         * @param {goog.ui.Container} tabBar Tab bar whose CSS classes are to be
         *     returned.
         * @return {!Array<string>} Array of CSS class names applicable to the tab bar.
         * @override
         */
        getClassNames(tabBar: goog.ui.Container): Array<string>;
    }
}
