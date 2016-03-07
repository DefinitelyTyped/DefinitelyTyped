declare module goog {
    function require(name: 'goog.net.BrowserChannel'): typeof goog.net.BrowserChannel;
    function require(name: 'goog.net.BrowserChannel.State'): typeof goog.net.BrowserChannel.State;
    function require(name: 'goog.net.BrowserChannel.Error'): typeof goog.net.BrowserChannel.Error;
    function require(name: 'goog.net.BrowserChannel.Event'): typeof goog.net.BrowserChannel.Event;
    function require(name: 'goog.net.BrowserChannel.ServerReachability'): typeof goog.net.BrowserChannel.ServerReachability;
    function require(name: 'goog.net.BrowserChannel.Stat'): typeof goog.net.BrowserChannel.Stat;
    function require(name: 'goog.net.BrowserChannel.QueuedMap'): typeof goog.net.BrowserChannel.QueuedMap;
    function require(name: 'goog.net.BrowserChannel.StatEvent'): typeof goog.net.BrowserChannel.StatEvent;
    function require(name: 'goog.net.BrowserChannel.TimingEvent'): typeof goog.net.BrowserChannel.TimingEvent;
    function require(name: 'goog.net.BrowserChannel.ServerReachabilityEvent'): typeof goog.net.BrowserChannel.ServerReachabilityEvent;
    function require(name: 'goog.net.BrowserChannel.Handler'): typeof goog.net.BrowserChannel.Handler;
    function require(name: 'goog.net.BrowserChannel.LogSaver'): typeof goog.net.BrowserChannel.LogSaver;
}

declare module goog.net {

    /**
     * Encapsulates the logic for a single BrowserChannel.
     *
     * @param {string=} opt_clientVersion An application-specific version number
     *        that is sent to the server when connected.
     * @param {Array<string>=} opt_firstTestResults Previously determined results
     *        of the first browser channel test.
     * @param {boolean=} opt_secondTestResults Previously determined results
     *        of the second browser channel test.
     * @constructor
     */
    class BrowserChannel {
        constructor(opt_clientVersion?: string, opt_firstTestResults?: Array<string>, opt_secondTestResults?: boolean);
        
        /**
         * The latest protocol version that this class supports. We request this version
         * from the server when opening the connection. Should match
         * com.google.net.browserchannel.BrowserChannel.LATEST_CHANNEL_VERSION.
         * @type {number}
         */
        static LATEST_CHANNEL_VERSION: number;
        
        /**
         * The timeout in milliseconds for a forward channel request.
         * @type {number}
         */
        static FORWARD_CHANNEL_RETRY_TIMEOUT: number;
        
        /**
         * Maximum number of attempts to connect to the server for back channel
         * requests.
         * @type {number}
         */
        static BACK_CHANNEL_MAX_RETRIES: number;
        
        /**
         * A number in MS of how long we guess the maxmium amount of time a round trip
         * to the server should take. In the future this could be substituted with a
         * real measurement of the RTT.
         * @type {number}
         */
        static RTT_ESTIMATE: number;
        
        /**
         * When retrying for an inactive channel, we will multiply the total delay by
         * this number.
         * @type {number}
         */
        static INACTIVE_CHANNEL_RETRY_FACTOR: number;
        
        /**
         * The normal response for forward channel requests.
         * Used only before version 8 of the protocol.
         * @type {string}
         */
        static MAGIC_RESPONSE_COOKIE: string;
        
        /**
         * A guess at a cutoff at which to no longer assume the backchannel is dead
         * when we are slow to receive data. Number in bytes.
         *
         * Assumption: The worst bandwidth we work on is 50 kilobits/sec
         * 50kbits/sec * (1 byte / 8 bits) * 6 sec dead backchannel timeout
         * @type {number}
         */
        static OUTSTANDING_DATA_BACKCHANNEL_RETRY_CUTOFF: number;
        
        /**
         * Returns the browserchannel logger.
         *
         * @return {!goog.net.ChannelDebug} The channel debug object.
         */
        getChannelDebug(): goog.net.ChannelDebug;
        
