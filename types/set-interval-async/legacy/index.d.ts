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
export function setIntervalAsync(
  handler: (...args: any[]) => any,
  interval: number,
  ...args: any[]
): SetIntervalAsyncTimer;

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
