declare module goog {
    function require(name: 'goog.messaging.LoggerServer'): typeof goog.messaging.LoggerServer;
}

declare module goog.messaging {

    /**
     * Creates a logger server that logs messages on behalf of the remote end of a
     * message channel. The remote end of the channel should use a
     * {goog.messaging.LoggerClient} with the same service name.
     *
     * @param {!goog.messaging.MessageChannel} channel The channel that is sending
     *     the log messages.
     * @param {string} serviceName The name of the logging service to listen for.
     * @param {string=} opt_channelName The name of this channel. Used to help
     *     distinguish this client's messages.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class LoggerServer extends goog.Disposable {
        constructor(channel: goog.messaging.MessageChannel, serviceName: string, opt_channelName?: string);
    }
}
