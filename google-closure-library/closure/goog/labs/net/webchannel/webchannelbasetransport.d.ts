declare module goog {
    function require(name: 'goog.labs.net.webChannel.WebChannelBaseTransport'): typeof goog.labs.net.webChannel.WebChannelBaseTransport;
}

declare module goog.labs.net.webChannel {

    /**
     * Implementation of {@link goog.net.WebChannelTransport} with
     * {@link goog.labs.net.webChannel.WebChannelBase} as the underlying channel
     * implementation.
     *
     * @constructor
     * @struct
     * @implements {goog.net.WebChannelTransport}
     * @final
     */
    class WebChannelBaseTransport {
        constructor();
    }
}