        /**
         * Set the browserchannel logger.
         * TODO(user): Add interface for channel loggers or remove this function.
         *
         * @param {goog.net.ChannelDebug} channelDebug The channel debug object.
         */
        setChannelDebug(channelDebug: goog.net.ChannelDebug): void;
        
        /**
         * Allows the application to set an execution hooks for when BrowserChannel
         * starts processing requests. This is useful to track timing or logging
         * special information. The function takes no parameters and return void.
         * @param {Function} startHook  The function for the start hook.
         */
        static setStartThreadExecutionHook(startHook: Function): void;
        
        /**
         * Allows the application to set an execution hooks for when BrowserChannel
         * stops processing requests. This is useful to track timing or logging
         * special information. The function takes no parameters and return void.
         * @param {Function} endHook  The function for the end hook.
         */
        static setEndThreadExecutionHook(endHook: Function): void;
        
        /**
         * Instantiates a ChannelRequest with the given parameters. Overidden in tests.
         *
         * @param {goog.net.BrowserChannel|goog.net.BrowserTestChannel} channel
         *     The BrowserChannel that owns this request.
         * @param {goog.net.ChannelDebug} channelDebug A ChannelDebug to use for
         *     logging.
         * @param {string=} opt_sessionId  The session id for the channel.
         * @param {string|number=} opt_requestId  The request id for this request.
         * @param {number=} opt_retryId  The retry id for this request.
         * @return {!goog.net.ChannelRequest} The created channel request.
         */
        static createChannelRequest(channel: goog.net.BrowserChannel|goog.net.BrowserTestChannel, channelDebug: goog.net.ChannelDebug, opt_sessionId?: string, opt_requestId?: string|number, opt_retryId?: number): goog.net.ChannelRequest;
        
        /**
         * Starts the channel. This initiates connections to the server.
         *
         * @param {string} testPath  The path for the test connection.
         * @param {string} channelPath  The path for the channel connection.
         * @param {Object=} opt_extraParams  Extra parameter keys and values to add to
         *     the requests.
         * @param {string=} opt_oldSessionId  Session ID from a previous session.
         * @param {number=} opt_oldArrayId  The last array ID from a previous session.
         */
        connect(testPath: string, channelPath: string, opt_extraParams?: Object, opt_oldSessionId?: string, opt_oldArrayId?: number): void;
        
        /**
         * Disconnects and closes the channel.
         */
        disconnect(): void;
        
        /**
         * Returns the session id of the channel. Only available after the
         * channel has been opened.
         * @return {string} Session ID.
         */
        getSessionId(): string;
        
        /**
         * Returns the extra HTTP headers to add to all the requests sent to the server.
         *
         * @return {Object} The HTTP headers, or null.
         */
        getExtraHeaders(): Object;
        
        /**
         * Sets extra HTTP headers to add to all the requests sent to the server.
         *
         * @param {Object} extraHeaders The HTTP headers, or null.
         */
        setExtraHeaders(extraHeaders: Object): void;
        
        /**
         * Sets the throttle for handling onreadystatechange events for the request.
         *
         * @param {number} throttle The throttle in ms.  A value of zero indicates
         *     no throttle.
         */
        setReadyStateChangeThrottle(throttle: number): void;
        
        /**
         * Sets whether cross origin requests are supported for the browser channel.
         *
         * Setting this allows the creation of requests to secondary domains and
         * sends XHRs with the CORS withCredentials bit set to true.
         *
         * In order for cross-origin requests to work, the server will also need to set
         * CORS response headers as per:
         * https://developer.mozilla.org/en-US/docs/HTTP_access_control
         *
         * See {@link goog.net.XhrIo#setWithCredentials}.
         * @param {boolean} supportCrossDomain Whether cross domain XHRs are supported.
         */
        setSupportsCrossDomainXhrs(supportCrossDomain: boolean): void;
        
        /**
         * Returns the handler used for channel callback events.
         *
         * @return {goog.net.BrowserChannel.Handler} The handler.
         */
        getHandler(): goog.net.BrowserChannel.Handler;
        
        /**
         * Sets the handler used for channel callback events.
         * @param {goog.net.BrowserChannel.Handler} handler The handler to set.
         */
        setHandler(handler: goog.net.BrowserChannel.Handler): void;
        
