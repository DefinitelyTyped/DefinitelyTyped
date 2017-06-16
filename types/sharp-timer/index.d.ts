// Type definitions for sharp-timer 1.0
// Project: https://github.com/afractal/SharpTimer
// Definitions by: Hermes Gjini - afractal <https://github.com/afractal/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export const millisPerSecond: number;
export const millisPerMinute: number;
export const millisPerHour: number;
export const millisPerDay: number;

export type ElapsedEvent = () => void;
export type ElapsingEvent = (intervalValue: number) => void;

export class Timer {
    private _enabled: boolean;
    private _stopped: boolean;
    private _interval: number;
    private _intervalElapsedEvents: ElapsedEvent[];
    private _intervalElapsingEvents: ElapsingEvent[];
    constructor(interval: number);
    readonly enabled: boolean;
    readonly stopped: boolean;
    interval: number;
    start(): void;
    pause(): void;
    resume(): void;
    stop(): void;
    onIntervalElapsed(intervalElapsedHandler: ElapsedEvent): void;
    onIntervalElapsing(intervalElapsingHandler: ElapsingEvent): void;
    toString(): string;
    private getDoubleDigit(number: number): string;
    private checkForValidInterval(interval: number): void;
}

export class Stopwatch {
    private _isRunning: boolean;
    private _elapsedMilliseconds: number;
    private _startedTimeInMillis: number;
    private _intervalIds: Array<number | NodeJS.Timer>;
    constructor();
    readonly elapsed: string;
    readonly elapsedMilliseconds: number;
    readonly elapsedSeconds: number;
    readonly elapsedMinutes: number;
    readonly elapsedHours: number;
    readonly isRunning: boolean;
    static startNew(): Stopwatch;
    start(): void;
    stop(): void;
    reset(): void;
    restart(): void;
    dispose(): void;
    private getDoubleDigit(num: number): string;
}

export class Timespan {
    private _milliseconds: number;
    private constructor(milliseconds: number);
    readonly milliseconds: number;
    readonly seconds: number;
    readonly minutes: number;
    readonly hours: number;
    readonly days: number;
    static fromDays(days: number): Timespan;
    static fromHours(hours: number): Timespan;
    static fromMinutes(minutes: number): Timespan;
    static fromSeconds(seconds: number): Timespan;
    static fromMilliseconds(milliseconds: number): Timespan;
    static compare(t1: Timespan, t2: Timespan): 1 | 0 | -1;
    static equals(t1: Timespan, t2: Timespan): boolean;
    addMutable(timespan: Timespan): void;
    substractMutable(timespan: Timespan): void;
    add(timespan: Timespan): Timespan;
    substract(timespan: Timespan): Timespan;
    negate(): Timespan;
}
