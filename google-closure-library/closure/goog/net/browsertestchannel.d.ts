declare module goog {
    function require(name: 'goog.net.BrowserTestChannel'): typeof goog.net.BrowserTestChannel;
}

declare module goog.net {

    /**
     * Encapsulates the logic for a single BrowserTestChannel.
     *
     * @constructor
     * @param {goog.net.BrowserChannel} channel  The BrowserChannel that owns this
     *     test channel.
     * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
     *     logging.
     * @final
     */
    class BrowserTestChannel {
        constructor(channel: goog.net.BrowserChannel, channelDebug: goog.net.ChannelDebug);
        
        /**
         * Sets extra HTTP headers to add to all the requests sent to the server.
         *
         * @param {Object} extraHeaders The HTTP headers.
         */
        setExtraHeaders(extraHeaders: Object): void;
        
        /**
         * Sets a new parser for the response payload. A custom parser may be set to
         * avoid using eval(), for example.
         * By default, the parser uses {@code goog.json.unsafeParse}.
         * @param {!goog.string.Parser} parser Parser.
         */
        setParser(parser: goog.string$.Parser): void;
        
        /**
         * Starts the test channel. This initiates connections to the server.
         *
         * @param {string} path The relative uri for the test connection.
         */
        connect(path: string): void;
        
        /**
         * Factory method for XhrIo objects.
         * @param {?string} hostPrefix The host prefix, if we need an XhrIo object
         *     capable of calling a secondary domain.
         * @return {!goog.net.XhrIo} New XhrIo object.
         */
        createXhrIo(hostPrefix: string): goog.net.XhrIo;
        
        /**
         * Aborts the test channel.
         */
        abort(): void;
        
        /**
         * Returns whether the test channel is closed. The ChannelRequest object expects
         * this method to be implemented on its handler.
         *
         * @return {boolean} Whether the channel is closed.
         */
        isClosed(): boolean;
        
        /**
         * Callback from ChannelRequest for when new data is received
         *
         * @param {goog.net.ChannelRequest} req  The request object.
         * @param {string} responseText The text of the response.
         */
        onRequestData(req: goog.net.ChannelRequest, responseText: string): void;
        
        /**
         * Callback from ChannelRequest that indicates a request has completed.
         *
         * @param {goog.net.ChannelRequest} req  The request object.
         */
        onRequestComplete(req: goog.net.ChannelRequest): void;
        
        /**
         * Returns the last status code received for a request.
         * @return {number} The last status code received for a request.
         */
        getLastStatusCode(): number;
        
        /**
         * @return {boolean} Whether we should be using secondary domains when the
         *     server instructs us to do so.
         */
        shouldUseSecondaryDomains(): boolean;
        
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {boolean} Whether the channel is currently active.
         */
        isActive(browserChannel: goog.net.BrowserChannel): boolean;
        
        /**
         * Notifies the channel of a fine grained network event.
         * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
         *     reachability event type.
         */
        notifyServerReachabilityEvent(reachabilityType: goog.net.BrowserChannel.ServerReachability): void;
    }
}

declare module goog.net.BrowserTestChannel {

    /**
     * Enum type for the browser test channel state machine
     * @enum {number}
     * @private
     */
    type State_ = number;
    var State_: {
        INIT: State_;
        CHECKING_BLOCKED: State_;
        CONNECTION_TESTING: State_;
    };
}
