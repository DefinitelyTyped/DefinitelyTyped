export type Handler = (name: string, callback: () => void) => void;
export type ProfileHandler = (name: string, state?: any) => (error?: Error) => void;

/**
 * Instruments methods to allow profiling various parts of Relay. Profiling code
 * in Relay consists of three steps:
 *
 *  - Instrument the function to be profiled.
 *  - Attach handlers to the instrumented function.
 *  - Run the code which triggers the handlers.
 *
 * Handlers attached to instrumented methods are called with an instrumentation
 * name and a callback that must be synchronously executed:
 *
 *   instrumentedMethod.attachHandler(function(name, callback) {
 *     const start = performance.now();
 *     callback();
 *     console.log('Duration', performance.now() - start);
 *   });
 *
 * Handlers for profiles are callbacks that return a stop method:
 *
 *   RelayProfiler.attachProfileHandler('profileName', (name, state) => {
 *     const start = performance.now();
 *     return function stop(name, state) {
 *       console.log(`Duration (${name})`, performance.now() - start);
 *     }
 *   });
 *
 * In order to reduce the impact on performance in production, instrumented
 * methods and profilers with names that begin with `@` will only be measured
 * if `__DEV__` is true. This should be used for very hot functions.
 */

export const RelayProfiler: {
    /**
     * Instruments methods on a class or object. This re-assigns the method in
     * order to preserve function names in stack traces (which are detected by
     * modern debuggers via heuristics). Example usage:
     *
     *   const RelayStore = { primeCache: function() {...} };
     *   RelayProfiler.instrumentMethods(RelayStore, {
     *     primeCache: 'RelayStore.primeCache'
     *   });
     *
     *   RelayStore.primeCache.attachHandler(...);
     *
     * As a result, the methods will be replaced by wrappers that provide the
     * `attachHandler` and `detachHandler` methods.
     */
    instrumentMethods(object: () => void | object, names: { [key: string]: string }): void;

    /**
     * Wraps the supplied function with one that provides the `attachHandler` and
     * `detachHandler` methods. Example usage:
     *
     *   const printRelayQuery =
     *     RelayProfiler.instrument('printRelayQuery', printRelayQuery);
     *
     *   printRelayQuery.attachHandler(...);
     *
     * NOTE: The instrumentation assumes that no handlers are attached or detached
     * in the course of executing another handler.
     */
    instrument<T extends () => void>(name: string, originalFunction: T): T;

    /**
     * Attaches a handler to all methods instrumented with the supplied name.
     *
     *   function createRenderer() {
     *     return RelayProfiler.instrument('render', function() {...});
     *   }
     *   const renderA = createRenderer();
     *   const renderB = createRenderer();
     *
     *   // Only profiles `renderA`.
     *   renderA.attachHandler(...);
     *
     *   // Profiles both `renderA` and `renderB`.
     *   RelayProfiler.attachAggregateHandler('render', ...);
     *
     */
    attachAggregateHandler(name: string, handler: Handler): void;

    /**
     * Detaches a handler attached via `attachAggregateHandler`.
     */
    detachAggregateHandler(name: string, handler: Handler): void;

    /**
     * Instruments profiling for arbitrarily asynchronous code by a name.
     *
     *   const timerProfiler = RelayProfiler.profile('timeout');
     *   setTimeout(function() {
     *     timerProfiler.stop();
     *   }, 1000);
     *
     *   RelayProfiler.attachProfileHandler('timeout', ...);
     *
     * Arbitrary state can also be passed into `profile` as a second argument. The
     * attached profile handlers will receive this as the second argument.
     */
    profile(name: string, state?: any): { stop: (error?: Error) => void };

    /**
     * Attaches a handler to profiles with the supplied name. You can also
     * attach to the special name '*' which is a catch all.
     */
    attachProfileHandler(name: string, handler: ProfileHandler): void;

    /**
     * Detaches a handler attached via `attachProfileHandler`.
     */
    detachProfileHandler(name: string, handler: ProfileHandler): void;
};
