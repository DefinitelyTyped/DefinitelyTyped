declare module goog {
    function require(name: 'goog.ui.TriStateMenuItemRenderer'): typeof goog.ui.TriStateMenuItemRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.TriStateMenuItemRenderer}s. Each item has
     * the following structure:
     *    <div class="goog-tristatemenuitem">
     *        <div class="goog-tristatemenuitem-checkbox"></div>
     *        <div>...(content)...</div>
     *    </div>
     * @constructor
     * @extends {goog.ui.MenuItemRenderer}
     * @final
     */
    class TriStateMenuItemRenderer extends goog.ui.MenuItemRenderer {
        constructor();
        
        /**
         * CSS class name the renderer applies to menu item elements.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Overrides {@link goog.ui.ControlRenderer#decorate} by initializing the
         * menu item to checkable based on whether the element to be decorated has
         * extra styling indicating that it should be.
         * @param {goog.ui.Control} item goog.ui.TriStateMenuItem to decorate
         *     the element.
         * @param {Element} element Element to decorate.
         * @return {!Element} Decorated element.
         * @override
         */
        decorate(item: goog.ui.Control, element: Element): Element;
    }
}
