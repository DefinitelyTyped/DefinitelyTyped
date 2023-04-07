/**
 * The `diagnostics_channel` module provides an API to create named channels
 * to report arbitrary message data for diagnostics purposes.
 *
 * It can be accessed using:
 *
 * ```js
 * import diagnostics_channel from 'diagnostics_channel';
 * ```
 *
 * It is intended that a module writer wanting to report diagnostics messages
 * will create one or many top-level channels to report messages through.
 * Channels may also be acquired at runtime but it is not encouraged
 * due to the additional overhead of doing so. Channels may be exported for
 * convenience, but as long as the name is known it can be acquired anywhere.
 *
 * If you intend for your module to produce diagnostics data for others to
 * consume it is recommended that you include documentation of what named
 * channels are used along with the shape of the message data. Channel names
 * should generally include the module name to avoid collisions with data from
 * other modules.
 * @experimental
 * @see [source](https://github.com/nodejs/node/blob/v16.19.1/lib/diagnostics_channel.js)
 */
declare module 'diagnostics_channel' {
    /**
     * Check if there are active subscribers to the named channel. This is helpful if
     * the message you want to send might be expensive to prepare.
     *
     * This API is optional but helpful when trying to publish messages from very
     * performance-sensitive code.
     *
     * ```js
     * import diagnostics_channel from 'diagnostics_channel';
     *
     * if (diagnostics_channel.hasSubscribers('my-channel')) {
     *   // There are subscribers, prepare and publish message
     * }
     * ```
     * @since v15.1.0, v14.17.0
     * @param name The channel name
     * @return If there are active subscribers
     */
    function hasSubscribers(name: string | symbol): boolean;
    /**
     * This is the primary entry-point for anyone wanting to interact with a named
     * channel. It produces a channel object which is optimized to reduce overhead at
     * publish time as much as possible.
     *
     * ```js
     * import diagnostics_channel from 'diagnostics_channel';
     *
     * const channel = diagnostics_channel.channel('my-channel');
     * ```
     * @since v15.1.0, v14.17.0
     * @param name The channel name
     * @return The named channel object
     */
    function channel(name: string | symbol): Channel;
    /**
     * Register a message handler to subscribe to this channel. This message handler will be run synchronously
     * whenever a message is published to the channel. Any errors thrown in the message handler will
     * trigger an 'uncaughtException'.
     *
     * ```js
     * import diagnostics_channel from 'diagnostics_channel';
     *
     * diagnostics_channel.subscribe('my-channel', (message, name) => {
     *   // Received data
     * });
     * ```
     *
     * @since v18.7.0, v16.17.0
     * @param name The channel name
     * @param onMessage The handler to receive channel messages
     */
    function subscribe(name: string | symbol, onMessage: ChannelListener): void;
    /**
     * Remove a message handler previously registered to this channel with diagnostics_channel.subscribe(name, onMessage).
     *
     * ```js
     * import diagnostics_channel from 'diagnostics_channel';
     *
     * function onMessage(message, name) {
     *  // Received data
     * }
     *
     * diagnostics_channel.subscribe('my-channel', onMessage);
     *
     * diagnostics_channel.unsubscribe('my-channel', onMessage);
     * ```
     *
     * @since v18.7.0, v16.17.0
     * @param name The channel name
     * @param onMessage The previous subscribed handler to remove
     * @returns `true` if the handler was found, `false` otherwise
     */
    function unsubscribe(name: string | symbol, onMessage: ChannelListener): boolean;
    type ChannelListener = (message: unknown, name: string | symbol) => void;
    /**
     * The class `Channel` represents an individual named channel within the data
     * pipeline. It is use to track subscribers and to publish messages when there
     * are subscribers present. It exists as a separate object to avoid channel
     * lookups at publish time, enabling very fast publish speeds and allowing
     * for heavy use while incurring very minimal cost. Channels are created with {@link channel}, constructing a channel directly
     * with `new Channel(name)` is not supported.
     * @since v15.1.0, v14.17.0
     */
    class Channel {
        readonly name: string | symbol;
        /**
         * Check if there are active subscribers to this channel. This is helpful if
         * the message you want to send might be expensive to prepare.
         *
         * This API is optional but helpful when trying to publish messages from very
         * performance-sensitive code.
         *
         * ```js
         * import diagnostics_channel from 'diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * if (channel.hasSubscribers) {
         *   // There are subscribers, prepare and publish message
         * }
         * ```
         * @since v15.1.0, v14.17.0
         */
        readonly hasSubscribers: boolean;
        private constructor(name: string | symbol);
        /**
         * Publish a message to any subscribers to the channel. This will
         * trigger message handlers synchronously so they will execute within
         * the same context.
         *
         * ```js
         * import diagnostics_channel from 'diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.publish({
         *   some: 'message'
         * });
         * ```
         * @since v15.1.0, v14.17.0
         * @param message The message to send to the channel subscribers
         */
        publish(message: unknown): void;
        /**
         * Register a message handler to subscribe to this channel. This message handler
         * will be run synchronously whenever a message is published to the channel. Any
         * errors thrown in the message handler will trigger an `'uncaughtException'`.
         *
         * ```js
         * import diagnostics_channel from 'diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * channel.subscribe((message, name) => {
         *   // Received data
         * });
         * ```
         * @since v15.1.0, v14.17.0
         * @param onMessage The handler to receive channel messages
         */
        subscribe(onMessage: ChannelListener): void;
        /**
         * Remove a message handler previously registered to this channel with `channel.subscribe(onMessage)`.
         *
         * ```js
         * import diagnostics_channel from 'diagnostics_channel';
         *
         * const channel = diagnostics_channel.channel('my-channel');
         *
         * function onMessage(message, name) {
         *   // Received data
         * }
         *
         * channel.subscribe(onMessage);
         *
         * channel.unsubscribe(onMessage);
         * ```
         * @since v15.1.0, v14.17.0
         * @param onMessage The previous subscribed handler to remove
         */
        unsubscribe(onMessage: ChannelListener): void;
    }
}
declare module 'node:diagnostics_channel' {
    export * from 'diagnostics_channel';
}
