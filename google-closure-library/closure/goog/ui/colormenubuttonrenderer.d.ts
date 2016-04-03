declare module goog {
    function require(name: 'goog.ui.ColorMenuButtonRenderer'): typeof goog.ui.ColorMenuButtonRenderer;
}

declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.ColorMenuButton}s.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     */
    class ColorMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Overrides the superclass implementation by wrapping the caption text or DOM
         * structure in a color indicator element.  Creates the following DOM structure:
         *   <div class="goog-inline-block goog-menu-button-caption">
         *     <div class="goog-color-menu-button-indicator">
         *       Contents...
         *     </div>
         *   </div>
         * The 'goog-color-menu-button-indicator' style should be defined to have a
         * bottom border of nonzero width and a default color that blends into its
         * background.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Caption element.
         * @override
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Wrap a caption in a div with the color-menu-button-indicator CSS class.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {string} cssClass Dummy parameter for compatibility to goog.ui.MenuButtonRenderer.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Caption element.
         */
        static wrapCaption(content: goog.ui.ControlContent, cssClass: string, dom: goog.dom.DomHelper): Element;
        
        /**
         * Takes a color menu button control's root element and a value object
         * (which is assumed to be a color), and updates the button's DOM to reflect
         * the new color.  Overrides {@link goog.ui.ButtonRenderer#setValue}.
         * @param {Element} element The button control's root element (if rendered).
         * @param {*} value New value; assumed to be a color spec string.
         * @override
         */
        setValue(element: Element, value: any): void;
        
        /**
         * Takes a control's content element and a value object (which is assumed
         * to be a color), and updates its DOM to reflect the new color.
         * @param {Element} caption A content element of a control.
         * @param {*} value New value; assumed to be a color spec string.
         */
        static setCaptionValue(caption: Element, value: any): void;
        
        /**
         * Initializes the button's DOM when it enters the document.  Overrides the
         * superclass implementation by making sure the button's color indicator is
         * initialized.
         * @param {goog.ui.Control} button goog.ui.ColorMenuButton whose DOM is to be
         *     initialized as it enters the document.
         * @override
         */
        initializeDom(button: goog.ui.Control): void;
    }
}
