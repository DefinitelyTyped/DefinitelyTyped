declare module goog {
    function require(name: 'goog.net.ChannelRequest'): typeof goog.net.ChannelRequest;
    function require(name: 'goog.net.ChannelRequest.Error'): typeof goog.net.ChannelRequest.Error;
}

declare module goog.net {

    /**
     * Creates a ChannelRequest object which encapsulates a request to the server.
     * A new ChannelRequest is created for each request to the server.
     *
     * @param {goog.net.BrowserChannel|goog.net.BrowserTestChannel} channel
     *     The BrowserChannel that owns this request.
     * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
     *     logging.
     * @param {string=} opt_sessionId  The session id for the channel.
     * @param {string|number=} opt_requestId  The request id for this request.
     * @param {number=} opt_retryId  The retry id for this request.
     * @constructor
     */
    class ChannelRequest {
        constructor(channel: goog.net.BrowserChannel|goog.net.BrowserTestChannel, channelDebug: goog.net.ChannelDebug, opt_sessionId?: string, opt_requestId?: string|number, opt_retryId?: number);
        
        /**
         * Default timeout in MS for a request. The server must return data within this
         * time limit for the request to not timeout.
         * @type {number}
         */
        static TIMEOUT_MS: number;
        
        /**
         * How often to poll (in MS) for changes to responseText in browsers that don't
         * fire onreadystatechange during incremental loading of responseText.
         * @type {number}
         */
        static POLLING_INTERVAL_MS: number;
        
        /**
         * Returns a useful error string for debugging based on the specified error
         * code.
         * @param {goog.net.ChannelRequest.Error} errorCode The error code.
         * @param {number} statusCode The HTTP status code.
         * @return {string} The error string for the given code combination.
         */
        static errorStringFromCode(errorCode: goog.net.ChannelRequest.Error, statusCode: number): string;
        
        /**
         * Returns whether XHR streaming is supported on this browser.
         *
         * If XHR streaming is not supported, we will try to use an ActiveXObject
         * to create a Forever IFrame.
         *
         * @return {boolean} Whether XHR streaming is supported.
         * @see http://code.google.com/p/closure-library/issues/detail?id=346
         */
        static supportsXhrStreaming(): boolean;
        
        /**
         * Sets extra HTTP headers to add to all the requests sent to the server.
         *
         * @param {Object} extraHeaders The HTTP headers.
         */
        setExtraHeaders(extraHeaders: Object): void;
        
        /**
         * Sets the timeout for a request
         *
         * @param {number} timeout   The timeout in MS for when we fail the request.
         */
        setTimeout(timeout: number): void;
        
        /**
         * Sets the throttle for handling onreadystatechange events for the request.
         *
         * @param {number} throttle The throttle in ms.  A value of zero indicates
         *     no throttle.
         */
        setReadyStateChangeThrottle(throttle: number): void;
        
        /**
         * Uses XMLHTTP to send an HTTP POST to the server.
         *
         * @param {goog.Uri} uri  The uri of the request.
         * @param {string} postData  The data for the post body.
         * @param {boolean} decodeChunks  Whether to the result is expected to be
         *     encoded for chunking and thus requires decoding.
         */
        xmlHttpPost(uri: goog.Uri, postData: string, decodeChunks: boolean): void;
        
        /**
         * Uses XMLHTTP to send an HTTP GET to the server.
         *
         * @param {goog.Uri} uri  The uri of the request.
         * @param {boolean} decodeChunks  Whether to the result is expected to be
         *     encoded for chunking and thus requires decoding.
         * @param {?string} hostPrefix  The host prefix, if we might be using a
         *     secondary domain.  Note that it should also be in the URL, adding this
         *     won't cause it to be added to the URL.
         * @param {boolean=} opt_noClose   Whether to request that the tcp/ip connection
         *     should be closed.
         */
        xmlHttpGet(uri: goog.Uri, decodeChunks: boolean, hostPrefix: string, opt_noClose?: boolean): void;
        
        /**
         * Uses the Trident htmlfile ActiveX control to send a GET request in IE. This
         * is the innovation discovered that lets us get intermediate results in
         * Internet Explorer.  Thanks to http://go/kev
         * @param {goog.Uri} uri The uri to request from.
         * @param {boolean} usingSecondaryDomain Whether to use a secondary domain.
         */
        tridentGet(uri: goog.Uri, usingSecondaryDomain: boolean): void;
        
        /**
         * Uses an IMG tag to send an HTTP get to the server. This is only currently
         * used to terminate the connection, as an IMG tag is the most reliable way to
         * send something to the server while the page is getting torn down.
         * @param {goog.Uri} uri The uri to send a request to.
         */
        sendUsingImgTag(uri: goog.Uri): void;
        
        /**
         * Cancels the request no matter what the underlying transport is.
         */
        cancel(): void;
        
        /**
         * Indicates whether the request was successful. Only valid after the handler
         * is called to indicate completion of the request.
         *
         * @return {boolean} True if the request succeeded.
         */
        getSuccess(): boolean;
        
        /**
         * If the request was not successful, returns the reason.
         *
         * @return {?goog.net.ChannelRequest.Error}  The last error.
         */
        getLastError(): goog.net.ChannelRequest.Error;
        
        /**
         * Returns the status code of the last request.
         * @return {number} The status code of the last request.
         */
        getLastStatusCode(): number;
        
        /**
         * Returns the session id for this channel.
         *
         * @return {string|undefined} The session ID.
         */
        getSessionId(): string|void;
        
        /**
         * Returns the request id for this request. Each request has a unique request
         * id and the request IDs are a sequential increasing count.
         *
         * @return {string|number|undefined} The request ID.
         */
        getRequestId(): string|number|void;
        
        /**
         * Returns the data for a post, if this request is a post.
         *
         * @return {?string} The POST data provided by the request initiator.
         */
        getPostData(): string;
        
        /**
         * Returns the time that the request started, if it has started.
         *
         * @return {?number} The time the request started, as returned by goog.now().
         */
        getRequestStartTime(): number;
    }
}

declare module goog.net.ChannelRequest {

    /**
     * Enum for channel requests type
     * @enum {number}
     * @private
     */
    type Type_ = number;
    var Type_: {
        XML_HTTP: Type_;
        IMG: Type_;
        TRIDENT: Type_;
    };

    /**
     * Enum type for identifying a ChannelRequest error.
     * @enum {number}
     */
    type Error = number;
    var Error: {
        STATUS: Error;
        NO_DATA: Error;
        TIMEOUT: Error;
        UNKNOWN_SESSION_ID: Error;
        BAD_DATA: Error;
        HANDLER_EXCEPTION: Error;
        BROWSER_OFFLINE: Error;
        ACTIVE_X_BLOCKED: Error;
    };
}
