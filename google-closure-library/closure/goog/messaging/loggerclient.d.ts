declare module goog {
    function require(name: 'goog.messaging.LoggerClient'): typeof goog.messaging.LoggerClient;
}

declare module goog.messaging {

    /**
     * Creates a logger client that sends messages along a message channel for the
     * remote end to log. The remote end of the channel should use a
     * {goog.messaging.LoggerServer} with the same service name.
     *
     * @param {!goog.messaging.MessageChannel} channel The channel that on which to
     *     send the log messages.
     * @param {string} serviceName The name of the logging service to use.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class LoggerClient extends goog.Disposable {
        constructor(channel: goog.messaging.MessageChannel, serviceName: string);
    }
}
