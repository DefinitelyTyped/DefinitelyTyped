declare module goog {
    function require(name: 'goog.net.xpc.IframePollingTransport'): typeof goog.net.xpc.IframePollingTransport;
    function require(name: 'goog.net.xpc.IframePollingTransport.Sender'): typeof goog.net.xpc.IframePollingTransport.Sender;
    function require(name: 'goog.net.xpc.IframePollingTransport.Receiver'): typeof goog.net.xpc.IframePollingTransport.Receiver;
}

declare module goog.net.xpc {

    /**
     * Iframe polling transport. Uses hidden iframes to transfer data
     * in the fragment identifier of the URL. The peer polls the iframe's location
     * for changes.
     * Unfortunately, in Safari this screws up the history, because Safari doesn't
     * allow to call location.replace() on a window containing a document from a
     * different domain (last version tested: 2.0.4).
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    class IframePollingTransport extends goog.net.xpc.Transport {
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The transport type.
         * @type {number}
         * @protected
         * @override
         */
        transportType: number;
        
        /**
         * The string used to prefix all iframe names and IDs.
         * @type {string}
         */
        static IFRAME_PREFIX: string;
        
        /**
         * Determines whether the channel is still available. The channel is
         * unavailable if the transport was disposed or the peer is no longer
         * available.
         * @return {boolean} Whether the channel is available.
         */
        isChannelAvailable(): boolean;
        
        /**
         * Processes an incoming message.
         * @param {string} raw The complete received string.
         */
        processIncomingMsg(raw: string): void;
        
        /**
         * Process an incoming acknowdedgement.
         * @param {string} msgStr The incoming ack string to process.
         */
        processIncomingAck(msgStr: string): void;
        
        /**
         * Sends a message. Splits it in multiple frames if too long (exceeds IE's
         * URL-length maximum.
         * Wireformat: <seq>[,<frame_no>/<#frames>]|<frame_content>
         *
         * @param {string} service Name of service this the message has to be delivered.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
    }
}

declare module goog.net.xpc.IframePollingTransport {

    /**
     * goog.net.xpc.IframePollingTransport.Sender
     *
     * Utility class to send message-parts to a document from a different origin.
     *
     * @constructor
     * @param {string} url The url the other document will use for polling.
     * @param {Object} windowObj The frame used for sending information to.
     * @final
     */
    class Sender {
        constructor(url: string, windowObj: Object);
        
        /**
         * Sends a message-part (frame) to the peer.
         * The message-part is encoded and put in the fragment identifier
         * of the URL used for sending (and belongs to the origin/domain of the peer).
         * @param {string} payload The message to send.
         */
        send(payload: string): void;
    }

    /**
     * goog.net.xpc.IframePollingTransport.Receiver
     *
     * @constructor
     * @param {goog.net.xpc.IframePollingTransport} transport The transport to
     *     receive from.
     * @param {Object} windowObj The window-object to poll for location-changes.
     * @param {Function} callback The callback-function to be called when
     *     location has changed.
     * @final
     */
    class Receiver {
        constructor(transport: goog.net.xpc.IframePollingTransport, windowObj: Object, callback: Function);
        
        /**
         * Polls the location of the receiver-frame for changes.
         * @return {boolean} Whether a change has been detected.
         */
        receive(): boolean;
    }
}
