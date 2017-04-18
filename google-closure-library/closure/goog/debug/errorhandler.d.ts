declare module goog {
    function require(name: 'goog.debug.ErrorHandler'): typeof goog.debug.ErrorHandler;
    function require(name: 'goog.debug.ErrorHandler.ProtectedFunctionError'): typeof goog.debug.ErrorHandler.ProtectedFunctionError;
}

declare module goog.debug {

    /**
     * The ErrorHandler can be used to to wrap functions with a try/catch
     * statement. If an exception is thrown, the given error handler function will
     * be called.
     *
     * When this object is disposed, it will stop handling exceptions and tracing.
     * It will also try to restore window.setTimeout and window.setInterval
     * if it wrapped them. Notice that in the general case, it is not technically
     * possible to remove the wrapper, because functions have no knowledge of
     * what they have been assigned to. So the app is responsible for other
     * forms of unwrapping.
     *
     * @param {Function} handler Handler for exceptions.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.debug.EntryPointMonitor}
     */
    class ErrorHandler extends goog.Disposable {
        constructor(handler: Function);
        
        /**
         * Enable tracers when instrumenting entry points.
         * @param {boolean} newVal See above.
         */
        setAddTracersToProtectedFunctions(newVal: boolean): void;
        
        /**
         * Installs exception protection for an entry point function. When an exception
         * is thrown from a protected function, a handler will be invoked to handle it.
         *
         * @param {Function} fn An entry point function to be protected.
         * @return {!Function} A protected wrapper function that calls the entry point
         *     function.
         */
        protectEntryPoint(fn: Function): Function;
        
        /**
         * Helps {@link #protectEntryPoint} by actually creating the protected
         * wrapper function, after {@link #protectEntryPoint} determines that one does
         * not already exist for the given function.  Can be overriden by subclasses
         * that may want to implement different error handling, or add additional
         * entry point hooks.
         * @param {!Function} fn An entry point function to be protected.
         * @return {!Function} protected wrapper function.
         * @protected
         */
        getProtectedFunction(fn: Function): Function;
        
        /**
         * Installs exception protection for window.setTimeout to handle exceptions.
         */
        protectWindowSetTimeout(): void;
        
        /**
         * Install exception protection for window.setInterval to handle exceptions.
         */
        protectWindowSetInterval(): void;
        
        /**
         * Install exception protection for window.requestAnimationFrame to handle
         * exceptions.
         */
        protectWindowRequestAnimationFrame(): void;
        
        /**
         * Set whether to wrap errors that occur in protected functions in a
         * goog.debug.ErrorHandler.ProtectedFunctionError.
         * @param {boolean} wrapErrors Whether to wrap errors.
         */
        setWrapErrors(wrapErrors: boolean): void;
        
        /**
         * Set whether to add a prefix to all error messages that occur in protected
         * functions.
         * @param {boolean} prefixErrorMessages Whether to add a prefix to error
         *     messages.
         */
        setPrefixErrorMessages(prefixErrorMessages: boolean): void;
    }
}

declare module goog.debug.ErrorHandler {

    /**
     * Error thrown to the caller of a protected entry point if the entry point
     * throws an error.
     * @param {*} cause The error thrown by the entry point.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class ProtectedFunctionError extends goog.debug.Error {
        constructor(cause: any);
        
        /**
         * Text to prefix the message with.
         * @type {string}
         */
        static MESSAGE_PREFIX: string;
    }
}
