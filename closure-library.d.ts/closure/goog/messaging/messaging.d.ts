declare module goog {
    function require(name: 'goog.messaging'): typeof goog.messaging;
}

declare module goog.messaging {

    /**
     * Creates a bidirectional pipe between two message channels.
     *
     * @param {goog.messaging.MessageChannel} channel1 The first channel.
     * @param {goog.messaging.MessageChannel} channel2 The second channel.
     */
    function pipe(channel1: goog.messaging.MessageChannel, channel2: goog.messaging.MessageChannel): void;
}