        /**
         * Returns whether the channel allows the use of a subdomain. There may be
         * cases where this isn't allowed.
         * @return {boolean} Whether a host prefix is allowed.
         */
        getAllowHostPrefix(): boolean;
        
        /**
         * Sets whether the channel allows the use of a subdomain. There may be cases
         * where this isn't allowed, for example, logging in with troutboard where
         * using a subdomain causes Apache to force the user to authenticate twice.
         * @param {boolean} allowHostPrefix Whether a host prefix is allowed.
         */
        setAllowHostPrefix(allowHostPrefix: boolean): void;
        
        /**
         * Returns whether the channel is buffered or not. This state is valid for
         * querying only after the test connection has completed. This may be
         * queried in the goog.net.BrowserChannel.okToMakeRequest() callback.
         * A channel may be buffered if the test connection determines that
         * a chunked response could not be sent down within a suitable time.
         * @return {boolean} Whether the channel is buffered.
         */
        isBuffered(): boolean;
        
        /**
         * Returns whether chunked mode is allowed. In certain debugging situations,
         * it's useful for the application to have a way to disable chunked mode for a
         * user.
        
         * @return {boolean} Whether chunked mode is allowed.
         */
        getAllowChunkedMode(): boolean;
        
        /**
         * Sets whether chunked mode is allowed. In certain debugging situations, it's
         * useful for the application to have a way to disable chunked mode for a user.
         * @param {boolean} allowChunkedMode  Whether chunked mode is allowed.
         */
        setAllowChunkedMode(allowChunkedMode: boolean): void;
        
        /**
         * Sends a request to the server. The format of the request is a Map data
         * structure of key/value pairs. These maps are then encoded in a format
         * suitable for the wire and then reconstituted as a Map data structure that
         * the server can process.
         * @param {Object|goog.structs.Map} map  The map to send.
         * @param {?Object=} opt_context The context associated with the map.
         */
        sendMap(map: Object|goog.structs.Map<any, any>, opt_context?: Object): void;
        
        /**
         * When set to true, this changes the behavior of the forward channel so it
         * will not retry requests; it will fail after one network failure, and if
         * there was already one network failure, the request will fail immediately.
         * @param {boolean} failFast  Whether or not to fail fast.
         */
        setFailFast(failFast: boolean): void;
        
        /**
         * @return {number} The max number of forward-channel retries, which will be 0
         * in fail-fast mode.
         */
        getForwardChannelMaxRetries(): number;
        
        /**
         * Sets the maximum number of attempts to connect to the server for forward
         * channel requests.
         * @param {number} retries The maximum number of attempts.
         */
        setForwardChannelMaxRetries(retries: number): void;
        
        /**
         * Sets the timeout for a forward channel request.
         * @param {number} timeoutMs The timeout in milliseconds.
         */
        setForwardChannelRequestTimeout(timeoutMs: number): void;
        
        /**
         * @return {number} The max number of back-channel retries, which is a constant.
         */
        getBackChannelMaxRetries(): number;
        
        /**
         * Returns whether the channel is closed
         * @return {boolean} true if the channel is closed.
         */
        isClosed(): boolean;
        
        /**
         * Returns the browser channel state.
         * @return {goog.net.BrowserChannel.State} The current state of the browser
         * channel.
         */
        getState(): goog.net.BrowserChannel.State;
        
        /**
         * Return the last status code received for a request.
         * @return {number} The last status code received for a request.
         */
        getLastStatusCode(): number;
        
        /**
         * @return {number} The last array id received.
         */
        getLastArrayId(): number;
        
        /**
         * Returns whether there are outstanding requests servicing the channel.
         * @return {boolean} true if there are outstanding requests.
         */
        hasOutstandingRequests(): boolean;
        
        /**
         * Sets a new parser for the response payload. A custom parser may be set to
         * avoid using eval(), for example. By default, the parser uses
         * {@code goog.json.unsafeParse}.
         * @param {!goog.string.Parser} parser Parser.
         */
        setParser(parser: goog.string$.Parser): void;
        
