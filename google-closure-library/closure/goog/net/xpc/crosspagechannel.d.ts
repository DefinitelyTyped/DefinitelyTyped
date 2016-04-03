declare module goog {
    function require(name: 'goog.net.xpc.CrossPageChannel'): typeof goog.net.xpc.CrossPageChannel;
}

declare module goog.net.xpc {

    /**
     * A communication channel between two documents from different domains.
     * Provides asynchronous messaging.
     *
     * @param {Object} cfg Channel configuration object.
     * @param {goog.dom.DomHelper=} opt_domHelper The optional dom helper to
     *     use for looking up elements in the dom.
     * @constructor
     * @extends {goog.messaging.AbstractChannel}
     */
    class CrossPageChannel extends goog.messaging.AbstractChannel {
        constructor(cfg: Object, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * @override
         * @return {boolean} Whether the channel is connected.
         */
        isConnected(): boolean;
        
        /**
         * Returns the configuration object for this channel.
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @return {Object} The configuration object for this channel.
         */
        getConfig(): Object;
        
        /**
         * Returns a reference to the iframe-element.
         * Package private. Do not call from outside goog.net.xpc.
         *
         * @return {Object} A reference to the iframe-element.
         */
        getIframeElement(): Object;
        
        /**
         * Sets the window object the foreign document resides in.
         *
         * @param {Object} peerWindowObject The window object of the peer.
         */
        setPeerWindowObject(peerWindowObject: Object): void;
        
        /**
         * Returns the window object the foreign document resides in.
         *
         * @return {Object} The window object of the peer.
         * @package
         */
        getPeerWindowObject(): Object;
        
        /**
         * Determines whether the peer window is available (e.g. not closed).
         *
         * @return {boolean} Whether the peer window is available.
         * @package
         */
        isPeerAvailable(): boolean;
        
        /**
         * Returns the transport type in use for this channel.
         * @return {number} Transport-type identifier.
         */
        getTransportType(): number;
        
        /**
         * Returns the tranport name in use for this channel.
         * @return {string} The transport name.
         */
        getTransportName(): string;
        
        /**
         * @return {!Object} Configuration-object to be used by the peer to
         *     initialize the channel.
         */
        getPeerConfiguration(): Object;
        
        /**
         * Creates the iframe containing the peer page in a specified parent element.
         * This method does not connect the channel, connect() still has to be called
         * separately.
         *
         * @param {!Element} parentElm The container element the iframe is appended to.
         * @param {Function=} opt_configureIframeCb If present, this function gets
         *     called with the iframe element as parameter to allow setting properties
         *     on it before it gets added to the DOM. If absent, the iframe's width and
         *     height are set to '100%'.
         * @param {boolean=} opt_addCfgParam Whether to add the peer configuration as
         *     URL parameter (default: true).
         * @return {!HTMLIFrameElement} The iframe element.
         */
        createPeerIframe(parentElm: Element, opt_configureIframeCb?: Function, opt_addCfgParam?: boolean): HTMLIFrameElement;
        
        /**
         * Returns the peer URI, with an optional URL parameter for configuring the peer
         * window.
         *
         * @param {boolean=} opt_addCfgParam Whether to add the peer configuration as
         *     URL parameter (default: true).
         * @return {!goog.Uri} The peer URI.
         */
        getPeerUri(opt_addCfgParam?: boolean): goog.Uri;
        
        /**
         * Initiates connecting the channel. When this method is called, all the
         * information needed to connect the channel has to be available.
         *
         * @override
         * @param {Function=} opt_connectCb The function to be called when the
         * channel has been connected and is ready to be used.
         */
        connect(opt_connectCb?: Function): void;
        
        /**
         * Closes the channel.
         */
        close(): void;
        
        /**
         * Package-private.
         * Called by the transport when the channel is connected.
         * @param {number=} opt_delay Delay this number of milliseconds before calling
         *     the connection callback. Usage is discouraged, but can be used to paper
         *     over timing vulnerabilities when there is no alternative.
         */
        notifyConnected(opt_delay?: number): void;
        
        /**
         * Called by the transport in case of an unrecoverable failure.
         * Package private. Do not call from outside goog.net.xpc.
         */
        notifyTransportError(): void;
        
        /**
         * Delivers messages to the appropriate service-handler. Named xpcDeliver to
         * avoid name conflict with {@code deliver} function in superclass
         * goog.messaging.AbstractChannel.
         *
         * @param {string} serviceName The name of the port.
         * @param {string} payload The payload.
         * @param {string=} opt_origin An optional origin for the message, where the
         *     underlying transport makes that available.  If this is specified, and
         *     the PEER_HOSTNAME parameter was provided, they must match or the message
         *     will be rejected.
         * @package
         */
        xpcDeliver(serviceName: string, payload: string, opt_origin?: string): void;
        
        /**
         * Returns the role of this channel (either inner or outer).
         * @return {number} The role of this channel.
         */
        getRole(): number;
        
        /**
         * Sets the channel name. Note, this doesn't establish a unique channel to
         * communicate on.
         * @param {string} name The new channel name.
         */
        updateChannelNameAndCatalog(name: string): void;
    }
}
