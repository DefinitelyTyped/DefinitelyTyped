declare module goog {
    function require(name: 'goog.messaging.BufferedChannel'): typeof goog.messaging.BufferedChannel;
}

declare module goog.messaging {

    /**
     * Creates a new BufferedChannel, which operates like its underlying channel
     * except that it buffers calls to send until it receives a message from its
     * peer claiming that the peer is ready to receive.  The peer is also expected
     * to be a BufferedChannel, though this is not enforced.
     *
     * @param {!goog.messaging.MessageChannel} messageChannel The MessageChannel
     *     we're wrapping.
     * @param {number=} opt_interval Polling interval for sending ready
     *     notifications to peer, in ms.  Default is 50.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel};
     * @final
     */
    class BufferedChannel extends goog.Disposable {
        constructor(messageChannel: goog.messaging.MessageChannel, opt_interval?: number);
        
        /**
         * @return {boolean} Whether the channel's peer is ready.
         */
        isPeerReady(): boolean;
        
        /**
         * Send a message over the channel.  If the peer is not ready, the message will
         * be buffered and sent once we've received a ready message from our peer.
         *
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to JSON before sending.  It's the responsibility
         *     of implementors of this class to perform the serialization.
         * @see goog.net.xpc.BufferedChannel.send
         * @override
         */
        send(serviceName: string, payload: string|Object): void;
    }
}
