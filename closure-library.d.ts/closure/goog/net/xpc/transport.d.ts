declare module goog {
    function require(name: 'goog.net.xpc.Transport'): typeof goog.net.xpc.Transport;
}

declare module goog.net.xpc {

    /**
     * The base class for transports.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
     *     finding the window objects.
     * @constructor
     * @extends {goog.Disposable};
     */
    class Transport {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The transport type.
         * @type {number}
         * @protected
         */
        transportType: number;
        
        /**
         * @return {number} The transport type identifier.
         */
        getType(): number;
        
        /**
         * Returns the window associated with this transport instance.
         * @return {!Window} The window to use.
         */
        getWindow(): Window;
        
        /**
         * Return the transport name.
         * @return {string} the transport name.
         */
        getName(): string;
        
        /**
         * Handles transport service messages (internal signalling).
         * @param {string} payload The message content.
         */
        transportServiceHandler(payload: string): void;
        
        /**
         * Connects this transport.
         * The transport implementation is expected to call
         * CrossPageChannel.prototype.notifyConnected when the channel is ready
         * to be used.
         */
        connect(): void;
        
        /**
         * Sends a message.
         * @param {string} service The name off the service the message is to be
         * delivered to.
         * @param {string} payload The message content.
         */
        send(service: string, payload: string): void;
    }
}
