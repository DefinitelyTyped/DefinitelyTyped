declare module goog {
    function require(name: 'goog.messaging.DeferredChannel'): typeof goog.messaging.DeferredChannel;
}

declare module goog.messaging {

    /**
     * Creates a new DeferredChannel, which wraps a deferred MessageChannel and
     * enqueues messages to be sent once the wrapped channel is resolved.
     *
     * @param {!goog.async.Deferred} deferredChannel The underlying deferred
     *     MessageChannel.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel}
     * @final
     */
    class DeferredChannel extends goog.Disposable {
        constructor(deferredChannel: goog.async.Deferred<any>);
        
        /**
         * Cancels the wrapped Deferred.
         */
        cancel(): void;
    }
}
