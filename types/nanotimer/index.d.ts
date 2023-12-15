declare namespace NanoTimer {
    interface TimeoutResults {
        waitTime: number;
    }
}

declare class NanoTimer {
    /**
     * Creates an instance of NanoTimer.
     * @param log - if true, will enable logging.
     */
    constructor(log?: boolean);

    /**
     * Call the task after the waiting the the timeout specified.
     */
    setTimeout(
        task: (...args: any[]) => void,
        args: any[] | string,
        timeout: string,
        callback?: (results: NanoTimer.TimeoutResults) => void,
    ): void;

    /**
     * Clears current running timeOut.
     */
    clearTimeout(): void;

    /**
     * Call the task at the regular interval specified in interval.
     */
    setInterval(
        task: (...args: any[]) => void,
        args: any[] | string,
        interval: string,
        callback?: (error: Error) => void,
    ): void;

    /**
     * Clears current running interval.
     */
    clearInterval(): void;

    /**
     * Calculate the time it tooks to execute the task.
     */
    time(
        task: (cb: () => void) => void,
        args: string | any[],
        interval: string,
        callback?: (error: Error) => void,
    ): number;

    /**
     * Returns true if the timer currently has a scheduled timeout, or false otherwise
     */
    hasTimeout(): boolean;
}

export = NanoTimer;
