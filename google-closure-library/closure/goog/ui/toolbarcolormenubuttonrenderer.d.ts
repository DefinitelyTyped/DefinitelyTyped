declare module goog {
    function require(name: 'goog.ui.ToolbarColorMenuButtonRenderer'): typeof goog.ui.ToolbarColorMenuButtonRenderer;
}

declare module goog.ui {

    /**
     * Toolbar-style renderer for {@link goog.ui.ColorMenuButton}s.
     * @constructor
     * @extends {goog.ui.ToolbarMenuButtonRenderer}
     * @final
     */
    class ToolbarColorMenuButtonRenderer extends goog.ui.ToolbarMenuButtonRenderer {
        constructor();
        
        /**
         * Overrides the superclass implementation by wrapping the caption text or DOM
         * structure in a color indicator element.  Creates the following DOM structure:
         *   <div class="goog-inline-block goog-toolbar-menu-button-caption">
         *     <div class="goog-color-menu-button-indicator">
         *       Contents...
         *     </div>
         *   </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Caption element.
         * @see goog.ui.ToolbarColorMenuButtonRenderer#createColorIndicator
         * @override
         */
        createCaption(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
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
