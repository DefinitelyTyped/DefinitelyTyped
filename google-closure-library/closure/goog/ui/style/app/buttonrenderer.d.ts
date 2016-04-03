declare module goog {
    function require(name: 'goog.ui.style.app.ButtonRenderer'): typeof goog.ui.style.app.ButtonRenderer;
}

declare module goog.ui.style.app {

    /**
     * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class ButtonRenderer extends goog.ui.CustomButtonRenderer {
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
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-button-base-outer-box">
         *    <div class="goog-inline-block goog-button-base-inner-box">
         *      <div class="goog-button-base-pos">
         *        <div class="goog-button-base-top-shadow">&nbsp;</div>
         *        <div class="goog-button-base-content">Contents...</div>
         *      </div>
         *    </div>
         *  </div>
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         * @override
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
    }
}
