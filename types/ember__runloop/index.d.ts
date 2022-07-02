// Type definitions for non-npm package @ember/runloop 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Frunloop
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import { EmberMethod, EmberMethodParams, AnyFn, EmberMethodReturn } from "ember/-private/type-utils";
import { EmberRunQueues } from './-private/types';
import { EmberRunTimer } from "@ember/runloop/types";
import '@ember/runloop/-private/backburner';

/**
 * Runs the passed target and method inside of a RunLoop, ensuring any
 * deferred actions including bindings and views updates are flushed at the
 * end.
 */
export function run<M extends AnyFn>(method: M): ReturnType<M>;
export function run<T, M extends EmberMethod<T>>(target: T, method: M, ...args: EmberMethodParams<T, M>): EmberMethodReturn<T, M>;

/**
 * If no run-loop is present, it creates a new one. If a run loop is
 * present it will queue itself to run on the existing run-loops action
 * queue.
 */
export function join<M extends AnyFn>(method: M, ...args: Parameters<M>): ReturnType<M> | undefined;
export function join<T, M extends EmberMethod<T>>(
   target: T,
   method: M,
   ...args: EmberMethodParams<T, M>
): EmberMethodReturn<T, M> | undefined;

/**
 * Allows you to specify which context to call the specified function in while
 * adding the execution of that function to the Ember run loop. This ability
 * makes this method a great way to asynchronously integrate third-party libraries
 * into your Ember application.
 */
// NOTE: it would be nice to make this curry arguments, which is how it actually
// works, but that is a *lot* of type shenanigans, and also diverges from the
// `Function.prototype.bind` implementation. We should track the latter, despite
// the loss of safety, because it makes interop cleaner.
export function bind<T, M extends EmberMethod<T>>(
   target: T,
   method: M,
   ...args: any[]
): (...args: any[]) => EmberMethodReturn<T, M>;

/**
 * Begins a new RunLoop. Any deferred actions invoked after the begin will
 * be buffered until you invoke a matching call to `run.end()`. This is
 * a lower-level way to use a RunLoop instead of using `run()`.
 */
export function begin(): void;

/**
 * Ends a RunLoop. This must be called sometime after you call
 * `run.begin()` to flush any deferred actions. This is a lower-level way
 * to use a RunLoop instead of using `run()`.
 */
export function end(): void;

/**
 * Adds the passed target/method and any optional arguments to the named
 * queue to be executed at the end of the RunLoop. If you have not already
 * started a RunLoop when calling this method one will be started for you
 * automatically.
 */
export function schedule<T, M extends EmberMethod<T>>(
   queue: EmberRunQueues,
   target: T,
   method: M,
   ...args: EmberMethodParams<T, M>
): EmberRunTimer;
export function schedule<M extends AnyFn>(
   queue: EmberRunQueues,
   method: M,
   ...args: Parameters<M>
): EmberRunTimer;

/**
 * Invokes the passed target/method and optional arguments after a specified
 * period of time. The last parameter of this method must always be a number
 * of milliseconds.
 */
export function later(method: AnyFn, wait: number): EmberRunTimer;
export function later<T, M extends EmberMethod<T>>(
    ...args: [
        target: T,
        method: M,
        ...args: EmberMethodParams<T, M>,
        wait: number,
    ]
): EmberRunTimer;

/**
 * Schedule a function to run one time during the current RunLoop. This is equivalent
 * to calling `scheduleOnce` with the "actions" queue.
 */
export function once<T, M extends EmberMethod<T>>(
   target: T,
   method: M,
   ...args: EmberMethodParams<T, M>
): EmberRunTimer;

/**
 * Schedules a function to run one time in a given queue of the current RunLoop.
 * Calling this method with the same queue/target/method combination will have
 * no effect (past the initial call).
 */
export function scheduleOnce<T, M extends EmberMethod<T>>(
   queue: EmberRunQueues,
   target: T,
   method: M,
   ...args: EmberMethodParams<T, M>
): EmberRunTimer;

/**
 * Schedules an item to run from within a separate run loop, after
 * control has been returned to the system. This is equivalent to calling
 * `run.later` with a wait time of 1ms.
 */
export function next<T, M extends EmberMethod<T>>(
   target: T,
   method: M,
   ...args: EmberMethodParams<T, M>
): EmberRunTimer;
export function next<M extends AnyFn>(
 method: M,
 ...args: Parameters<M>
): EmberRunTimer;

/**
 * Cancels a scheduled item. Must be a value returned by `run.later()`,
 * `run.once()`, `run.scheduleOnce()`, `run.next()`, `run.debounce()`, or
 * `run.throttle()`.
 */
export function cancel(timer?: EmberRunTimer): boolean;

/**
 * Delay calling the target method until the debounce period has elapsed
 * with no additional debounce calls. If `debounce` is called again before
 * the specified time has elapsed, the timer is reset and the entire period
 * must pass again before the target method is called.
 */
export function debounce(
   method: AnyFn,
   wait: number,
   immediate?: boolean
): EmberRunTimer;
export function debounce<Target, M extends EmberMethod<Target>>(
    ...args: [
        target: Target,
        method: M,
        ...args: EmberMethodParams<Target, M>,
        wait: number,
        immediate?: boolean
    ]
): EmberRunTimer;

/**
 * Ensure that the target method is never called more frequently than
 * the specified spacing period. The target method is called immediately.
 */
export function throttle(
   method: AnyFn,
   spacing: number,
   immediate?: boolean
): EmberRunTimer;
export function throttle<T, M extends EmberMethod<T>>(
    ...args: [
        target: T,
        method: M,
        ...methodArgs: EmberMethodParams<T, M>,
        spacing: number,
        immediate?: boolean
    ]
): EmberRunTimer;
