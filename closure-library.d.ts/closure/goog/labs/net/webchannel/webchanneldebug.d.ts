declare module goog {
    function require(name: 'goog.labs.net.webChannel.WebChannelDebug'): typeof goog.labs.net.webChannel.WebChannelDebug;
}

declare module goog.labs.net.webChannel {

    /**
     * Logs and keeps a buffer of debugging info for the Channel.
     *
     * @constructor
     * @struct
     * @final
     */
    class WebChannelDebug {
        constructor();
    }
}
