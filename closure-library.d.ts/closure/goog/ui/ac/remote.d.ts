declare module goog {
    function require(name: 'goog.ui.ac.Remote'): typeof goog.ui.ac.Remote;
}

declare module goog.ui.ac {

    /**
     * Factory class for building a remote autocomplete widget that autocompletes
     * an inputbox or text area from a data array provided via ajax.
     * @param {string} url The Uri which generates the auto complete matches.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
     *     to false.
     * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
     *     "gost" => "ghost".
     * @constructor
     * @extends {goog.ui.ac.AutoComplete}
     */
    class Remote extends goog.ui.ac.AutoComplete {
        constructor(url: string, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean);
        
        /**
         * Set whether or not standard highlighting should be used when rendering rows.
         * @param {boolean} useStandardHighlighting true if standard highlighting used.
         */
        setUseStandardHighlighting(useStandardHighlighting: boolean): void;
        
        /**
         * Gets the attached InputHandler object.
         * @return {goog.ui.ac.InputHandler} The input handler.
         */
        getInputHandler(): goog.ui.ac.InputHandler;
        
        /**
         * Set the send method ("GET", "POST") for the matcher.
         * @param {string} method The send method; default: GET.
         */
        setMethod(method: string): void;
        
        /**
         * Set the post data for the matcher.
         * @param {string} content Post data.
         */
        setContent(content: string): void;
        
        /**
         * Set the HTTP headers for the matcher.
         * @param {Object|goog.structs.Map} headers Map of headers to add to the
         *     request.
         */
        setHeaders(headers: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Set the timeout interval for the matcher.
         * @param {number} interval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         */
        setTimeoutInterval(interval: number): void;
    }
}
