declare module goog {
    function require(name: 'goog.net.XhrIo'): typeof goog.net.XhrIo;
    function require(name: 'goog.net.XhrIo.ResponseType'): typeof goog.net.XhrIo.ResponseType;
}

declare module goog.net {

    /**
     * Basic class for handling XMLHttpRequests.
     * @param {goog.net.XmlHttpFactory=} opt_xmlHttpFactory Factory to use when
     *     creating XMLHttpRequest objects.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class XhrIo extends goog.events.EventTarget {
        constructor(opt_xmlHttpFactory?: goog.net.XmlHttpFactory);
        
        /**
         * The Content-Type HTTP header name
         * @type {string}
         */
        static CONTENT_TYPE_HEADER: string;
        
        /**
         * The pattern matching the 'http' and 'https' URI schemes
         * @type {!RegExp}
         */
        static HTTP_SCHEME_PATTERN: RegExp;
        
        /**
         * The methods that typically come along with form data.  We set different
         * headers depending on whether the HTTP action is one of these.
         */
        static METHODS_WITH_FORM_DATA: any;
        
        /**
         * The Content-Type HTTP header value for a url-encoded form
         * @type {string}
         */
        static FORM_CONTENT_TYPE: string;
        
        /**
         * Static send that creates a short lived instance of XhrIo to send the
         * request.
         * @see goog.net.XhrIo.cleanup
         * @param {string|goog.Uri} url Uri to make request to.
         * @param {?function(this:goog.net.XhrIo, ?)=} opt_callback Callback function
         *     for when request is complete.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Body data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {number=} opt_timeoutInterval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         * @param {boolean=} opt_withCredentials Whether to send credentials with the
         *     request. Default to false. See {@link goog.net.XhrIo#setWithCredentials}.
         * @return {!goog.net.XhrIo} The sent XhrIo.
         */
        static send(url: string|goog.Uri, opt_callback?: (arg0: any) => any, opt_method?: string, opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string, opt_headers?: Object|goog.structs.Map<any, any>, opt_timeoutInterval?: number, opt_withCredentials?: boolean): goog.net.XhrIo;
        
        /**
         * Disposes all non-disposed instances of goog.net.XhrIo created by
         * {@link goog.net.XhrIo.send}.
         * {@link goog.net.XhrIo.send} cleans up the goog.net.XhrIo instance
         * it creates when the request completes or fails.  However, if
         * the request never completes, then the goog.net.XhrIo is not disposed.
         * This can occur if the window is unloaded before the request completes.
         * We could have {@link goog.net.XhrIo.send} return the goog.net.XhrIo
         * it creates and make the client of {@link goog.net.XhrIo.send} be
         * responsible for disposing it in this case.  However, this makes things
         * significantly more complicated for the client, and the whole point
         * of {@link goog.net.XhrIo.send} is that it's simple and easy to use.
         * Clients of {@link goog.net.XhrIo.send} should call
         * {@link goog.net.XhrIo.cleanup} when doing final
         * cleanup on window unload.
         */
        static cleanup(): void;
        
        /**
         * Installs exception protection for all entry point introduced by
         * goog.net.XhrIo instances which are not protected by
         * {@link goog.debug.ErrorHandler#protectWindowSetTimeout},
         * {@link goog.debug.ErrorHandler#protectWindowSetInterval}, or
         * {@link goog.events.protectBrowserEventEntryPoint}.
         *
         * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
         *     protect the entry point(s).
         */
        static protectEntryPoints(errorHandler: goog.debug.ErrorHandler): void;
        
        /**
         * Returns the number of milliseconds after which an incomplete request will be
         * aborted, or 0 if no timeout is set.
         * @return {number} Timeout interval in milliseconds.
         */
        getTimeoutInterval(): number;
        
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted and a {@link goog.net.EventType.TIMEOUT} event raised; 0 means no
         * timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
        
        /**
         * Sets the desired type for the response. At time of writing, this is only
         * supported in very recent versions of WebKit (10.0.612.1 dev and later).
         *
         * If this is used, the response may only be accessed via {@link #getResponse}.
         *
         * @param {goog.net.XhrIo.ResponseType} type The desired type for the response.
         */
        setResponseType(type: goog.net.XhrIo.ResponseType): void;
        
        /**
         * Gets the desired type for the response.
         * @return {goog.net.XhrIo.ResponseType} The desired type for the response.
         */
        getResponseType(): goog.net.XhrIo.ResponseType;
        
        /**
         * Sets whether a "credentialed" request that is aware of cookie and
         * authentication information should be made. This option is only supported by
         * browsers that support HTTP Access Control. As of this writing, this option
         * is not supported in IE.
         *
         * @param {boolean} withCredentials Whether this should be a "credentialed"
         *     request.
         */
        setWithCredentials(withCredentials: boolean): void;
        
        /**
         * Gets whether a "credentialed" request is to be sent.
         * @return {boolean} The desired type for the response.
         */
        getWithCredentials(): boolean;
        
