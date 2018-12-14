// Type definitions for @ember/runloop 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Frunloop
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { RunMethod, EmberRunQueues } from "@ember/runloop/-private/types";
import { EmberRunTimer } from "@ember/runloop/types";

// tslint:disable-next-line:strict-export-declare-modifiers
export const run: {
    /**
     * Runs the passed target and method inside of a RunLoop, ensuring any
     * deferred actions including bindings and views updates are flushed at the
     * end.
     */
    <Ret>(method: (...args: any[]) => Ret): Ret;
    <Target, Ret>(target: Target, method: RunMethod<Target, Ret>): Ret;
    /**
     * If no run-loop is present, it creates a new one. If a run loop is
     * present it will queue itself to run on the existing run-loops action
     * queue.
     */
    join<Ret>(method: (...args: any[]) => Ret, ...args: any[]): Ret | undefined;
    join<Target, Ret>(
        target: Target,
        method: RunMethod<Target, Ret>,
        ...args: any[]
    ): Ret | undefined;
    /**
     * Allows you to specify which context to call the specified function in while
     * adding the execution of that function to the Ember run loop. This ability
     * makes this method a great way to asynchronously integrate third-party libraries
     * into your Ember application.
     */
    bind<Target, Ret>(
        target: Target,
        method: RunMethod<Target, Ret>,
        ...args: any[]
    ): (...args: any[]) => Ret;
    /**
     * Begins a new RunLoop. Any deferred actions invoked after the begin will
     * be buffered until you invoke a matching call to `run.end()`. This is
     * a lower-level way to use a RunLoop instead of using `run()`.
     */
    begin(): void;
    /**
     * Ends a RunLoop. This must be called sometime after you call
     * `run.begin()` to flush any deferred actions. This is a lower-level way
     * to use a RunLoop instead of using `run()`.
     */
    end(): void;
    /**
     * Adds the passed target/method and any optional arguments to the named
     * queue to be executed at the end of the RunLoop. If you have not already
     * started a RunLoop when calling this method one will be started for you
     * automatically.
     */
    schedule<Target>(
        queue: EmberRunQueues,
        target: Target,
        method: RunMethod<Target>,
        ...args: any[]
    ): EmberRunTimer;
    schedule(
        queue: EmberRunQueues,
        method: (args: any[]) => any,
        ...args: any[]
    ): EmberRunTimer;
    /**
     * Invokes the passed target/method and optional arguments after a specified
     * period of time. The last parameter of this method must always be a number
     * of milliseconds.
     */
    later(method: (...args: any[]) => any, wait: number): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        wait: number
    ): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        wait: number
    ): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        wait: number
    ): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        wait: number
    ): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        wait: number
    ): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        wait: number
    ): EmberRunTimer;
    later<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        wait: number
    ): EmberRunTimer;
    /**
     * Schedule a function to run one time during the current RunLoop. This is equivalent
     * to calling `scheduleOnce` with the "actions" queue.
     */
    once<Target>(
        target: Target,
        method: RunMethod<Target>,
        ...args: any[]
    ): EmberRunTimer;
    /**
     * Schedules a function to run one time in a given queue of the current RunLoop.
     * Calling this method with the same queue/target/method combination will have
     * no effect (past the initial call).
     */
    scheduleOnce<Target>(
        queue: EmberRunQueues,
        target: Target,
        method: RunMethod<Target>,
        ...args: any[]
    ): EmberRunTimer;
    /**
     * Schedules an item to run from within a separate run loop, after
     * control has been returned to the system. This is equivalent to calling
     * `run.later` with a wait time of 1ms.
     */
    next<Target>(
        target: Target,
        method: RunMethod<Target>,
        ...args: any[]
    ): EmberRunTimer;
    /**
     * Cancels a scheduled item. Must be a value returned by `run.later()`,
     * `run.once()`, `run.scheduleOnce()`, `run.next()`, `run.debounce()`, or
     * `run.throttle()`.
     */
    cancel(timer: EmberRunTimer): boolean;
    /**
     * Delay calling the target method until the debounce period has elapsed
     * with no additional debounce calls. If `debounce` is called again before
     * the specified time has elapsed, the timer is reset and the entire period
     * must pass again before the target method is called.
     */
    debounce(
        method: (...args: any[]) => any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    debounce<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        wait: number,
        immediate?: boolean
    ): EmberRunTimer;
    /**
     * Ensure that the target method is never called more frequently than
     * the specified spacing period. The target method is called immediately.
     */
    throttle(
        method: (...args: any[]) => any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;
    throttle<Target>(
        target: Target,
        method: RunMethod<Target>,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        spacing: number,
        immediate?: boolean
    ): EmberRunTimer;

    queues: EmberRunQueues[];
};

export const begin: typeof run.begin;
export const bind: typeof run.bind;
export const cancel: typeof run.cancel;
export const debounce: typeof run.debounce;
export const end: typeof run.end;
export const join: typeof run.join;
export const later: typeof run.later;
export const next: typeof run.next;
export const once: typeof run.once;
export const schedule: typeof run.schedule;
export const scheduleOnce: typeof run.scheduleOnce;
export const throttle: typeof run.throttle;
