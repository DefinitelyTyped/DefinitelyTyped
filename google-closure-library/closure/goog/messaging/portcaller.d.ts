declare module goog {
    function require(name: 'goog.messaging.PortCaller'): typeof goog.messaging.PortCaller;
}

declare module goog.messaging {

    /**
     * The leaf node of a network.
     *
     * @param {!goog.messaging.MessageChannel} operatorPort The channel for
     *     communicating with the operator. The other side of this channel should be
     *     passed to {@link goog.messaging.PortOperator#addPort}. Must be either a
     *     {@link goog.messaging.PortChannel} or a decorator wrapping a PortChannel;
     *     in particular, it must be able to send and receive {@link MessagePort}s.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class PortCaller extends goog.Disposable {
        constructor(operatorPort: goog.messaging.MessageChannel);
    }
}
