// Type definitions for sharp-timer 0.3
// Project: https://github.com/afractal/SharpTimer
// Definitions by: Hermes Gjini - afractal <https://github.com/afractal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ElapsedEvent = () => void;
export type ElapsingEvent = (intervalValue: number) => void;

export class Timer {
    private _enabled;
    private _stopped;
    private _interval;
    private _intervalElapsedEvents;
    private _intervalElapsingEvents;
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
    private getDoubleDigit(number);
    private checkForValidInterval(interval);
}

export class Stopwatch {
    private _isRunning;
    private _elapsedMilliseconds;
    private _startedTimeInMillis;
    private _intervalIds;
    private static readonly millisPerSecond;
    private static readonly millisPerMinute;
    private static readonly millisPerHour;
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
    private getDoubleDigit(num);
}
