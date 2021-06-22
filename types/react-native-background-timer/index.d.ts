// Type definitions for react-native-background-timer 2.0
// Project: https://github.com/ocetnik/react-native-background-timer#readme
// Definitions by: Tjark Smalla <https://github.com/chillkroeteTTS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ You can declare types that are available via importing the module */
export type IntervalId = number;
export type TimeoutId = number;

/*~ You can declare properties of the module using const, let, or var */
declare class BackgroundTimer {
    constructor();

    start(delay?: number): any;

    stop(): void;

    runBackgroundTimer(callback: () => void, delay: number): void;

    backgroundClockMethod(callback: () => void, delay: number): void;

    stopBackgroundTimer(): void;

    setTimeout(callback: () => void, timeout: number): TimeoutId;

    clearTimeout(timeoutId: TimeoutId): void;

    setInterval(callback: () => void, timeout: number): IntervalId;

    clearInterval(intervalId: IntervalId): void;
}

declare const _BackgroundTimer: BackgroundTimer;
export default _BackgroundTimer;