        /**
         * Callback from BrowserTestChannel for when the channel is finished.
         * @param {goog.net.BrowserTestChannel} testChannel The BrowserTestChannel.
         * @param {boolean} useChunked  Whether we can chunk responses.
         */
        testConnectionFinished(testChannel: goog.net.BrowserTestChannel, useChunked: boolean): void;
        
        /**
         * Callback from BrowserTestChannel for when the channel has an error.
         * @param {goog.net.BrowserTestChannel} testChannel The BrowserTestChannel.
         * @param {goog.net.ChannelRequest.Error} errorCode  The error code of the
               failure.
         */
        testConnectionFailure(testChannel: goog.net.BrowserTestChannel, errorCode: goog.net.ChannelRequest.Error): void;
        
        /**
         * Callback from BrowserTestChannel for when the channel is blocked.
         * @param {goog.net.BrowserTestChannel} testChannel The BrowserTestChannel.
         */
        testConnectionBlocked(testChannel: goog.net.BrowserTestChannel): void;
        
        /**
         * Callback from ChannelRequest for when new data is received
         * @param {goog.net.ChannelRequest} request  The request object.
         * @param {string} responseText The text of the response.
         */
        onRequestData(request: goog.net.ChannelRequest, responseText: string): void;
        
        /**
         * Decides which host prefix should be used, if any.  If there is a handler,
         * allows the handler to validate a host prefix provided by the server, and
         * optionally override it.
         * @param {?string} serverHostPrefix The host prefix provided by the server.
         * @return {?string} The host prefix to actually use, if any. Will return null
         *     if the use of host prefixes was disabled via setAllowHostPrefix().
         */
        correctHostPrefix(serverHostPrefix: string): string;
        
        /**
         * Callback from ChannelRequest that indicates a request has completed.
         * @param {goog.net.ChannelRequest} request  The request object.
         */
        onRequestComplete(request: goog.net.ChannelRequest): void;
        
        /**
         * @param {number} baseDelayMs The base part of the retry delay, in ms.
         * @param {number} delaySeedMs A random delay between 0 and this is added to
         *     the base part.
         */
        setRetryDelay(baseDelayMs: number, delaySeedMs: number): void;
        
        /**
         * Gets the Uri used for the connection that sends data to the server.
         * @param {string} path The path on the host.
         * @return {!goog.Uri} The forward channel URI.
         */
        getForwardChannelUri(path: string): goog.Uri;
        
        /**
         * Gets the results for the first browser channel test
         * @return {Array<string>} The results.
         */
        getFirstTestResults(): Array<string>;
        
        /**
         * Gets the results for the second browser channel test
         * @return {?boolean} The results. True -> buffered connection,
         *      False -> unbuffered, null -> unknown.
         */
        getSecondTestResults(): boolean;
        
        /**
         * Gets the Uri used for the connection that receives data from the server.
         * @param {?string} hostPrefix The host prefix.
         * @param {string} path The path on the host.
         * @return {!goog.Uri} The back channel URI.
         */
        getBackChannelUri(hostPrefix: string, path: string): goog.Uri;
        
        /**
         * Creates a data Uri applying logic for secondary hostprefix, port
         * overrides, and versioning.
         * @param {?string} hostPrefix The host prefix.
         * @param {string} path The path on the host (may be absolute or relative).
         * @param {number=} opt_overridePort Optional override port.
         * @return {!goog.Uri} The data URI.
         */
        createDataUri(hostPrefix: string, path: string, opt_overridePort?: number): goog.Uri;
        
        /**
         * Called when BC needs to create an XhrIo object.  Override in a subclass if
         * you need to customize the behavior, for example to enable the creation of
         * XHR's capable of calling a secondary domain. Will also allow calling
         * a secondary domain if withCredentials (CORS) is enabled.
         * @param {?string} hostPrefix The host prefix, if we need an XhrIo object
         *     capable of calling a secondary domain.
         * @return {!goog.net.XhrIo} A new XhrIo object.
         */
        createXhrIo(hostPrefix: string): goog.net.XhrIo;
        
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying. This call delegates to the handler.
         * @return {boolean} Whether the channel is currently active.
         */
        isActive(): boolean;
        
