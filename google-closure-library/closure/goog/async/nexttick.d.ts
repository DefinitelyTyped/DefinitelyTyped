declare module goog.async {

    /**
     * Throw an item without interrupting the current execution context.  For
     * example, if processing a group of items in a loop, sometimes it is useful
     * to report an error while still allowing the rest of the batch to be
     * processed.
     * @param {*} exception
     */
    function throwException(exception: any): void;

    /**
     * Fires the provided callbacks as soon as possible after the current JS
     * execution context. setTimeout(…, 0) takes at least 4ms when called from
     * within another setTimeout(…, 0) for legacy reasons.
     *
     * This will not schedule the callback as a microtask (i.e. a task that can
     * preempt user input or networking callbacks). It is meant to emulate what
     * setTimeout(_, 0) would do if it were not throttled. If you desire microtask
     * behavior, use {@see goog.Promise} instead.
     *
     * @param {function(this:SCOPE)} callback Callback function to fire as soon as
     *     possible.
     * @param {SCOPE=} opt_context Object in whose scope to call the listener.
     * @param {boolean=} opt_useSetImmediate Avoid the IE workaround that
     *     ensures correctness at the cost of speed. See comments for details.
     * @template SCOPE
     */
    function nextTick<SCOPE>(callback: () => any, opt_context?: SCOPE, opt_useSetImmediate?: boolean): void;
}
