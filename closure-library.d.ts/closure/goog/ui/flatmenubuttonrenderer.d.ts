declare module goog {
    function require(name: 'goog.ui.FlatMenuButtonRenderer'): typeof goog.ui.FlatMenuButtonRenderer;
}

declare module goog.ui {

    /**
     * Flat Menu Button renderer. Creates a simpler version of
     * {@link goog.ui.MenuButton} that doesn't look like a button and
     * doesn't have rounded corners. Uses just a <div> and looks more like
     * a traditional <select> element.
     * @constructor
     * @extends {goog.ui.FlatButtonRenderer}
     */
    class FlatMenuButtonRenderer extends goog.ui.FlatButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-flat-menu-button">
         *        <div class="goog-inline-block goog-flat-menu-button-caption">
         *          Contents...
         *        </div>
         *        <div class="goog-inline-block goog-flat-menu-button-dropdown">
         *          &nbsp;
         *        </div>
         *    </div>
         * Overrides {@link goog.ui.FlatButtonRenderer#createDom}.
         * @param {goog.ui.Control} control Button to render.
         * @return {!Element} Root element for the button.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
        
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.
         * @param {Element} element Root element of the button whose content
         * element is to be returned.
         * @return {Element} The button's content element (if any).
         * @override
         */
        getContentElement(element: Element): Element;
        
        /**
         * Takes an element, decorates it with the menu button control, and returns
         * the element.  Overrides {@link goog.ui.CustomButtonRenderer#decorate} by
         * looking for a child element that can be decorated by a menu, and if it
         * finds one, decorates it and attaches it to the menu button.
         * @param {goog.ui.Control} button Menu button to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(button: goog.ui.Control, element: Element): Element;
        
        /**
         * Takes a text caption or existing DOM structure, and returns it wrapped in
         * an appropriately-styled DIV.  Creates the following DOM structure:
         *    <div class="goog-inline-block goog-flat-menu-button-caption">
         *      Contents...
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Returns an appropriately-styled DIV containing a dropdown arrow element.
         * Creates the following DOM structure:
         *    <div class="goog-inline-block goog-flat-menu-button-dropdown">
         *      &nbsp;
         *    </div>
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Dropdown element.
         */
        createDropdown(dom: goog.dom.DomHelper): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
