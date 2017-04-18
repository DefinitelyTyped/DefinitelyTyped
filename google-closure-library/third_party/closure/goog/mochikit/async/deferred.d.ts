declare module goog {
    function require(name: 'goog.async.Deferred'): typeof goog.async.Deferred;
    function require(name: 'goog.async.Deferred.AlreadyCalledError'): typeof goog.async.Deferred.AlreadyCalledError;
    function require(name: 'goog.async.Deferred.CanceledError'): typeof goog.async.Deferred.CanceledError;
}

declare module goog.async {

    /**
     * A Deferred represents the result of an asynchronous operation. A Deferred
     * instance has no result when it is created, and is "fired" (given an initial
     * result) by calling {@code callback} or {@code errback}.
     *
     * Once fired, the result is passed through a sequence of callback functions
     * registered with {@code addCallback} or {@code addErrback}. The functions may
     * mutate the result before it is passed to the next function in the sequence.
     *
     * Callbacks and errbacks may be added at any time, including after the Deferred
     * has been "fired". If there are no pending actions in the execution sequence
     * of a fired Deferred, any new callback functions will be called with the last
     * computed result. Adding a callback function is the only way to access the
     * result of the Deferred.
     *
     * If a Deferred operation is canceled, an optional user-provided cancellation
     * function is invoked which may perform any special cleanup, followed by firing
     * the Deferred's errback sequence with a {@code CanceledError}. If the
     * Deferred has already fired, cancellation is ignored.
     *
     * Deferreds may be templated to a specific type they produce using generics
     * with syntax such as:
     * <code>
     *   /** @type {goog.async.Deferred<string>} *&#47;
     *   var d = new goog.async.Deferred();
     *   // Compiler can infer that foo is a string.
     *   d.addCallback(function(foo) {...});
     *   d.callback('string');  // Checked to be passed a string
     * </code>
     * Since deferreds are often used to produce different values across a chain,
     * the type information is not propagated across chains, but rather only
     * associated with specifically cast objects.
     *
     * @param {Function=} opt_onCancelFunction A function that will be called if the
     *     Deferred is canceled. If provided, this function runs before the
     *     Deferred is fired with a {@code CanceledError}.
     * @param {Object=} opt_defaultScope The default object context to call
     *     callbacks and errbacks in.
     * @constructor
     * @implements {goog.Thenable<VALUE>}
     * @template VALUE
     */
    class Deferred<VALUE> {
        constructor(opt_onCancelFunction?: Function, opt_defaultScope?: Object);
        
        /**
         * Cancels a Deferred that has not yet been fired, or is blocked on another
         * deferred operation. If this Deferred is waiting for a blocking Deferred to
         * fire, the blocking Deferred will also be canceled.
         *
         * If this Deferred was created by calling branch() on a parent Deferred with
         * opt_propagateCancel set to true, the parent may also be canceled. If
         * opt_deepCancel is set, cancel() will be called on the parent (as well as any
         * other ancestors if the parent is also a branch). If one or more branches were
         * created with opt_propagateCancel set to true, the parent will be canceled if
         * cancel() is called on all of those branches.
         *
         * @param {boolean=} opt_deepCancel If true, cancels this Deferred's parent even
         *     if cancel() hasn't been called on some of the parent's branches. Has no
         *     effect on a branch without opt_propagateCancel set to true.
         */
        cancel(opt_deepCancel?: boolean): void;
        
        /**
         * Fire the execution sequence for this Deferred by passing the starting result
         * to the first registered callback.
         * @param {VALUE=} opt_result The starting result.
         */
        callback(opt_result?: VALUE): void;
        
        /**
         * Fire the execution sequence for this Deferred by passing the starting error
         * result to the first registered errback.
         * @param {*=} opt_result The starting error.
         */
        errback(opt_result?: any): void;
        
        /**
         * Register a callback function to be called with a successful result. If no
         * value is returned by the callback function, the result value is unchanged. If
         * a new value is returned, it becomes the Deferred result and will be passed to
         * the next callback in the execution sequence.
         *
         * If the function throws an error, the error becomes the new result and will be
         * passed to the next errback in the execution chain.
         *
         * If the function returns a Deferred, the execution sequence will be blocked
         * until that Deferred fires. Its result will be passed to the next callback (or
         * errback if it is an error result) in this Deferred's execution sequence.
         *
         * @param {!function(this:T,VALUE):?} cb The function to be called with a
         *     successful result.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @return {!goog.async.Deferred} This Deferred.
         * @template T
         */
        addCallback<T>(cb: (arg0: VALUE) => any, opt_scope?: T): goog.async.Deferred<any>;
        
