declare module goog {
    function require(name: 'goog.labs.net.webChannel.BaseTestChannel'): typeof goog.labs.net.webChannel.BaseTestChannel;
}

declare module goog.labs.net.webChannel {

    /**
     * A TestChannel is used during the first part of channel negotiation
     * with the server to create the channel. It helps us determine whether we're
     * behind a buffering proxy.
     *
     * @constructor
     * @struct
     * @param {!goog.labs.net.webChannel.Channel} channel The channel
     *     that owns this test channel.
     * @param {!goog.labs.net.webChannel.WebChannelDebug} channelDebug A
     *     WebChannelDebug instance to use for logging.
     * @implements {goog.labs.net.webChannel.Channel}
     */
    class BaseTestChannel {
        constructor(channel: goog.labs.net.webChannel.Channel, channelDebug: goog.labs.net.webChannel.WebChannelDebug);
    }
}
