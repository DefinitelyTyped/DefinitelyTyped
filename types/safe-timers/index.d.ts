// Type definitions for safe-timers 1.1
// Project: https://github.com/Wizcorp/safe-timers#readme
// Definitions by: Kamil Socha <https://github.com/ksocha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export const maxInterval: number;

export class Timeout {
    reschedule(interval: number): void;

    fireNow(): void;

    fireAt(timestamp: number): void;

    fireIn(interval: number): void;

    clear(): void;
}

export function setTimeout<T extends any[]>(callback: (...args: T) => void, interval: number, ...args: T): Timeout;

export function setTimeoutAt<T extends any[]>(callback: (...args: T) => void, timestamp: number, ...args: T): Timeout;

export function clearTimeout(timeout: Timeout): void;

export class Interval {
    fireEvery(interval: number): void;

    clear(): void;
}

export function setInterval<T extends any[]>(callback: (...args: T) => void, interval: number, ...args: T): Interval;

export function clearInterval(interval: Interval): void;