        /**
         * Register a callback function to be called with an error result. If no value
         * is returned by the function, the error result is unchanged. If a new error
         * value is returned or thrown, that error becomes the Deferred result and will
         * be passed to the next errback in the execution sequence.
         *
         * If the errback function handles the error by returning a non-error value,
         * that result will be passed to the next normal callback in the sequence.
         *
         * If the function returns a Deferred, the execution sequence will be blocked
         * until that Deferred fires. Its result will be passed to the next callback (or
         * errback if it is an error result) in this Deferred's execution sequence.
         *
         * @param {!function(this:T,?):?} eb The function to be called on an
         *     unsuccessful result.
         * @param {T=} opt_scope An optional scope to call the errback in.
         * @return {!goog.async.Deferred<VALUE>} This Deferred.
         * @template T
         */
        addErrback<T>(eb: (arg0: any) => any, opt_scope?: T): goog.async.Deferred<VALUE>;
        
        /**
         * Registers one function as both a callback and errback.
         *
         * @param {!function(this:T,?):?} f The function to be called on any result.
         * @param {T=} opt_scope An optional scope to call the function in.
         * @return {!goog.async.Deferred} This Deferred.
         * @template T
         */
        addBoth<T>(f: (arg0: any) => any, opt_scope?: T): goog.async.Deferred<any>;
        
        /**
         * Like addBoth, but propagates uncaught exceptions in the errback.
         *
         * @param {!function(this:T,?):?} f The function to be called on any result.
         * @param {T=} opt_scope An optional scope to call the function in.
         * @return {!goog.async.Deferred.<VALUE>} This Deferred.
         * @template T
         */
        addFinally<T>(f: (arg0: any) => any, opt_scope?: T): goog.async.Deferred<VALUE>;
        
        /**
         * Registers a callback function and an errback function at the same position
         * in the execution sequence. Only one of these functions will execute,
         * depending on the error state during the execution sequence.
         *
         * NOTE: This is not equivalent to {@code def.addCallback().addErrback()}! If
         * the callback is invoked, the errback will be skipped, and vice versa.
         *
         * @param {(function(this:T,VALUE):?)|null} cb The function to be called on a
         *     successful result.
         * @param {(function(this:T,?):?)|null} eb The function to be called on an
         *     unsuccessful result.
         * @param {T=} opt_scope An optional scope to call the functions in.
         * @return {!goog.async.Deferred} This Deferred.
         * @template T
         */
        addCallbacks<T>(cb: ((arg0: VALUE) => any)|void, eb: ((arg0: any) => any)|void, opt_scope?: T): goog.async.Deferred<any>;
        
        /**
         * Links another Deferred to the end of this Deferred's execution sequence. The
         * result of this execution sequence will be passed as the starting result for
         * the chained Deferred, invoking either its first callback or errback.
         *
         * @param {!goog.async.Deferred} otherDeferred The Deferred to chain.
         * @return {!goog.async.Deferred} This Deferred.
         */
        chainDeferred(otherDeferred: goog.async.Deferred<any>): goog.async.Deferred<any>;
        
        /**
         * Makes this Deferred wait for another Deferred's execution sequence to
         * complete before continuing.
         *
         * This is equivalent to adding a callback that returns {@code otherDeferred},
         * but doesn't prevent additional callbacks from being added to
         * {@code otherDeferred}.
         *
         * @param {!goog.async.Deferred|!goog.Thenable} otherDeferred The Deferred
         *     to wait for.
         * @return {!goog.async.Deferred} This Deferred.
         */
        awaitDeferred(otherDeferred: goog.async.Deferred<any>|goog.Thenable<any>): goog.async.Deferred<any>;
        
        /**
         * Creates a branch off this Deferred's execution sequence, and returns it as a
         * new Deferred. The branched Deferred's starting result will be shared with the
         * parent at the point of the branch, even if further callbacks are added to the
         * parent.
         *
         * All branches at the same stage in the execution sequence will receive the
         * same starting value.
         *
         * @param {boolean=} opt_propagateCancel If cancel() is called on every child
         *     branch created with opt_propagateCancel, the parent will be canceled as
         *     well.
         * @return {!goog.async.Deferred<VALUE>} A Deferred that will be started with
         *     the computed result from this stage in the execution sequence.
         */
        branch(opt_propagateCancel?: boolean): goog.async.Deferred<VALUE>;
        
