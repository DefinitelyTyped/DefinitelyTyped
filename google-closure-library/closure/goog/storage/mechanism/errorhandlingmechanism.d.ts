declare module goog {
    function require(name: 'goog.storage.mechanism.ErrorHandlingMechanism'): typeof goog.storage.mechanism.ErrorHandlingMechanism;
}

declare module goog.storage.mechanism {

    /**
     * Wraps a storage mechanism with a custom error handler.
     *
     * @param {!goog.storage.mechanism.Mechanism} mechanism Underlying storage
     *     mechanism.
     * @param {goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler}
     *     errorHandler An error handler.
     * @constructor
     * @extends {goog.storage.mechanism.Mechanism}
     * @final
     */
    class ErrorHandlingMechanism extends goog.storage.mechanism.Mechanism {
        constructor(mechanism: goog.storage.mechanism.Mechanism, errorHandler: goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler);
    }
}

declare module goog.storage.mechanism.ErrorHandlingMechanism {

    /**
     * Valid storage mechanism operations.
     * @enum {string}
     */
    type Operation = string;
    var Operation: {
        SET: Operation;
        GET: Operation;
        REMOVE: Operation;
    };

    /**
     * A function that handles errors raised in goog.storage.  Since some places in
     * the goog.storage codebase throw strings instead of Error objects, we accept
     * these as a valid parameter type.  It supports the following arguments:
     *
     * 1) The raised error (either in Error or string form);
     * 2) The operation name which triggered the error, as defined per the
     *    ErrorHandlingMechanism.Operation enum;
     * 3) The key that is passed to a storage method;
     * 4) An optional value that is passed to a storage method (only used in set
     *    operations).
     *
     * @typedef {function(
     *   (!Error|string),
     *   goog.storage.mechanism.ErrorHandlingMechanism.Operation,
     *   string,
     *   *=)}
     */
    type ErrorHandler = (arg0: Error|string, arg1: goog.storage.mechanism.ErrorHandlingMechanism.Operation, arg2: string, arg3?: any) => any;
}