        /**
         * Wrapper around SafeTimeout which calls the start and end execution hooks
         * with a try...finally block.
         * @param {Function} fn The callback function.
         * @param {number} ms The time in MS for the timer.
         * @return {number} The ID of the timer.
         */
        static setTimeout(fn: Function, ms: number): number;
        
        /**
         * Helper function to call the start hook
         */
        static onStartExecution(): void;
        
        /**
         * Helper function to call the end hook
         */
        static onEndExecution(): void;
        
        /**
         * Returns the singleton event target for stat events.
         * @return {goog.events.EventTarget} The event target for stat events.
         */
        static getStatEventTarget(): goog.events.EventTarget;
        
        /**
         * Notify the channel that a particular fine grained network event has occurred.
         * Should be considered package-private.
         * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
         *     reachability event type.
         */
        notifyServerReachabilityEvent(reachabilityType: goog.net.BrowserChannel.ServerReachability): void;
        
        /**
         * Helper function to call the stat event callback.
         * @param {goog.net.BrowserChannel.Stat} stat The stat.
         */
        static notifyStatEvent(stat: goog.net.BrowserChannel.Stat): void;
        
        /**
         * Helper function to notify listeners about POST request performance.
         *
         * @param {number} size Number of characters in the POST data.
         * @param {number} rtt The amount of time from POST start to response.
         * @param {number} retries The number of times the POST had to be retried.
         */
        static notifyTimingEvent(size: number, rtt: number, retries: number): void;
        
        /**
         * Determines whether to use a secondary domain when the server gives us
         * a host prefix. This allows us to work around browser per-domain
         * connection limits.
         *
         * Currently, we  use secondary domains when using Trident's ActiveXObject,
         * because it supports cross-domain requests out of the box.  Note that in IE10
         * we no longer use ActiveX since it's not supported in Metro mode and IE10
         * supports XHR streaming.
         *
         * If you need to use secondary domains on other browsers and IE10,
         * you have two choices:
         *     1) If you only care about browsers that support CORS
         *        (https://developer.mozilla.org/en-US/docs/HTTP_access_control), you
         *        can use {@link #setSupportsCrossDomainXhrs} and set the appropriate
         *        CORS response headers on the server.
         *     2) Or, override this method in a subclass, and make sure that those
         *        browsers use some messaging mechanism that works cross-domain (e.g
         *        iframes and window.postMessage).
         *
         * @return {boolean} Whether to use secondary domains.
         * @see http://code.google.com/p/closure-library/issues/detail?id=339
         */
        shouldUseSecondaryDomains(): boolean;
    }
}

declare module goog.net.BrowserChannel {

    /**
     * Enum type for the browser channel state machine.
     * @enum {number}
     */
    type State = number;
    var State: {
        CLOSED: State;
        INIT: State;
        OPENING: State;
        OPENED: State;
    };

    /**
     * Enum type for identifying a BrowserChannel error.
     * @enum {number}
     */
    type Error = number;
    var Error: {
        OK: Error;
        REQUEST_FAILED: Error;
        LOGGED_OUT: Error;
        NO_DATA: Error;
        UNKNOWN_SESSION_ID: Error;
        STOP: Error;
        NETWORK: Error;
        BLOCKED: Error;
        BAD_DATA: Error;
        BAD_RESPONSE: Error;
        ACTIVE_X_BLOCKED: Error;
    };

    /**
     * Internal enum type for the two browser channel channel types.
     * @enum {number}
     * @private
     */
    type ChannelType_ = number;
    var ChannelType_: {
        FORWARD_CHANNEL: ChannelType_;
        BACK_CHANNEL: ChannelType_;
    };

    /**
     * Events fired by BrowserChannel and associated objects
     * @enum {string}
     */
    type Event = string;
    var Event: {
        STAT_EVENT: Event;
        TIMING_EVENT: Event;
        SERVER_REACHABILITY_EVENT: Event;
    };

