declare module goog {
    function require(name: 'goog.ds.JsXmlHttpDataSource'): typeof goog.ds.JsXmlHttpDataSource;
}

declare module goog.ds {

    /**
     * Similar to JsonDataSource, with using XMLHttpRequest for transport
     * Currently requires the result be a JS object that can be evaluated and
     * set to a variable and doesn't require strict JSON notation.
     *
     * @param {(string|goog.Uri)} uri URI for the request.
     * @param {string} name Name of the datasource.
     * @param {string=} opt_startText Text to expect/strip before JS response.
     * @param {string=} opt_endText Text to expect/strip after JS response.
     * @param {boolean=} opt_usePost If true, use POST. Defaults to false (GET).
     *
     * @extends {goog.ds.FastDataNode}
     * @constructor
     * @final
     */
    class JsXmlHttpDataSource extends goog.ds.FastDataNode {
        constructor(uri: string|goog.Uri, name: string, opt_startText?: string, opt_endText?: string, opt_usePost?: boolean);
        
        /**
         * Gets the state of the backing data for this node
         * @return {goog.ds.LoadState} The state.
         * @override
         */
        getLoadState(): goog.ds.LoadState;
        
        /**
         * Sets the request data. This can be used if it is required to
         * send a specific body rather than build the body from the query
         * parameters. Only used in POST requests.
         * @param {string} data The data to send in the request body.
         */
        setQueryData(data: string): void;
    }
}
