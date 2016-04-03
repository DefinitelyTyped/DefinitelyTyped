declare module goog {
    function require(name: 'goog.ui.CustomButtonRenderer'): typeof goog.ui.CustomButtonRenderer;
}

declare module goog.ui {

    /**
     * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class CustomButtonRenderer extends goog.ui.ButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-custom-button">
         *      <div class="goog-inline-block goog-custom-button-outer-box">
         *        <div class="goog-inline-block goog-custom-button-inner-box">
         *          Contents...
         *        </div>
         *      </div>
         *    </div>
         * Overrides {@link goog.ui.ButtonRenderer#createDom}.
         * @param {goog.ui.Control} control goog.ui.Button to render.
         * @return {!Element} Root element for the button.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
        
        /**
         * Returns the ARIA role to be applied to custom buttons.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role|void;
        
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.  Overrides the superclass implementation by taking
         * the nested DIV structure of custom buttons into account.
         * @param {Element} element Root element of the button whose content
         *     element is to be returned.
         * @return {Element} The button's content element (if any).
         * @override
         */
        getContentElement(element: Element): Element;
        
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-custom-button-outer-box">
         *    <div class="goog-inline-block goog-custom-button-inner-box">
         *      Contents...
         *    </div>
         *  </div>
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.ButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
        
        /**
         * Takes an existing element and decorates it with the custom button control.
         * Initializes the control's ID, content, tooltip, value, and state based
         * on the ID of the element, its child nodes, and its CSS classes, respectively.
         * Returns the element.  Overrides {@link goog.ui.ButtonRenderer#decorate}.
         * @param {goog.ui.Control} control Button instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
