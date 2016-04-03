declare module goog {
    function require(name: 'goog.ui.RoundedTabRenderer'): typeof goog.ui.RoundedTabRenderer;
}

declare module goog.ui {

    /**
     * Rounded corner tab renderer for {@link goog.ui.Tab}s.
     * @constructor
     * @extends {goog.ui.TabRenderer}
     * @final
     */
    class RoundedTabRenderer extends goog.ui.TabRenderer {
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
         * Creates the tab's DOM structure, based on the containing tab bar's location
         * relative to tab contents.  For example, the DOM for a tab in a tab bar
         * located above tab contents would look like this:
         * <pre>
         *   <div class="goog-rounded-tab" title="...">
         *     <table class="goog-rounded-tab-table">
         *       <tbody>
         *         <tr>
         *           <td nowrap>
         *             <div class="goog-rounded-tab-outer-edge"></div>
         *             <div class="goog-rounded-tab-inner-edge"></div>
         *           </td>
         *         </tr>
         *         <tr>
         *           <td nowrap>
         *             <div class="goog-rounded-tab-caption">Hello, world</div>
         *           </td>
         *         </tr>
         *       </tbody>
         *     </table>
         *   </div>
         * </pre>
         * @param {goog.ui.Control} tab Tab to render.
         * @return {Element} Root element for the tab.
         * @override
         */
        createDom(tab: goog.ui.Control): Element;
        
        /**
         * Decorates the element with the tab.  Overrides the superclass implementation
         * by wrapping the tab's content in a table that implements rounded corners.
         * @param {goog.ui.Control} tab Tab to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(tab: goog.ui.Control, element: Element): Element;
        
        /**
         * Creates a table implementing a rounded corner tab.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {goog.ui.ControlContent} caption Text caption or DOM structure
         *     to display as the tab's caption.
         * @param {goog.ui.TabBar.Location} location Tab bar location relative to the
         *     tab contents.
         * @return {!Element} Table implementing a rounded corner tab.
         * @protected
         */
        createTab(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent, location: goog.ui.TabBar.Location): Element;
        
        /**
         * Creates a table row implementing the tab caption.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {goog.ui.ControlContent} caption Text caption or DOM structure
         *     to display as the tab's caption.
         * @return {!Element} Tab caption table row.
         * @protected
         */
        createCaption(dom: goog.dom.DomHelper, caption: goog.ui.ControlContent): Element;
        
        /**
         * Creates a table row implementing a rounded tab edge.
         * @param {goog.dom.DomHelper} dom DOM helper to use for element construction.
         * @param {boolean} isTopEdge Whether to create a top or bottom edge.
         * @return {!Element} Rounded tab edge table row.
         * @protected
         */
        createEdge(dom: goog.dom.DomHelper, isTopEdge: boolean): Element;
    }
}
