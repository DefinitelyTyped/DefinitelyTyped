/**
 * The Screeps Profiler is a library that helps to understand where your CPU is being spent in
 * the game of Screeps.
 * It works by monkey patching functions on the Global game object prototypes, with a function that
 * record how long each function takes. The primary benefit of using this profiler is that you can
 * get a clear picture of where your CPU is being used over time, and optimize some of the heavier functions.
 * While it works best for players that heavily employ prototypes in their code, it should work
 * to some degree for all players.
 *
 * Any modules that you use that modify the game's prototypes should be imported
 * before you require the profiler.
 *
 * @see More information at https://github.com/gdborton/screeps-profiler
 */
interface ScreepsGameProfiler {
    /**
     * Will run for the given number of ticks then will output the gathered information to the console.
     *
     * @param ticks - controls how long the profiler should run before stopping
     * @param [functionFilter] - parameter will limit the scope of the profiler to a specific function name
     */
    profile(ticks: number, functionFilter?: string): void;

    /**
     * Will run for the given number of ticks, and will output the gathered information each tick to
     * the console. The can sometimes be useful for seeing spikes in performance.
     *
     * @param ticks - controls how long the profiler should run before stopping
     * @param [functionFilter] - parameter will limit the scope of the profiler to a specific function name
     */
    stream(ticks: number, functionFilter?: string): void;

    /**
     * This will run for the given number of ticks, and will email the output to your registered
     * Screeps email address. Very useful for long running profiles.
     *
     * @param ticks - controls how long the profiler should run before stopping
     * @param [functionFilter] - parameter will limit the scope of the profiler to a specific function name
     */
    email(ticks: number, functionFilter?: string): void;

    /**
     * This will run indefinitely, and will only output data when the output console command is run.
     * Very useful for long running profiles with lots of function calls.
     *
     * @param [functionFilter] - parameter will limit the scope of the profiler to a specific function name
     */
    background(functionFilter?: string): void;

    /**
     * Print a report based on the current tick. The profiler will continue to operate normally.
     * This is currently the only way to get data from the background profile.
     *
     * @param [lineCount=20] the number of lines to output
     */
    output(lineCount?: number): void;

    /**
     * Stops the profiler and resets its memory. This is currently the only way to stop a background profile.
     */
    reset(): void;

    /**
     *  Restarts the profiler using the same options previously used to start it.
     */
    restart(): void;
}

interface ScreepsProfilerStatic {
    /**
     * This line monkey patches the global prototypes. Should be called before and outside your main loop.
     */
    enable(): void;

    /**
     * Wrap your main loop with this function.
     *
     * @param callback - your main loop function
     */
    // tslint:disable-next-line ban-types
    wrap(callback: Function): Function;

    /**
     * Register a class to be profiled. Each of the functions on this class will be replaced with
     * a profiler wrapper
     * @param  clazz constructor
     * @param className - The name of the class, a label used in output
     */
    // tslint:disable-next-line ban-types
    registerClass(constructor: Function, className: string): void;

    /**
     * Each of the functions on this object will be replaced with a profiler wrapper.
     * @param objectName - Name of the object, a label used in output
     */
    registerObject(object: any, objectName: string): void;

    /**
     * Wraps a function for profiling, returns the wrapped function.
     *
     * Be sure to reassign the function, we can't alter functions that are passed.
     *
     * The second param is optional if you pass a named function function x() {}, but required if
     * you pass an anonymous function var x = function(){}.
     *
     * @param [fnName] - Name of the function, used as a label in output
     * @return the original function wrapped for profiling
     */
    // tslint:disable-next-line ban-types
    registerFN(fn: Function, fnName?: string): Function;
}

declare global {
    /**
     * screeps-profiler extends the Game interface with itself
     * @see http://docs.screeps.com/api/#Game
     */
    interface Game {
        profiler: ScreepsGameProfiler;
    }
    var Game: Game;
}

declare var profiler: ScreepsProfilerStatic;

export = profiler;
