declare module goog {
    function require(name: 'goog.ui.MenuBarRenderer'): typeof goog.ui.MenuBarRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.menuBar}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     * @final
     */
    class MenuBarRenderer extends goog.ui.ContainerRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of elements rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the default orientation of containers rendered or decorated by this
         * renderer.  This implementation returns {@code HORIZONTAL}.
         * @return {goog.ui.Container.Orientation} Default orientation for containers
         *     created or decorated by this renderer.
         * @override
         */
        getDefaultOrientation(): goog.ui.Container.Orientation;
    }
}
