declare module goog {
    function require(name: 'goog.net.IframeIo'): typeof goog.net.IframeIo;
    function require(name: 'goog.net.IframeIo.IncrementalDataEvent'): typeof goog.net.IframeIo.IncrementalDataEvent;
}

declare module goog.net {

    /**
     * Class for managing requests via iFrames.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class IframeIo extends goog.events.EventTarget {
        constructor();
        
        /**
         * Prefix for frame names
         * @type {string}
         */
        static FRAME_NAME_PREFIX: string;
        
        /**
         * Suffix that is added to inner frames used for sending requests in non-IE
         * browsers
         * @type {string}
         */
        static INNER_FRAME_SUFFIX: string;
        
        /**
         * The number of milliseconds after a request is completed to dispose the
         * iframes.  This can be done lazily so we wait long enough for any processing
         * that occurred as a result of the response to finish.
         * @type {number}
         */
        static IFRAME_DISPOSE_DELAY_MS: number;
        
        /**
         * Static send that creates a short lived instance of IframeIo to send the
         * request.
         * @param {goog.Uri|string} uri Uri of the request, it is up the caller to
         *     manage query string params.
         * @param {Function=} opt_callback Event handler for when request is completed.
         * @param {string=} opt_method Default is GET, POST uses a form to submit the
         *     request.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         * @param {Object|goog.structs.Map=} opt_data Map of key-value pairs that
         *     will be posted to the server via the iframe's form.
         */
        static send(uri: goog.Uri|string, opt_callback?: Function, opt_method?: string, opt_noCache?: boolean, opt_data?: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Find an iframe by name (assumes the context is goog.global since that is
         * where IframeIo's iframes are kept).
         * @param {string} fname The name to find.
         * @return {HTMLIFrameElement} The iframe element with that name.
         */
        static getIframeByName(fname: string): HTMLIFrameElement;
        
        /**
         * Find an instance of the IframeIo object by name.
         * @param {string} fname The name to find.
         * @return {goog.net.IframeIo} The instance of IframeIo.
         */
        static getInstanceByName(fname: string): goog.net.IframeIo;
        
        /**
         * Handles incremental data and routes it to the correct iframeIo instance.
         * The HTML page requested by the IframeIo instance should contain script blocks
         * that call an externed reference to this method.
         * @param {Window} win The window object.
         * @param {Object} data The data object.
         */
        static handleIncrementalData(win: Window, data: Object): void;
        
        /**
         * Sends a request via an iframe.
         *
         * A HTML form is used and submitted to the iframe, this simplifies the
         * difference between GET and POST requests. The iframe needs to be created and
         * destroyed for each request otherwise the request will contribute to the
         * history stack.
         *
         * sendFromForm does some clever trickery (thanks jlim) in non-IE browsers to
         * stop a history entry being added for POST requests.
         *
         * @param {goog.Uri|string} uri Uri of the request.
         * @param {string=} opt_method Default is GET, POST uses a form to submit the
         *     request.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         * @param {Object|goog.structs.Map=} opt_data Map of key-value pairs.
         */
        send(uri: goog.Uri|string, opt_method?: string, opt_noCache?: boolean, opt_data?: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Sends the data stored in an existing form to the server. The HTTP method
         * should be specified on the form, the action can also be specified but can
         * be overridden by the optional URI param.
         *
         * This can be used in conjunction will a file-upload input to upload a file in
         * the background without affecting history.
         *
         * Example form:
         * <pre>
         *   &lt;form action="/server/" enctype="multipart/form-data" method="POST"&gt;
         *     &lt;input name="userfile" type="file"&gt;
         *   &lt;/form&gt;
         * </pre>
         *
         * @param {HTMLFormElement} form Form element used to send the request to the
         *     server.
         * @param {string=} opt_uri Uri to set for the destination of the request, by
         *     default the uri will come from the form.
         * @param {boolean=} opt_noCache Append a timestamp to the request to avoid
         *     caching.
         */
        sendFromForm(form: HTMLFormElement, opt_uri?: string, opt_noCache?: boolean): void;
        
        /**
         * Abort the current Iframe request
         * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
        
        /**
         * @return {boolean} True if transfer is complete.
         */
        isComplete(): boolean;
        
        /**
         * @return {boolean} True if transfer was successful.
         */
        isSuccess(): boolean;
        
        /**
         * @return {boolean} True if a transfer is in progress.
         */
        isActive(): boolean;
        
        /**
         * Returns the last response text (i.e. the text content of the iframe).
         * Assumes plain text!
         * @return {?string} Result from the server.
         */
        getResponseText(): string;
        
        /**
         * Returns the last response html (i.e. the innerHtml of the iframe).
         * @return {?string} Result from the server.
         */
        getResponseHtml(): string;
        
        /**
         * Parses the content as JSON. This is a safe parse and may throw an error
         * if the response is malformed.
         * Use goog.json.unsafeparse(this.getResponseText()) if you are sure of the
         * state of the returned content.
         * @return {Object} The parsed content.
         */
        getResponseJson(): Object;
        
        /**
         * Returns the document object from the last request.  Not truely XML, but
         * used to mirror the XhrIo interface.
         * @return {HTMLDocument} The document object from the last request.
         */
        getResponseXml(): HTMLDocument;
        
        /**
         * Get the uri of the last request.
         * @return {goog.Uri} Uri of last request.
         */
        getLastUri(): goog.Uri;
        
        /**
         * Gets the last error code.
         * @return {goog.net.ErrorCode} Last error code.
         */
        getLastErrorCode(): goog.net.ErrorCode;
        
        /**
         * Gets the last error message.
         * @return {string} Last error message.
         */
        getLastError(): string;
        
        /**
         * Gets the last custom error.
         * @return {Object} Last custom error.
         */
        getLastCustomError(): Object;
        
        /**
         * Sets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @param {Function} fn Callback that expects a document object as it's single
         *     argument.
         */
        setErrorChecker(fn: Function): void;
        
        /**
         * Gets the callback function used to check if a loaded IFrame is in an error
         * state.
         * @return {Function} A callback that expects a document object as it's single
         *     argument.
         */
        getErrorChecker(): Function;
        
        /**
         * @return {boolean} Whether the server response is being ignored.
         */
        isIgnoringResponse(): boolean;
        
        /**
         * Sets whether to ignore the response from the server by not adding any event
         * handlers to fire when the iframe loads. This is necessary when using IframeIo
         * to submit to a server on another domain, to avoid same-origin violations when
         * trying to access the response. If this is set to true, the IframeIo instance
         * will be a single-use instance that is only usable for one request.  It will
         * only clean up its resources (iframes and forms) when it is disposed.
         * @param {boolean} ignore Whether to ignore the server response.
         */
        setIgnoreResponse(ignore: boolean): void;
        
        /**
         * @return {HTMLIFrameElement} The appropriate iframe to use for requests
         *     (created in sendForm_).
         */
        getRequestIframe(): HTMLIFrameElement;
    }
}

declare module goog.net.IframeIo {

    /**
     * Class for representing incremental data events.
     * @param {Object} data The data associated with the event.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class IncrementalDataEvent extends goog.events.Event {
        constructor(data: Object);
    }
}
