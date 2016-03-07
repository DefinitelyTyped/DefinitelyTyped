declare module goog.messaging {

    /**
     * @interface
     */
    interface MessageChannel {
        
        /**
         * Initiates the channel connection. When this method is called, all the
         * information needed to connect the channel has to be available.
         *
         * Implementers should only require this method to be called if the channel
         * needs to be configured in some way between when it's created and when it
         * becomes active. Otherwise, the channel should be immediately active and this
         * method should do nothing but immediately call opt_connectCb.
         *
         * @param {Function=} opt_connectCb Called when the channel has been connected
         *     and is ready to use.
         */
        connect(opt_connectCb?: Function): void;
        
        /**
         * Gets whether the channel is connected.
         *
         * If {@link #connect} is not required for this class, this should always return
         * true. Otherwise, this should return true by the time the callback passed to
         * {@link #connect} has been called and always after that.
         *
         * @return {boolean} Whether the channel is connected.
         */
        isConnected(): boolean;
        
        /**
         * Registers a service to be called when a message is received.
         *
         * Implementers shouldn't impose any restrictions on the service names that may
         * be registered. If some services are needed as control codes,
         * {@link goog.messaging.MultiMessageChannel} can be used to safely split the
         * channel into "public" and "control" virtual channels.
         *
         * @param {string} serviceName The name of the service.
         * @param {function((string|!Object))} callback The callback to process the
         *     incoming messages. Passed the payload. If opt_objectPayload is set, the
         *     payload is decoded and passed as an object.
         * @param {boolean=} opt_objectPayload If true, incoming messages for this
         *     service are expected to contain an object, and will be deserialized from
         *     a string automatically if necessary. It's the responsibility of
         *     implementors of this class to perform the deserialization.
         */
        registerService(serviceName: string, callback: (arg0: string|Object) => any, opt_objectPayload?: boolean): void;
        
        /**
         * Registers a service to be called when a message is received that doesn't
         * match any other services.
         *
         * @param {function(string, (string|!Object))} callback The callback to process
         *     the incoming messages. Passed the service name and the payload. Since
         *     some channels can pass objects natively, the payload may be either an
         *     object or a string.
         */
        registerDefaultService(callback: (arg0: string, arg1: string|Object) => any): void;
        
        /**
         * Sends a message over the channel.
         *
         * @param {string} serviceName The name of the service this message should be
         *     delivered to.
         * @param {string|!Object} payload The value of the message. If this is an
         *     Object, it is serialized to a string before sending if necessary. It's
         *     the responsibility of implementors of this class to perform the
         *     serialization.
         */
        send(serviceName: string, payload: string|Object): void;
    }
}
