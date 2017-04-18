declare module goog {
    function require(name: 'goog.ui.style.app.MenuButtonRenderer'): typeof goog.ui.style.app.MenuButtonRenderer;
}

declare module goog.ui.style.app {

    /**
     * Renderer for {@link goog.ui.style.app.MenuButton}s.  This implementation
     * overrides {@link goog.ui.style.app.ButtonRenderer#createButton} to insert a
     * dropdown element into the content element after the specified content.
     * @constructor
     * @extends {goog.ui.style.app.ButtonRenderer}
     * @final
     */
    class MenuButtonRenderer extends goog.ui.style.app.ButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Array of arrays of CSS classes that we want composite classes added and
         * removed for in IE6 and lower as a workaround for lack of multi-class CSS
         * selector support.
         * @type {Array<Array<string>>}
         */
        static IE6_CLASS_COMBINATIONS: Array<Array<string>>;
        
        /**
         * Returns the ARIA role to be applied to menu buttons, which
         * have a menu attached to them.
         * @return {goog.a11y.aria.Role} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role;
        
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
         * the element.  Overrides {@link goog.ui.style.app.ButtonRenderer#decorate} by
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
         *  <div class="goog-inline-block goog-button-outer-box">
         *    <div class="goog-inline-block goog-button-inner-box">
         *      <div class="goog-button-pos">
         *        <div class="goog-button-top-shadow">&nbsp;</div>
         *        <div class="goog-button-content">
         *          Contents...
         *          <div class="goog-menu-button-dropdown"> </div>
         *        </div>
         *      </div>
         *    </div>
         *  </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Inserts dropdown element as last child of existing content.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document ineraction.
         * @return {Array<Node>} DOM structure to be set as the button's content.
         */
        createContentWithDropdown(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Array<Node>;
        
        /**
         * Returns an appropriately-styled DIV containing a dropdown arrow.
         * Creates the following DOM structure:
         *    <div class="goog-menu-button-dropdown"> </div>
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
