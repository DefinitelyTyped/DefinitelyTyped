declare module goog {
    function require(name: 'goog.messaging.MultiChannel'): typeof goog.messaging.MultiChannel;
    function require(name: 'goog.messaging.MultiChannel.VirtualChannel'): typeof goog.messaging.MultiChannel.VirtualChannel;
}

declare module goog.messaging {

    /**
     * Creates a new MultiChannel wrapping a single MessageChannel. The
     * underlying channel shouldn't have any other listeners registered, but it
     * should be connected.
     *
     * Note that the other side of the channel should also be connected to a
     * MultiChannel with the same number of virtual channels.
     *
     * @param {goog.messaging.MessageChannel} underlyingChannel The underlying
     *     channel to use as transport for the virtual channels.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class MultiChannel extends goog.Disposable {
        constructor(underlyingChannel: goog.messaging.MessageChannel);
        
        /**
         * Creates a new virtual channel that will communicate across the underlying
         * channel.
         * @param {string} name The name of the virtual channel. Must be unique for this
         *     MultiChannel. Cannot contain colons.
         * @return {!goog.messaging.MultiChannel.VirtualChannel} The new virtual
         *     channel.
         */
        createVirtualChannel(name: string): goog.messaging.MultiChannel.VirtualChannel;
    }
}

declare module goog.messaging.MultiChannel {

    /**
     * A message channel that proxies its messages over another underlying channel.
     *
     * @param {goog.messaging.MultiChannel} parent The MultiChannel
     *     which created this channel, and which contains the underlying
     *     MessageChannel that's used as the transport.
     * @param {string} name The name of this virtual channel. Unique among the
     *     virtual channels in parent.
     * @constructor
     * @implements {goog.messaging.MessageChannel}
     * @extends {goog.Disposable}
     * @final
     */
    class VirtualChannel extends goog.Disposable {
        constructor(parent: goog.messaging.MultiChannel, name: string);
    }
}
