declare module goog {
    function require(name: 'goog.net.xpc.NativeMessagingTransport'): typeof goog.net.xpc.NativeMessagingTransport;
}

declare module goog.net.xpc {

    /**
     * The native messaging transport
     *
     * Uses document.postMessage() to send messages to other documents.
     * Receiving is done by listening on 'message'-events on the document.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {string} peerHostname The hostname (protocol, domain, and port) of the
     *     peer.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
     *     finding the correct window/document.
     * @param {boolean=} opt_oneSidedHandshake If this is true, only the outer
     *     transport sends a SETUP message and expects a SETUP_ACK.  The inner
     *     transport goes connected when it receives the SETUP.
     * @param {number=} opt_protocolVersion Which version of its setup protocol the
     *     transport should use.  The default is '2'.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class NativeMessagingTransport extends goog.net.xpc.Transport {
        constructor(channel: goog.net.xpc.CrossPageChannel, peerHostname: string, opt_domHelper?: goog.dom.DomHelper, opt_oneSidedHandshake?: boolean, opt_protocolVersion?: number);
        
        /**
         * The transport type.
         * @type {number}
         * @override
         */
        transportType: number;
        
        /**
         * Handles transport service messages.
         * @param {string} payload The message content.
         * @override
         */
        transportServiceHandler(payload: string): void;
        
        /**
         * Sends a message.
         * @param {string} service The name off the service the message is to be
         * delivered to.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    }
}
