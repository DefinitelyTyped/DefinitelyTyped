// Type definitions for sharp-timer library. 1.0
// Project: https://github.com/afractal/SharpTimer
// Definitions by: Hermes Gjini - afractal <https://github.com/afractal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export const millisPerSecond: 1000;
export const millisPerMinute: 60000;
export const millisPerHour: 3600000;
export const millisPerDay: 86400000;
export type ElapsedEvent = () => void;
export type ElapsingEvent = (intervalValue: number) => void;

/**
 * Simulates the actions of a generic timer,
 * generates elapsing and elapsed events for a specified interval.
 */
export class Timer {
    private _enabled: boolean;
    private _stopped: boolean;
    private _interval: number;
    private _intervalElapsedEvents: ElapsedEvent[];
    private _intervalElapsingEvents: ElapsingEvent[];

    /**
     * Initializes a new instance of the Timer class,
     * and sets all the properties to their initial values.
     * @param interval
     * The time, in milliseconds, in which the timer will be active.
     * The value must be greater than zero.
     */
    constructor(interval: number);

    /**
     * Gets a boolean value to indicate the enabled state
     * of the current Timer instance.
     * @default true
     */
    readonly enabled: boolean;

    /**
     * Gets a boolean value to indicate the stopped state
     * of the current Timer instance.
     * @default false
     */
    readonly stopped: boolean;

    /**
     * Gets or sets the remaining interval in milliseconds.
     * The value must be greater than zero.
     */
    interval: number;

    /**
     * Starts raising the Timer events
     * by setting the enabled property to true.
     */
    start(): void;

    /**
     * Pauses the Timer instance by setting the enabled property to false.
     */
    pause(): void;

    /**
     * Resumes the Timer instance by setting the enabled property to true.
     */
    resume(): void;

    /**
     * Stops raising the Timer event
     * by setting the enabled property to false.
     */
    stop(): void;

    /**
     * Occurs when the interval has completely elapsed.
     * @param intervalElapsedHandler
     * The callback which will be executed when
     * the interval elapsed event occurs.
     */
    onIntervalElapsed(intervalElapsedHandler: ElapsedEvent): void;

    /**
     * Occurs when the interval elapses and completely elapsed.
     * @param intervalElapsingHandler
     * The callback which will be executed when
     * the interval elapsing event occurs.
     */
    onIntervalElapsing(intervalElapsingHandler: ElapsingEvent): void;

    /**
     * Returns a string represenation of the remaining
     * in this format: minutes:seconds.
     * examples: 20:23, 00:04, 59:59
     */
    toString(): string;

    private getDoubleDigit(number: number): string;

    private checkForValidInterval(interval: number): void;
}

/**
 * Simulates the actions of a generic stopwatch.
 */
export class Stopwatch {
    private _isRunning: boolean;
    private _elapsedMilliseconds: number;
    private _startedTimeInMillis: number;
    private _intervalIds: Array<number | NodeJS.Timer>;

    /**
     * Initializes a new instance of the Stopwatch class.
     */
    constructor();

    /**
     * Gets the elapsed time in this format:
     * hrs:mins:secs:ms
     */
    readonly elapsed: string;

    /**
     * Gets the elapsed time in milliseconds.
     */
    readonly elapsedMilliseconds: number;

    /**
     * Gets the elapsed time in seconds.
     */
    readonly elapsedSeconds: number;

    /**
     * Gets the elapsed time in minutes.
     */
    readonly elapsedMinutes: number;

    /**
     * Gets the elapsed hours in hours.
     */
    readonly elapsedHours: number;

    /**
     * Gets the isRunning state of the current Stopwatch instance.
     * @default false
     */
    readonly isRunning: boolean;

    /**
     * Initializes a new Stopwatch instance and
     * starts measuring elapsed time.
     */
    static startNew(): Stopwatch;

    /**
     * Starts, or resumes the Stopwatch
     * from measuring elapsed time.
     */
    start(): void;

    /**
     * Stops the Stopwatch from measuring elapsed time.
     */
    stop(): void;

    /**
     * Stops the Stopwatch and resets the elapsed time to zero.
     */
    reset(): void;

    /**
     * Stops the Stopwatch,
     * resets the elapsed time to zero
     * and starts the Stopwatch for measuring elapsed time.
     * It is a shortcut for writing
     * reset then start.
     */
    restart(): void;

    /**
     * Stops the Stopwatch and cleans up the intervals.
     */
    dispose(): void;

    private getDoubleDigit(num: number): string;
}

/**
 * Simulates an object that represents a time interval.
 */
export class Timespan {
    private _milliseconds: number;
    private constructor(milliseconds: number);

    /**
     * Gets the time interval in milliseconds.
     */
    readonly milliseconds: number;

    /**
     * Gets the time interval in seconds.
     */
    readonly seconds: number;

    /**
     * Gets the time interval in minutes.
     */
    readonly minutes: number;

    /**
     * Gets the time interval in hours.
     */
    readonly hours: number;

    /**
     * Gets the time interval in days.
     */
    readonly days: number;

    /**
     * Returns a Timespan that represents a specified number of days.
     * @param days The number of days.
     */
    static fromDays(days: number): Timespan;

    /**
     * Returns a Timespan that represents a specified number of hours.
     * @param hours The number of hours.
     */
    static fromHours(hours: number): Timespan;

    /**
     * Returns a Timespan that represents a specified number of minutes.
     * @param minutes The number of minutes.
     */
    static fromMinutes(minutes: number): Timespan;

    /**
     * Returns a Timespan that represents a specified number of seconds.
     * @param seconds The number of seconds.
     */
    static fromSeconds(seconds: number): Timespan;

    /**
     * Returns a Timespan that represents a specified number of milliseconds.
     * @param milliseconds The number of milliseconds.
     */
    static fromMilliseconds(milliseconds: number): Timespan;

    /**
     * Compares two Timespan objects and
     * returns an integer that indicates whether
     * the first value is shorter than, equal to,
     * or longer than the second value.
     * @param t1 The first Timespan to compare.
     * @param t2 The second Timespan to compare.
     */
    static compare(t1: Timespan, t2: Timespan): 1 | 0 | -1;

    /**
     * Returns a boolean value that indicates
     * whether two specified instances of Timespan are equal.
     * @param t1 The first Timespan to compare.
     * @param t2 The second Timespan to compare.
     */
    static equals(t1: Timespan, t2: Timespan): boolean;

    /**
     * Adds the specified Timespan to this instance.
     * @param timespan The Timespan to add.
     */
    addMutable(timespan: Timespan): void;

    /**
     * Substracts the specified Timespan from this instance.
     * @param timespan The Timespan to substract.
     */
    substractMutable(timespan: Timespan): void;

    /**
     * Returns a new Timespan object whose
     * value is the sum of the specified Timespan object and this instance.
     * @param timespan The Timespan to add.
     */
    add(timespan: Timespan): Timespan;

    /**
     * Returns a new Timespan object whose
     * value is the difference between the
     * specified Timespan object and this instance.
     * @param timespan The Timespan to substract.
     */
    substract(timespan: Timespan): Timespan;

    /**
     * Returns a new Timespan object
     * whose value is the negated value of this instance.
     */
    negate(): Timespan;
}
