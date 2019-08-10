// Type definitions for set-interval-async 1.0
// Project: https://github.com/ealmansi/set-interval-async
// Definitions by: Emilio Almansi <https://github.com/ealmansi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference path="./dynamic/index.d.ts" />
/// <reference path="./fixed/index.d.ts" />
/// <reference path="./legacy/index.d.ts" />

export as namespace SetIntervalAsync;

export namespace dynamic {
    /**
     * Attempts to execute the given handler at regular intervals, while preventing
     * multiple concurrent executions. The handler will never be executed concurrently
     * more than once in any given moment. If the running time of any execution exceeds
     * the desired interval, the following execution will be scheduled as soon as
     * possible; ie. immediately after the previous execution concludes.
     *
     * @param handler - Handler function to be executed in intervals. May be asynchronous.
     * @param interval - Interval in milliseconds. Must be at least 10 ms.
     * @param args - Any number of arguments to pass on to the handler.
     */
    function setIntervalAsync(
        handler: (...args: any[]) => any,
        interval: number,
        ...args: any[]
    ): SetIntervalAsyncTimer;
}

export namespace fixed {
    /**
     * Executes the given handler at fixed intervals, while preventing
     * multiple concurrent executions. The handler will never be executed
     * concurrently more than once in any given moment, providing a fixed
     * time interval between the end of a given execution and the start of
     * the following one.
     *
     * @param handler - Handler function to be executed in intervals. May be asynchronous.
     * @param interval - Interval in milliseconds. Must be at least 10 ms.
     * @param args - Any number of arguments to pass on to the handler.
     */
    function setIntervalAsync(
        handler: (...args: any[]) => any,
        interval: number,
        ...args: any[]
    ): SetIntervalAsyncTimer;
}

export namespace legacy {
    /**
     * Executes the given handler at fixed intervals; ie. the start time
     * between consecutive executions is always a fixed amount of time.
     * If a given execution takes longer than the given time interval to
     * complete, then the handler will be invoked again without waiting
     * for the previous one to finish. In this scenario, multiple concurrent
     * executions can and will ocurr, so this function should only be used
     * when the given handler is reentrancy-safe.
     *
     * @param handler - Handler function to be executed in intervals. May be asynchronous.
     * @param interval - Interval in milliseconds. Must be at least 10 ms.
     * @param args - Any number of arguments to pass on to the handler.
     */
    function setIntervalAsync(
        handler: (...args: any[]) => any,
        interval: number,
        ...args: any[]
    ): SetIntervalAsyncTimer;
}

/**
 * Stops an execution cycle started by setIntervalAsync.
 * Any ongoing function executions will run until completion,
 * but all future ones will be cancelled.
 *
 * @param timer
 */
export function clearIntervalAsync(timer: SetIntervalAsyncTimer): Promise<void>;

/**
 * Error thrown by setIntervalAsync when invalid arguments are provided.
 */
export class SetIntervalAsyncError extends Error { constructor(); }

/**
 * Timer object returned by setIntervalAsync.
 * Can be used together with clearIntervalAsync to stop execution.
 */
export interface SetIntervalAsyncTimer { id: number; }
