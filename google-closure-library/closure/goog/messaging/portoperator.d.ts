declare module goog {
    function require(name: 'goog.messaging.PortOperator'): typeof goog.messaging.PortOperator;
}

declare module goog.messaging {

    /**
     * The central node of a PortNetwork.
     *
     * @param {string} name The name of this node.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class PortOperator extends goog.Disposable {
        constructor(name: string);
        
        /**
         * Adds a caller to the network with the given name. This port should have no
         * services registered on it. It will be disposed along with the PortOperator.
         *
         * @param {string} name The name of the port to add.
         * @param {!goog.messaging.MessageChannel} port The port to add. Must be either
         *     a {@link goog.messaging.PortChannel} or a decorator wrapping a
         *     PortChannel; in particular, it must be able to send and receive
         *     {@link MessagePort}s.
         */
        addPort(name: string, port: goog.messaging.MessageChannel): void;
    }
}
