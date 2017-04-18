declare module goog {
    function require(name: 'goog.ui.FlatButtonRenderer'): typeof goog.ui.FlatButtonRenderer;
}

declare module goog.ui {

    /**
     * Flat renderer for {@link goog.ui.Button}s.  Flat buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    class FlatButtonRenderer extends goog.ui.ButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the control's contents wrapped in a div element, with
         * the renderer's own CSS class and additional state-specific classes applied
         * to it, and the button's disabled attribute set or cleared as needed.
         * Overrides {@link goog.ui.ButtonRenderer#createDom}.
         * @param {goog.ui.Control} button Button to render.
         * @return {!Element} Root element for the button.
         * @override
         */
        createDom(button: goog.ui.Control): Element;
        
        /**
         * Returns the ARIA role to be applied to flat buttons.
         * @return {goog.a11y.aria.Role|undefined} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role|void;
        
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
         * Takes an existing element and decorates it with the flat button control.
         * Initializes the control's ID, content, tooltip, value, and state based
         * on the ID of the element, its child nodes, and its CSS classes, respectively.
         * Returns the element.  Overrides {@link goog.ui.ButtonRenderer#decorate}.
         * @param {goog.ui.Control} button Button instance to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(button: goog.ui.Control, element: Element): Element;
        
        /**
         * Flat buttons can't use the value attribute since they are div elements.
         * Overrides {@link goog.ui.ButtonRenderer#getValue} to prevent trying to
         * access the element's value.
         * @param {Element} element The button control's root element.
         * @return {string} Value not valid for flat buttons.
         * @override
         */
        getValue(element: Element): string;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
