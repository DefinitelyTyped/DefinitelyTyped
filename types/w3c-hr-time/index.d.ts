export interface PerformanceJSON {
    timeOrigin: number;
}

/**
 * Provides access to performance-related information for the current page.
 *
 * It's part of the High Resolution Time API.
 */
export class Performance {
    constructor();
    get timeOrigin(): number;
    now(): number;
    toJSON(): PerformanceJSON;
}

/**
 * Returns the DOMHighResTimeStamp representing the high resolution time value of the global monotonic clock.
 */
export function getGlobalMonotonicClockMS(): number;

/**
 * This value is `true` if the global monotonic clock has 5-μs accuracy.
 */
export const clockIsAccurate: boolean;