        /**
         * @return {boolean} Whether the execution sequence has been started on this
         *     Deferred by invoking {@code callback} or {@code errback}.
         */
        hasFired(): boolean;
        
        /**
         * @param {*} res The latest result in the execution sequence.
         * @return {boolean} Whether the current result is an error that should cause
         *     the next errback to fire. May be overridden by subclasses to handle
         *     special error types.
         * @protected
         */
        isError(res: any): boolean;
        
        /**
         * Creates a Deferred that has an initial result.
         *
         * @param {*=} opt_result The result.
         * @return {!goog.async.Deferred} The new Deferred.
         */
        static succeed(opt_result?: any): goog.async.Deferred<any>;
        
        /**
         * Creates a Deferred that fires when the given promise resolves.
         * Use only during migration to Promises.
         *
         * @param {!goog.Promise<T>} promise
         * @return {!goog.async.Deferred<T>} The new Deferred.
         * @template T
         */
        static fromPromise<T>(promise: goog.Promise<T, any>): goog.async.Deferred<T>;
        
        /**
         * Creates a Deferred that has an initial error result.
         *
         * @param {*} res The error result.
         * @return {!goog.async.Deferred} The new Deferred.
         */
        static fail(res: any): goog.async.Deferred<any>;
        
        /**
         * Creates a Deferred that has already been canceled.
         *
         * @return {!goog.async.Deferred} The new Deferred.
         */
        static canceled(): goog.async.Deferred<any>;
        
        /**
         * Normalizes values that may or may not be Deferreds.
         *
         * If the input value is a Deferred, the Deferred is branched (so the original
         * execution sequence is not modified) and the input callback added to the new
         * branch. The branch is returned to the caller.
         *
         * If the input value is not a Deferred, the callback will be executed
         * immediately and an already firing Deferred will be returned to the caller.
         *
         * In the following (contrived) example, if <code>isImmediate</code> is true
         * then 3 is alerted immediately, otherwise 6 is alerted after a 2-second delay.
         *
         * <pre>
         * var value;
         * if (isImmediate) {
         *   value = 3;
         * } else {
         *   value = new goog.async.Deferred();
         *   setTimeout(function() { value.callback(6); }, 2000);
         * }
         *
         * var d = goog.async.Deferred.when(value, alert);
         * </pre>
         *
         * @param {*} value Deferred or normal value to pass to the callback.
         * @param {!function(this:T, ?):?} callback The callback to execute.
         * @param {T=} opt_scope An optional scope to call the callback in.
         * @return {!goog.async.Deferred} A new Deferred that will call the input
         *     callback with the input value.
         * @template T
         */
        static when<T>(value: any, callback: (arg0: any) => any, opt_scope?: T): goog.async.Deferred<any>;
        
        /**
         * Asserts that there are no pending deferred errors. If there are any
         * scheduled errors, one will be thrown immediately to make this function fail.
         */
        static assertNoErrors(): void;
    }
}

declare module goog.async.Deferred {

    /**
     * An error sub class that is used when a Deferred has already been called.
     * @param {!goog.async.Deferred} deferred The Deferred.
     *
     * @constructor
     * @extends {goog.debug.Error}
     */
    class AlreadyCalledError extends goog.debug.Error {
        constructor(deferred: goog.async.Deferred<any>);
    }

    /**
     * An error sub class that is used when a Deferred is canceled.
     *
     * @param {!goog.async.Deferred} deferred The Deferred object.
     * @constructor
     * @extends {goog.debug.Error}
     */
    class CanceledError extends goog.debug.Error {
        constructor(deferred: goog.async.Deferred<any>);
    }

    /**
     * Wrapper around errors that are scheduled to be thrown by failing deferreds
     * after a timeout.
     *
     * @param {*} error Error from a failing deferred.
     * @constructor
     * @final
     * @private
     * @struct
     */
    interface Error_ {
        
        /**
         * Actually throws the error and removes it from the list of pending
         * deferred errors.
         */
        throwError(): void;
        
        /**
         * Resets the error throw timer.
         */
        resetTimer(): void;
    }
}
