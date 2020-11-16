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