    /**
     * Types of events which reveal information about the reachability of the
     * server.
     * @enum {number}
     */
    type ServerReachability = number;
    var ServerReachability: {
        REQUEST_MADE: ServerReachability;
        REQUEST_SUCCEEDED: ServerReachability;
        REQUEST_FAILED: ServerReachability;
        BACK_CHANNEL_ACTIVITY: ServerReachability;
    };

    /**
     * Enum that identifies events for statistics that are interesting to track.
     * TODO(user) - Change name not to use Event or use EventTarget
     * @enum {number}
     */
    type Stat = number;
    var Stat: {
        CONNECT_ATTEMPT: Stat;
        ERROR_NETWORK: Stat;
        ERROR_OTHER: Stat;
        TEST_STAGE_ONE_START: Stat;
        CHANNEL_BLOCKED: Stat;
        TEST_STAGE_TWO_START: Stat;
        TEST_STAGE_TWO_DATA_ONE: Stat;
        TEST_STAGE_TWO_DATA_TWO: Stat;
        TEST_STAGE_TWO_DATA_BOTH: Stat;
        TEST_STAGE_ONE_FAILED: Stat;
        TEST_STAGE_TWO_FAILED: Stat;
        PROXY: Stat;
        NOPROXY: Stat;
        REQUEST_UNKNOWN_SESSION_ID: Stat;
        REQUEST_BAD_STATUS: Stat;
        REQUEST_INCOMPLETE_DATA: Stat;
        REQUEST_BAD_DATA: Stat;
        REQUEST_NO_DATA: Stat;
        REQUEST_TIMEOUT: Stat;
        BACKCHANNEL_MISSING: Stat;
        BACKCHANNEL_DEAD: Stat;
        BROWSER_OFFLINE: Stat;
        ACTIVE_X_BLOCKED: Stat;
    };

    /**
     * Simple container class for a (mapId, map) pair.
     * @param {number} mapId The id for this map.
     * @param {Object|goog.structs.Map} map The map itself.
     * @param {Object=} opt_context The context associated with the map.
     * @constructor
     * @final
     */
    class QueuedMap {
        constructor(mapId: number, map: Object|goog.structs.Map<any, any>, opt_context?: Object);
    }

    /**
     * Event class for goog.net.BrowserChannel.Event.STAT_EVENT
     *
     * @param {goog.events.EventTarget} eventTarget The stat event target for
           the browser channel.
     * @param {goog.net.BrowserChannel.Stat} stat The stat.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class StatEvent extends goog.events.Event {
        constructor(eventTarget: goog.events.EventTarget, stat: goog.net.BrowserChannel.Stat);
    }

    /**
     * Event class for goog.net.BrowserChannel.Event.TIMING_EVENT
     *
     * @param {goog.events.EventTarget} target The stat event target for
           the browser channel.
     * @param {number} size The number of characters in the POST data.
     * @param {number} rtt The total round trip time from POST to response in MS.
     * @param {number} retries The number of times the POST had to be retried.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class TimingEvent extends goog.events.Event {
        constructor(target: goog.events.EventTarget, size: number, rtt: number, retries: number);
    }

    /**
     * Event class for goog.net.BrowserChannel.Event.SERVER_REACHABILITY_EVENT.
     *
     * @param {goog.events.EventTarget} target The stat event target for
           the browser channel.
     * @param {goog.net.BrowserChannel.ServerReachability} reachabilityType The
     *     reachability event type.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ServerReachabilityEvent extends goog.events.Event {
        constructor(target: goog.events.EventTarget, reachabilityType: goog.net.BrowserChannel.ServerReachability);
    }

    /**
     * Abstract base class for the browser channel handler
     * @constructor
     */
    class Handler {
        constructor();
        
        /**
         * Callback handler for when a batch of response arrays is received from the
         * server.
         * @type {?function(!goog.net.BrowserChannel, !Array<!Array<?>>)}
         */
        channelHandleMultipleArrays: (arg0: goog.net.BrowserChannel, arg1: Array<Array<any>>) => any;
        
        /**
         * Whether it's okay to make a request to the server. A handler can return
         * false if the channel should fail. For example, if the user has logged out,
         * the handler may want all requests to fail immediately.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {goog.net.BrowserChannel.Error} An error code. The code should
         * return goog.net.BrowserChannel.Error.OK to indicate it's okay. Any other
         * error code will cause a failure.
         */
        okToMakeRequest(browserChannel: goog.net.BrowserChannel): goog.net.BrowserChannel.Error;
        
