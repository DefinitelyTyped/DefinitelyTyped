declare module goog {
    function require(name: 'goog.ui.FormPost'): typeof goog.ui.FormPost;
}

declare module goog.ui {

    /**
     * Creates a formpost object.
     * @constructor
     * @extends {goog.ui.Component}
     * @param {goog.dom.DomHelper=} opt_dom The DOM helper.
     * @final
     */
    class FormPost extends goog.ui.Component {
        constructor(opt_dom?: goog.dom.DomHelper);
        
        /**
         * Constructs a POST request and directs the browser as if a form were
         * submitted.
         * @param {Object} parameters Object with parameter values. Values can be
         *     strings, numbers, or arrays of strings or numbers.
         * @param {string=} opt_url The destination URL. If not specified, uses the
         *     current URL for window for the DOM specified in the constructor.
         * @param {string=} opt_target An optional name of a window in which to open the
         *     URL. If not specified, uses the window for the DOM specified in the
         *     constructor.
         */
        post(parameters: Object, opt_url?: string, opt_target?: string): void;
    }
}
