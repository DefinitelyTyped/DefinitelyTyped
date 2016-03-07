declare module goog {
    function require(name: 'goog.net.CrossDomainRpc'): typeof goog.net.CrossDomainRpc;
}

declare module goog.net {

    /**
     * Creates a new instance of cross domain RPC.
     *
     * This class makes use of goog.html.legacyconversions and provides no
     * HTML-type-safe alternative. As such, it is not compatible with
     * code that sets goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS to
     * false.
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class CrossDomainRpc extends goog.events.EventTarget {
        constructor();
        
        /** @type {Object} */
        responseHeaders: Object;
        
        /** @type {string} */
        responseText: string;
        
        /** @type {number} */
        status: number;
        
        /** @type {number} */
        timeWaitedAfterResponseReady_: number;
        
        /**
         * Header prefix.
         * @type {string}
         */
        static HEADER: string;
        
        /**
         * Parameter prefix.
         * @type {string}
         */
        static PARAM: string;
        
        /**
         * Parameter to echo prefix.
         * @type {string}
         */
        static PARAM_ECHO: string;
        
        /**
         * Parameter to echo: request id
         * @type {string}
         */
        static PARAM_ECHO_REQUEST_ID: string;
        
        /**
         * Parameter to echo: dummy resource URI
         * @type {string}
         */
        static PARAM_ECHO_DUMMY_URI: string;
        
        /**
         * Sets the URI for a dummy resource on caller's domain.  This function is
         * used for specifying a particular resource to use rather than relying on
         * auto detection.
         * @param {string} dummyResourceUri URI to dummy resource on the same domain
         *    of caller's page.
         */
        static setDummyResourceUri(dummyResourceUri: string): void;
        
        /**
         * Sets whether a fallback dummy resource ("/robots.txt" on Firefox and Safari
         * and current page on IE) should be used when a suitable dummy resource is
         * not available.
         * @param {boolean} useFallBack Whether to use fallback or not.
         */
        static setUseFallBackDummyResource(useFallBack: boolean): void;
        
        /**
         * Sends a request across domain.
         * @param {string} uri Uri to make request to.
         * @param {Function=} opt_continuation Continuation function to be called
         *     when request is completed.  Takes one argument of an event object
         *     whose target has the following properties: "status" is the HTTP
         *     response status code, "responseText" is the response text,
         *     and "headers" is an object with all response headers.  The event
         *     target's getResponseJson() method returns a JavaScript object evaluated
         *     from the JSON response or undefined if response is not JSON.
         * @param {string=} opt_method Method of request. Default is POST.
         * @param {Object=} opt_params Parameters. Each property is turned into a
         *     request parameter.
         * @param {Object=} opt_headers Map of headers of the request.
         */
        static send(uri: string, opt_continuation?: Function, opt_method?: string, opt_params?: Object, opt_headers?: Object): void;
        
        /**
         * Sets debug mode to true or false.  When debug mode is on, response iframes
         * are visible and left behind after their use is finished.
         * @param {boolean} flag Flag to indicate intention to turn debug model on
         *     (true) or off (false).
         */
        static setDebugMode(flag: boolean): void;
        
        /**
         * Sends a request across domain.
         * @param {string} uri Uri to make request to.
         * @param {string=} opt_method Method of request. Default is POST.
         * @param {Object=} opt_params Parameters. Each property is turned into a
         *     request parameter.
         * @param {Object=} opt_headers Map of headers of the request.
         */
        sendRequest(uri: string, opt_method?: string, opt_params?: Object, opt_headers?: Object): void;
        
        /**
         * If response is JSON, evaluates it to a JavaScript object and
         * returns it; otherwise returns undefined.
         * @return {Object|undefined} JavaScript object if response is in JSON
         *     or undefined.
         */
        getResponseJson(): Object|void;
        
        /**
         * @return {boolean} Whether the request completed with a success.
         */
        isSuccess(): boolean;
        
        /**
         * Removes request iframe used.
         */
        reset(): void;
        
        /**
         * Makes response available for grandparent (requester)'s receiveResponse
         * call to pick up by creating a series of iframes pointed to the dummy URI
         * with a payload (value after either ? or #) carrying a chunk of response
         * data and a response info iframe that tells the grandparent (requester) the
         * readiness of response.
         * @param {string} data Response data (string or JSON string).
         * @param {boolean} isDataJson true if data is a JSON string; false if just a
         *     string.
         * @param {Object} echo Parameters to echo back
         *     "xdpe:request-id": Server that produces the response needs to
         *     copy it here to support multiple current XD requests on the same page.
         *     "xdpe:dummy-uri": URI to a dummy resource that response
         *     iframes point to to gain the domain of the client.  This can be an
         *     image (IE) or a CSS file (FF) found on the requester's page.
         *     Server should copy value from request parameter "xdpe:dummy-uri".
         * @param {number} status HTTP response status code.
         * @param {string} headers Response headers in JSON format.
         */
        static sendResponse(data: string, isDataJson: boolean, echo: Object, status: number, headers: string): void;
        
        /**
         * Gets a response header.
         * @param {string} name Name of response header.
         * @return {string|undefined} Value of response header; undefined if not found.
         */
        getResponseHeader(name: string): string|void;
    }
}
