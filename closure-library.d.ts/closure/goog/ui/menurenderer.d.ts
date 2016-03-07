declare module goog {
    function require(name: 'goog.ui.MenuRenderer'): typeof goog.ui.MenuRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Menu}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @param {string=} opt_ariaRole Optional ARIA role used for the element.
     * @constructor
     * @extends {goog.ui.ContainerRenderer}
     */
    class MenuRenderer extends goog.ui.ContainerRenderer {
        constructor(opt_ariaRole?: string);
        
        /**
         * Default CSS class to be applied to the root element of toolbars rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns whether the element is a UL or acceptable to our superclass.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
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
         * Returns whether the given element is contained in the menu's DOM.
         * @param {goog.ui.Menu} menu The menu to test.
         * @param {Element} element The element to test.
         * @return {boolean} Whether the given element is contained in the menu.
         */
        containsElement(menu: goog.ui.Menu, element: Element): boolean;
        
        /**
         * Returns the CSS class to be applied to the root element of containers
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