        /**
         * Instance send that actually uses XMLHttpRequest to make a server call.
         * @param {string|goog.Uri} url Uri to make request to.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Body data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         */
        send(url: string|goog.Uri, opt_method?: string, opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string, opt_headers?: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Creates a new XHR object.
         * @return {!goog.net.XhrLike.OrNative} The newly created XHR object.
         * @protected
         */
        createXhr(): goog.net.XhrLike.OrNative;
        
        /**
         * Abort the current XMLHttpRequest
         * @param {goog.net.ErrorCode=} opt_failureCode Optional error code to use -
         *     defaults to ABORT.
         */
        abort(opt_failureCode?: goog.net.ErrorCode): void;
        
        /**
         * @return {boolean} Whether there is an active request.
         */
        isActive(): boolean;
        
        /**
         * @return {boolean} Whether the request has completed.
         */
        isComplete(): boolean;
        
        /**
         * @return {boolean} Whether the request completed with a success.
         */
        isSuccess(): boolean;
        
        /**
         * Get the readystate from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @return {goog.net.XmlHttp.ReadyState} goog.net.XmlHttp.ReadyState.*.
         */
        getReadyState(): goog.net.XmlHttp.ReadyState;
        
        /**
         * Get the status from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @return {number} Http status.
         */
        getStatus(): number;
        
        /**
         * Get the status text from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @return {string} Status text.
         */
        getStatusText(): string;
        
        /**
         * Get the last Uri that was requested
         * @return {string} Last Uri.
         */
        getLastUri(): string;
        
        /**
         * Get the response text from the Xhr object
         * Will only return correct result when called from the context of a callback.
         * @return {string} Result from the server, or '' if no result available.
         */
        getResponseText(): string;
        
        /**
         * Get the response body from the Xhr object. This property is only available
         * in IE since version 7 according to MSDN:
         * http://msdn.microsoft.com/en-us/library/ie/ms534368(v=vs.85).aspx
         * Will only return correct result when called from the context of a callback.
         *
         * One option is to construct a VBArray from the returned object and convert
         * it to a JavaScript array using the toArray method:
         * {@code (new window['VBArray'](xhrIo.getResponseBody())).toArray()}
         * This will result in an array of numbers in the range of [0..255]
         *
         * Another option is to use the VBScript CStr method to convert it into a
         * string as outlined in http://stackoverflow.com/questions/1919972
         *
         * @return {Object} Binary result from the server or null if not available.
         */
        getResponseBody(): Object;
        
        /**
         * Get the response XML from the Xhr object
         * Will only return correct result when called from the context of a callback.
         * @return {Document} The DOM Document representing the XML file, or null
         * if no result available.
         */
        getResponseXml(): Document;
        
        /**
         * Get the response and evaluates it as JSON from the Xhr object
         * Will only return correct result when called from the context of a callback
         * @param {string=} opt_xssiPrefix Optional XSSI prefix string to use for
         *     stripping of the response before parsing. This needs to be set only if
         *     your backend server prepends the same prefix string to the JSON response.
         * @return {Object|undefined} JavaScript object.
         */
        getResponseJson(opt_xssiPrefix?: string): Object|void;
        
        /**
         * Get the response as the type specificed by {@link #setResponseType}. At time
         * of writing, this is only directly supported in very recent versions of WebKit
         * (10.0.612.1 dev and later). If the field is not supported directly, we will
         * try to emulate it.
         *
         * Emulating the response means following the rules laid out at
         * http://www.w3.org/TR/XMLHttpRequest/#the-response-attribute
         *
         * On browsers with no support for this (Chrome < 10, Firefox < 4, etc), only
         * response types of DEFAULT or TEXT may be used, and the response returned will
         * be the text response.
         *
         * On browsers with Mozilla's draft support for array buffers (Firefox 4, 5),
         * only response types of DEFAULT, TEXT, and ARRAY_BUFFER may be used, and the
         * response returned will be either the text response or the Mozilla
         * implementation of the array buffer response.
         *
         * On browsers will full support, any valid response type supported by the
         * browser may be used, and the response provided by the browser will be
         * returned.
         *
         * @return {*} The response.
         */
        getResponse(): any;
        
        /**
         * Get the value of the response-header with the given name from the Xhr object
         * Will only return correct result when called from the context of a callback
         * and the request has completed
         * @param {string} key The name of the response-header to retrieve.
         * @return {string|undefined} The value of the response-header named key.
         */
        getResponseHeader(key: string): string|void;
        
        /**
         * Gets the text of all the headers in the response.
         * Will only return correct result when called from the context of a callback
         * and the request has completed.
         * @return {string} The value of the response headers or empty string.
         */
        getAllResponseHeaders(): string;
        
        /**
         * Returns all response headers as a key-value map.
         * Multiple values for the same header key can be combined into one,
         * separated by a comma and a space.
         * Note that the native getResponseHeader method for retrieving a single header
         * does a case insensitive match on the header name. This method does not
         * include any case normalization logic, it will just return a key-value
         * representation of the headers.
         * See: http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
         * @return {!Object<string, string>} An object with the header keys as keys
         *     and header values as values.
         */
        getResponseHeaders(): {[index: string]: string};
        
        /**
         * Get the last error message
         * @return {goog.net.ErrorCode} Last error code.
         */
        getLastErrorCode(): goog.net.ErrorCode;
        
        /**
         * Get the last error message
         * @return {string} Last error message.
         */
        getLastError(): string;
    }
}

declare module goog.net.XhrIo {

    /**
     * Response types that may be requested for XMLHttpRequests.
     * @enum {string}
     * @see http://www.w3.org/TR/XMLHttpRequest/#the-responsetype-attribute
     */
    type ResponseType = string;
    var ResponseType: {
        DEFAULT: ResponseType;
        TEXT: ResponseType;
        DOCUMENT: ResponseType;
        BLOB: ResponseType;
        ARRAY_BUFFER: ResponseType;
    };
}
