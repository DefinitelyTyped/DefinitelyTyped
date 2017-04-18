declare module goog {
    function require(name: 'goog.messaging.AbstractChannel'): typeof goog.messaging.AbstractChannel;
}

declare module goog.messaging {

    /**
     * Creates an abstract message channel.
     *
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel}
     */
    class AbstractChannel extends goog.Disposable {
        constructor();
        
        /**
         * Logger for this class.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
        
        /**
         * Delivers a message to the appropriate service. This is meant to be called by
         * subclasses when they receive messages.
         *
         * This method takes into account both explicitly-registered and default
         * services, as well as making sure that JSON payloads are decoded when
         * necessary. If the subclass is capable of passing objects as payloads, those
         * objects can be passed in to this method directly. Otherwise, the (potentially
         * JSON-encoded) strings should be passed in.
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @protected
         */
        deliver(serviceName: string, payload: string|Object): void;
        
        /**
         * Find the service object for a given service name. If there's no service
         * explicitly registered, but there is a default service, a service object is
         * constructed for it.
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @return {?{callback: function((string|!Object)), objectPayload: boolean}} The
         *     service object for the given service, or null if none was found.
         * @protected
         */
        getService(serviceName: string, payload: string|Object): {callback: (arg0: string|Object) => any; objectPayload: boolean};
        
        /**
         * Converts the message payload into the format expected by the registered
         * service (either JSON or string).
         *
         * @param {string} serviceName The name of the service receiving the message.
         * @param {string|!Object} payload The contents of the message.
         * @param {boolean} objectPayload Whether the service expects an object or a
         *     plain string.
         * @return {string|Object} The payload in the format expected by the service, or
         *     null if something went wrong.
         * @protected
         */
        decodePayload(serviceName: string, payload: string|Object, objectPayload: boolean): string|Object;
    }
}
