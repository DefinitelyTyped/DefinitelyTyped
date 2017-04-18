declare module goog {
    function require(name: 'goog.ui.TabRenderer'): typeof goog.ui.TabRenderer;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.Tab}s, based on the {@code TabPane} code.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class TabRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns the CSS class name to be applied to the root element of all tabs
         * rendered or decorated using this renderer.
         * @return {string} Renderer-specific CSS class name.
         * @override
         */
        getCssClass(): string;
        
        /**
         * Returns the ARIA role to be applied to the tab element.
         * See http://wiki/Main/ARIA for more info.
         * @return {goog.a11y.aria.Role} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role;
        
        /**
         * Returns the tab's contents wrapped in a DIV, with the renderer's own CSS
         * class and additional state-specific classes applied to it.  Creates the
         * following DOM structure:
         * <pre>
         *   <div class="goog-tab" title="Title">Content</div>
         * </pre>
         * @param {goog.ui.Control} tab Tab to render.
         * @return {Element} Root element for the tab.
         * @override
         */
        createDom(tab: goog.ui.Control): Element;
        
        /**
         * Decorates the element with the tab.  Initializes the tab's ID, content,
         * tooltip, and state based on the ID of the element, its title, child nodes,
         * and CSS classes, respectively.  Returns the element.
         * @param {goog.ui.Control} tab Tab to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(tab: goog.ui.Control, element: Element): Element;
        
        /**
         * Takes a tab's root element, and returns its tooltip text, or the empty
         * string if the element has no tooltip.
         * @param {Element} element The tab's root element.
         * @return {string} The tooltip text (empty string if none).
         */
        getTooltip(element: Element): string;
        
        /**
         * Takes a tab's root element and a tooltip string, and updates the element
         * with the new tooltip.  If the new tooltip is null or undefined, sets the
         * element's title to the empty string.
         * @param {Element} element The tab's root element.
         * @param {string|null|undefined} tooltip New tooltip text (if any).
         */
        setTooltip(element: Element, tooltip: string|void|void): void;
    }
}
