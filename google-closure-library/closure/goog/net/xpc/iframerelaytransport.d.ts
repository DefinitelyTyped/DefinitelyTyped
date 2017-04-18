declare module goog {
    function require(name: 'goog.net.xpc.IframeRelayTransport'): typeof goog.net.xpc.IframeRelayTransport;
}

declare module goog.net.xpc {

    /**
     * Iframe relay transport. Creates hidden iframes containing a document
     * from the peer's origin. Data is transferred in the fragment identifier.
     * Therefore the document loaded in the iframes can be served from the
     * browser's cache.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class IframeRelayTransport extends goog.net.xpc.Transport {
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The transport type.
         * @type {number}
         * @override
         */
        transportType: number;
        
        /**
         * Handles transport service messages (internal signalling).
         * @param {string} payload The message content.
         * @override
         */
        transportServiceHandler(payload: string): void;
        
        /**
         * Sends a message.
         *
         * @param {string} service Name of service this the message has to be delivered.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    }
}

declare module goog.net.xpc.IframeRelayTransport {

    /**
     * @typedef {{fragments: !Array<string>, received: number, expected: number}}
     */
    type FragmentInfo = {fragments: Array<string>; received: number; expected: number};
}
