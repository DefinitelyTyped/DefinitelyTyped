declare module goog {
    function require(name: 'goog.ui.style.app.PrimaryActionButtonRenderer'): typeof goog.ui.style.app.PrimaryActionButtonRenderer;
}

declare module goog.ui.style.app {

    /**
     * Custom renderer for {@link goog.ui.Button}s. This renderer supports the
     * "primary action" style for buttons.
     *
     * @constructor
     * @extends {goog.ui.style.app.ButtonRenderer}
     * @final
     */
    class PrimaryActionButtonRenderer extends goog.ui.style.app.ButtonRenderer {
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
    }
}
