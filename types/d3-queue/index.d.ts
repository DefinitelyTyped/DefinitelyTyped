// Type definitions for D3JS d3-queue module 3.0
// Project: https://github.com/d3/d3-queue/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 3.0.2

/**
 * A d3-queue queue object as returned by queue(...)
 */
export interface Queue {
    /**
     * Adds the specified asynchronous task callback to the queue, with any optional arguments.
     *
     * @param task Task to be executed.The task is a function that will be called when the task should start. It is passed the
     * specified optional arguments and an additional callback as the last argument;
     * the callback must be invoked by the task when it finishes.
     * The task must invoke the callback with two arguments: the error, if any, and the result of the task.
     * To return multiple results from a single callback, wrap the results in an object or array.
     * @param args Additional, optional arguments to be passed into deferred task on invocation
     */
    defer(task: (...args: any[]) => void, ...args: any[]): this;
    /**
     * Aborts any active tasks, invoking each active task’s task.abort function, if any.
     * Also prevents any new tasks from starting, and immediately invokes the queue.await or
     * queue.awaitAll callback with an error indicating that the queue was aborted.
     */
    abort(): this;
    /**
     * Sets the callback to be invoked when all deferred tasks have finished (individual result arguments).
     *
     * @param callback Callback function to be executed, when error occured or all deferred tasks
     * have completed. The first argument to the callback is the first error that occurred, or null if no error occurred.
     * If an error occurred, there are no additional arguments to the callback. Otherwise,
     * the callback is passed each result as an additional argument.
     */
    await(callback: (error: any | null, ...results: any[]) => void): this;
    /**
     * Sets the callback to be invoked when all deferred tasks have finished (results array).
     *
     * @param callback Callback function to be executed, when error occured or all deferred tasks
     * have completed. The first argument to the callback is the first error that occurred,
     * or null if no error occurred. If an error occurred, there are no additional arguments to the callback.
     * Otherwise, the callback is also passed an array of results as the second argument.
     */
    awaitAll(callback: (error: any | null, results?: any[]) => void): this;
}

/**
 * Construct a new queue with the specified concurrency. If concurrency is not specified, the queue has infinite concurrency.
 * Otherwise, concurrency is a positive integer. For example, if concurrency is 1, then all tasks will be run in series.
 * If concurrency is 3, then at most three tasks will be allowed to proceed concurrently; this is useful, for example,
 * when loading resources in a web browser.
 *
 * @param concurrency Maximum number of deferred tasks to execute concurrently.
 */
export function queue(concurrency?: number): Queue;
