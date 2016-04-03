declare module goog {
    function require(name: 'goog.ui.ToolbarRenderer'): typeof goog.ui.ToolbarRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Toolbar}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     */
    class ToolbarRenderer extends goog.ui.ContainerRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of toolbars rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Inspects the element, and creates an instance of {@link goog.ui.Control} or
         * an appropriate subclass best suited to decorate it.  Overrides the superclass
         * implementation by recognizing HR elements as separators.
         * @param {Element} element Element to decorate.
         * @return {goog.ui.Control?} A new control suitable to decorate the element
         *     (null if none).
         * @override
         */
        getDecoratorForChild(element: Element): goog.ui.Control;
        
        /**
         * Returns the CSS class to be applied to the root element of containers
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
        
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
