declare module goog {
    function require(name: 'goog.net.xpc.FrameElementMethodTransport'): typeof goog.net.xpc.FrameElementMethodTransport;
}

declare module goog.net.xpc {

    /**
     * Frame-element method transport.
     *
     * Firefox allows a document within an iframe to call methods on the
     * iframe-element added by the containing document.
     * NOTE(user): Tested in all FF versions starting from 1.0
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this transport
     *     belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class FrameElementMethodTransport extends goog.net.xpc.Transport {
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The transport type.
         * @type {number}
         * @protected
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
         * Send a message
         * @param {string} service The name off the service the message is to be
         * delivered to.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    }
}
