declare module goog {
    function require(name: 'goog.ui.MenuButtonRenderer'): typeof goog.ui.MenuButtonRenderer;
}

declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.MenuButton}s.  This implementation overrides
     * {@link goog.ui.CustomButtonRenderer#createButton} to create a separate
     * caption and dropdown element.
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class MenuButtonRenderer extends goog.ui.CustomButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.  Overrides the superclass implementation by taking
         * the nested DIV structure of menu buttons into account.
         * @param {Element} element Root element of the button whose content element
         *     is to be returned.
         * @return {Element} The button's content element.
         * @override
         */
        getContentElement(element: Element): Element;
        
        /**
         * Takes an element, decorates it with the menu button control, and returns
         * the element.  Overrides {@link goog.ui.CustomButtonRenderer#decorate} by
         * looking for a child element that can be decorated by a menu, and if it
         * finds one, decorates it and attaches it to the menu button.
         * @param {goog.ui.Control} control goog.ui.MenuButton to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
        
        /**
         * Takes a text caption or existing DOM structure, and returns the content and
         * a dropdown arrow element wrapped in a pseudo-rounded-corner box.  Creates
         * the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-outer-box">
         *      <div class="goog-inline-block goog-menu-button-inner-box">
         *        <div class="goog-inline-block goog-menu-button-caption">
         *          Contents...
         *        </div>
         *        <div class="goog-inline-block goog-menu-button-dropdown">
         *          &nbsp;
         *        </div>
         *      </div>
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to wrap in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Takes a text caption or existing DOM structure, and returns it wrapped in
         * an appropriately-styled DIV.  Creates the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-caption">
         *      Contents...
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to wrap in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Takes a text caption or existing DOM structure, and returns it wrapped in
         * an appropriately-styled DIV.  Creates the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-caption">
         *      Contents...
         *    </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure
         *     to wrap in a box.
         * @param {string} cssClass The CSS class for the renderer.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Caption element.
         */
        static wrapCaption(content: goog.ui.ControlContent, cssClass: string, dom: goog.dom.DomHelper): Element;
        
        /**
         * Returns an appropriately-styled DIV containing a dropdown arrow element.
         * Creates the following DOM structure:
         *    <div class="goog-inline-block goog-menu-button-dropdown">
         *      &nbsp;
         *    </div>
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Dropdown element.
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
