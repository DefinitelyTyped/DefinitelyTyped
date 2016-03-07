declare module goog {
    function require(name: 'goog.async.run'): typeof goog.async.run;
}

declare module goog.async {

    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    function run<THIS>(callback: () => any, opt_context?: THIS): void;
}

declare module goog.async.run {

    /**
     * Forces goog.async.run to use nextTick instead of Promise.
     *
     * This should only be done in unit tests. It's useful because MockClock
     * replaces nextTick, but not the browser Promise implementation, so it allows
     * Promise-based code to be tested with MockClock.
     */
    function forceNextTick(): void;

    /**
     * Run any pending goog.async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * goog.async.nextTick.
     */
    function processWorkQueue(): void;
}
