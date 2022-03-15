/**
 * The namespace for Tracker-related methods.
 */
declare namespace Tracker {
    function Computation(): void;
    /**
     * A Computation object represents code that is repeatedly rerun
     * in response to
     * reactive data changes. Computations don't have return values; they just
     * perform actions, such as rerendering a template on the screen. Computations
     * are created using Tracker.autorun. Use stop to prevent further rerunning of a
     * computation.
     */
    interface Computation {
        /**
         * True during the initial run of the computation at the time `Tracker.autorun` is called, and false on subsequent reruns and at other times.
         */
        firstRun: boolean;
        /**
         * Invalidates this computation so that it will be rerun.
         */
        invalidate(): void;
        /**
         * True if this computation has been invalidated (and not yet rerun), or if it has been stopped.
         */
        invalidated: boolean;
        /**
         * Registers `callback` to run when this computation is next invalidated, or runs it immediately if the computation is already invalidated.  The callback is run exactly once and not upon
         * future invalidations unless `onInvalidate` is called again after the computation becomes valid again.
         * @param callback Function to be called on invalidation. Receives one argument, the computation that was invalidated.
         */
        onInvalidate(callback: Function): void;
        /**
         * Registers `callback` to run when this computation is stopped, or runs it immediately if the computation is already stopped.  The callback is run after any `onInvalidate` callbacks.
         * @param callback Function to be called on stop. Receives one argument, the computation that was stopped.
         */
        onStop(callback: Function): void;
        /**
         * Prevents this computation from rerunning.
         */
        stop(): void;
        /**
         * True if this computation has been stopped.
         */
        stopped: boolean;
    }
    /**
     * The current computation, or `null` if there isn't one.  The current computation is the `Tracker.Computation` object created by the innermost active call to
     * `Tracker.autorun`, and it's the computation that gains dependencies when reactive data sources are accessed.
     */
    var currentComputation: Computation;

    var Dependency: DependencyStatic;
    /**
     * A Dependency represents an atomic unit of reactive data that a
     * computation might depend on. Reactive data sources such as Session or
     * Minimongo internally create different Dependency objects for different
     * pieces of data, each of which may be depended on by multiple computations.
     * When the data changes, the computations are invalidated.
     */
    interface DependencyStatic {
        new (): Dependency;
    }
    interface Dependency {
        /**
         * Invalidate all dependent computations immediately and remove them as dependents.
         */
        changed(): void;
        /**
         * Declares that the current computation (or `fromComputation` if given) depends on `dependency`.  The computation will be invalidated the next time `dependency` changes.
         * If there is no current computation and `depend()` is called with no arguments, it does nothing and returns false.
         * Returns true if the computation is a new dependent of `dependency` rather than an existing one.
         * @param fromComputation An optional computation declared to depend on `dependency` instead of the current computation.
         */
        depend(fromComputation?: Computation): boolean;
        /**
         * True if this Dependency has one or more dependent Computations, which would be invalidated if this Dependency were to change.
         */
        hasDependents(): boolean;
    }

    /**
     * True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun.
     */
    var active: boolean;

    /**
     * Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun.  The function will be run
     * once and not on subsequent flushes unless `afterFlush` is called again.
     * @param callback A function to call at flush time.
     */
    function afterFlush(callback: Function): void;

    /**
     * Run a function now and rerun it later whenever its dependencies
     * change. Returns a Computation object that can be used to stop or observe the
     * rerunning.
     * @param runFunc The function to run. It receives one argument: the Computation object that will be returned.
     */
    function autorun(
        runFunc: (computation: Computation) => void,
        options?: {
            /**
             * The function to run when an error
             * happens in the Computation. The only argument it receives is the Error
             * thrown. Defaults to the error being logged to the console.
             */
            onError?: Function | undefined;
        },
    ): Computation;

    /**
     * Process all reactive updates immediately and ensure that all invalidated computations are rerun.
     */
    function flush(): void;

    /**
     * Run a function without tracking dependencies.
     * @param func A function to call immediately.
     */
    function nonreactive<T>(func: () => T): T;

    /**
     * Registers a new `onInvalidate` callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped.
     * @param callback A callback function that will be invoked as `func(c)`, where `c` is the computation on which the callback is registered.
     */
    function onInvalidate(callback: Function): void;
}