        /**
         * Indicates the BrowserChannel has successfully negotiated with the server
         * and can now send and receive data.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         */
        channelOpened(browserChannel: goog.net.BrowserChannel): void;
        
        /**
         * New input is available for the application to process.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Array<?>} array The data array.
         */
        channelHandleArray(browserChannel: goog.net.BrowserChannel, array: Array<any>): void;
        
        /**
         * Indicates maps were successfully sent on the BrowserChannel.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Array<goog.net.BrowserChannel.QueuedMap>} deliveredMaps The
         *     array of maps that have been delivered to the server. This is a direct
         *     reference to the internal BrowserChannel array, so a copy should be made
         *     if the caller desires a reference to the data.
         */
        channelSuccess(browserChannel: goog.net.BrowserChannel, deliveredMaps: Array<goog.net.BrowserChannel.QueuedMap>): void;
        
        /**
         * Indicates an error occurred on the BrowserChannel.
         *
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {goog.net.BrowserChannel.Error} error The error code.
         */
        channelError(browserChannel: goog.net.BrowserChannel, error: goog.net.BrowserChannel.Error): void;
        
        /**
         * Indicates the BrowserChannel is closed. Also notifies about which maps,
         * if any, that may not have been delivered to the server.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Array<goog.net.BrowserChannel.QueuedMap>=} opt_pendingMaps The
         *     array of pending maps, which may or may not have been delivered to the
         *     server.
         * @param {Array<goog.net.BrowserChannel.QueuedMap>=} opt_undeliveredMaps
         *     The array of undelivered maps, which have definitely not been delivered
         *     to the server.
         */
        channelClosed(browserChannel: goog.net.BrowserChannel, opt_pendingMaps?: Array<goog.net.BrowserChannel.QueuedMap>, opt_undeliveredMaps?: Array<goog.net.BrowserChannel.QueuedMap>): void;
        
        /**
         * Gets any parameters that should be added at the time another connection is
         * made to the server.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {Object} Extra parameter keys and values to add to the
         *                  requests.
         */
        getAdditionalParams(browserChannel: goog.net.BrowserChannel): Object;
        
        /**
         * Gets the URI of an image that can be used to test network connectivity.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {goog.Uri?} A custom URI to load for the network test.
         */
        getNetworkTestImageUri(browserChannel: goog.net.BrowserChannel): goog.Uri;
        
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @return {boolean} Whether the channel is currently active.
         */
        isActive(browserChannel: goog.net.BrowserChannel): boolean;
        
        /**
         * Called by the channel if enumeration of the map throws an exception.
         * @param {goog.net.BrowserChannel} browserChannel The browser channel.
         * @param {Object} map The map that can't be enumerated.
         */
        badMapError(browserChannel: goog.net.BrowserChannel, map: Object): void;
        
        /**
         * Allows the handler to override a host prefix provided by the server.  Will
         * be called whenever the channel has received such a prefix and is considering
         * its use.
         * @param {?string} serverHostPrefix The host prefix provided by the server.
         * @return {?string} The host prefix the client should use.
         */
        correctHostPrefix(serverHostPrefix: string): string;
    }
}

declare module goog.net.BrowserChannel.LogSaver {

    /**
     * Returns whether the LogSaver is enabled.
     * @return {boolean} Whether saving is enabled or disabled.
     */
    function isEnabled(): boolean;

    /**
     * Enables of disables the LogSaver.
     * @param {boolean} enable Whether to enable or disable saving.
     */
    function setEnabled(enable: boolean): void;

    /**
     * Adds a log record.
     * @param {goog.log.LogRecord} logRecord the LogRecord.
     */
    function addLogRecord(logRecord: goog.log.LogRecord): void;

    /**
     * Returns the log as a single string.
     * @return {string} The log as a single string.
     */
    function getBuffer(): string;

    /**
     * Clears the buffer
     */
    function clearBuffer(): void;
}
