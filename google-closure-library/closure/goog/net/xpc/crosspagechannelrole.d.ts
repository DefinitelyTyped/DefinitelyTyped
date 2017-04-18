declare module goog {
    function require(name: 'goog.net.xpc.CrossPageChannelRole'): typeof goog.net.xpc.CrossPageChannelRole;
}

declare module goog.net.xpc {

    /**
     * The role of the peer.
     * @enum {number}
     */
    type CrossPageChannelRole = number;
    var CrossPageChannelRole: {
        OUTER: CrossPageChannelRole;
        INNER: CrossPageChannelRole;
    };
}
