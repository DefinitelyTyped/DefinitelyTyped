declare module goog {
    function require(name: 'goog.ui.SubMenuRenderer'): typeof goog.ui.SubMenuRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.SubMenu}s.  Each item has the following
     * structure:
     *    <div class="goog-submenu">
     *      ...(menuitem content)...
     *      <div class="goog-menu">
     *        ... (submenu content) ...
     *      </div>
     *    </div>
     * @constructor
     * @extends {goog.ui.MenuItemRenderer}
     * @final
     */
    class SubMenuRenderer extends goog.ui.MenuItemRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Overrides {@link goog.ui.MenuItemRenderer#createDom} by adding
         * the additional class 'goog-submenu' to the created element,
         * and passes the element to {@link goog.ui.SubMenuItemRenderer#addArrow_}
         * to add an child element that can be styled to show an arrow.
         * @param {goog.ui.Control} control goog.ui.SubMenu to render.
         * @return {!Element} Root element for the item.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
        
        /**
         * Overrides {@link goog.ui.MenuItemRenderer#decorate} by adding
         * the additional class 'goog-submenu' to the decorated element,
         * and passing the element to {@link goog.ui.SubMenuItemRenderer#addArrow_}
         * to add a child element that can be styled to show an arrow.
         * Also searches the element for a child with the class goog-menu. If a
         * matching child element is found, creates a goog.ui.Menu, uses it to
         * decorate the child element, and passes that menu to subMenu.setMenu.
         * @param {goog.ui.Control} control goog.ui.SubMenu to render.
         * @param {Element} element Element to decorate.
         * @return {!Element} Root element for the item.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
        
        /**
         * Takes a menu item's root element, and sets its content to the given text
         * caption or DOM structure.  Overrides the superclass immplementation by
         * making sure that the submenu arrow structure is preserved.
         * @param {Element} element The item's root element.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to be
         *     set as the item's content.
         * @override
         */
        setContent(element: Element, content: goog.ui.ControlContent): void;
        
        /**
         * Overrides {@link goog.ui.MenuItemRenderer#initializeDom} to tweak
         * the DOM structure for the span.goog-submenu-arrow element
         * depending on the text direction (LTR or RTL). When the SubMenu is RTL
         * the arrow will be given the additional class of goog-submenu-arrow-rtl,
         * and the arrow will be moved up to be the first child in the SubMenu's
         * element. Otherwise the arrow will have the class goog-submenu-arrow-ltr,
         * and be kept as the last child of the SubMenu's element.
         * @param {goog.ui.Control} control goog.ui.SubMenu whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(control: goog.ui.Control): void;
    }
}
