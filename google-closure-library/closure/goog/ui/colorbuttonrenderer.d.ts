declare module goog {
    function require(name: 'goog.ui.ColorButtonRenderer'): typeof goog.ui.ColorButtonRenderer;
}

declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.ColorButton}s.
     * Uses {@link goog.ui.ColorMenuButton}s but disables the dropdown.
     *
     * @constructor
     * @extends {goog.ui.ColorMenuButtonRenderer}
     * @final
     */
    class ColorButtonRenderer extends goog.ui.ColorMenuButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer. Additionally, applies class to the button's caption.
         * @type {string}
         */
        static CSS_CLASS: string;
    }
}
