declare module goog {
    function require(name: 'goog.debug.entryPointRegistry'): typeof goog.debug.entryPointRegistry;
}

declare module goog.debug {

    /**
     * @interface
     */
    interface EntryPointMonitor {
        
        /**
         * Instruments a function.
         *
         * @param {!Function} fn A function to instrument.
         * @return {!Function} The instrumented function.
         */
        wrap(fn: Function): Function;
        
        /**
         * Try to remove an instrumentation wrapper created by this monitor.
         * If the function passed to unwrap is not a wrapper created by this
         * monitor, then we will do nothing.
         *
         * Notice that some wrappers may not be unwrappable. For example, if other
         * monitors have applied their own wrappers, then it will be impossible to
         * unwrap them because their wrappers will have captured our wrapper.
         *
         * So it is important that entry points are unwrapped in the reverse
         * order that they were wrapped.
         *
         * @param {!Function} fn A function to unwrap.
         * @return {!Function} The unwrapped function, or {@code fn} if it was not
         *     a wrapped function created by this monitor.
         */
        unwrap(fn: Function): Function;
    }
}

declare module goog.debug.entryPointRegistry {

    /**
     * Register an entry point with this module.
     *
     * The entry point will be instrumented when a monitor is passed to
     * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the
     * entry point is instrumented immediately.
     *
     * @param {function(!Function)} callback A callback function which is called
     *     with a transforming function to instrument the entry point. The callback
     *     is responsible for wrapping the relevant entry point with the
     *     transforming function.
     */
    function register(callback: (arg0: Function) => any): void;

    /**
     * Configures a monitor to wrap all entry points.
     *
     * Entry points that have already been registered are immediately wrapped by
     * the monitor. When an entry point is registered in the future, it will also
     * be wrapped by the monitor when it is registered.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.
     */
    function monitorAll(monitor: goog.debug.EntryPointMonitor): void;

    /**
     * Try to unmonitor all the entry points that have already been registered. If
     * an entry point is registered in the future, it will not be wrapped by the
     * monitor when it is registered. Note that this may fail if the entry points
     * have additional wrapping.
     *
     * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap
     *     the entry points.
     * @throws {Error} If the monitor is not the most recently configured monitor.
     */
    function unmonitorAllIfPossible(monitor: goog.debug.EntryPointMonitor): void;
}
