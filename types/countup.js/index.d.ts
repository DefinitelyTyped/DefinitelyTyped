// Type definitions for countup.js 1.9
// Project: https://github.com/inorganik/CountUp.js
// Definitions by: Rostislav Shermenyov <https://github.com/shermendev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class CountUp {
    /**
     * @param target Id of html element or var of previously selected html element where counting occurs
     * @param startVal The value you want to begin at
     * @param endVal The value you want to arrive at
     * @param decimals Number of decimal places, default 0
     * @param duration Duration of animation in seconds, default 2
     * @param options Object of options
     */
    constructor(
        target: string | HTMLElement,
        startVal: number | string,
        endVal: number | string,
        decimals?: number | string,
        duration?: number | string,
        options?: CountUp.CountUpOptions
    );
    // #region Dynamic params
    // Will appear(or not) in the CountUpInstance object once the other functions fire
    // i.e. paused will return undefined instead of boolean unless the pauseResume() was called before
    countDown?: boolean;
    d?: any;
    dec?: number;
    decimals?: number;
    duration?: number;
    endVal?: number;
    error?: string;
    frameVal?: number;
    initialized?: boolean;
    options?: CountUp.CountUpOptions;
    paused?: boolean;
    rAF?: number;
    remaining?: number;
    startTime?: number;
    startVal?: number;
    timestamp?: number;
    callback?(): void;
    // #endregion
    /**
     * @param timestamp
     */
    count(timestamp: number): void;
    initialize(): boolean;
    /**
     * Toggles pause/resume animation.
     */
    pauseResume(): void;
    /**
     * Print value to target.
     * @param value number that will be passed to formattingFn and then printed to the target
     */
    printValue(value: number): void;
    /**
     * Reset to startVal so animation can be run again.
     */
    reset(): void;
    /**
     * Start your animation.
     * @param callback Option callback to run on animation end
     */
    start(callback?: () => void): void;
    /**
     * Pass a new endVal and start animation.
     * @param newEndVal new value
     */
    update(newEndVal: number | string): void;
    version(): string;
}

declare namespace CountUp {
    interface CountUpOptions {
        /**
         * Character to use as a decimal
         */
        decimal?: string;
        /**
         * Optional custom easing function, default is Robert Penner's easeOutExpo
         * @param t current time
         * @param b start value
         * @param c change in value
         * @param d duration
         * @return calculated value
         */
        easingFn?(t: number, b: number, c: number, d: number): number;
        /**
         * Optional custom formatting function
         * @param num
         * @return
         */
        formattingFn?(num: number): string;
        /**
         * Optionally pass an array of custom numerals for 0-9
         */
        numerals?: any[];
        /**
         * Optional text before the result
         */
        prefix?: string;
        /**
         * Character to use as a separator
         */
        separator?: string;
        /**
         * Optional text after the result
         */
        suffix?: string;
        /**
         * Toggle easing
         */
        useEasing?: boolean;
        /**
         * 1,000,000 vs 1000000
         */
        useGrouping?: boolean;
    }
}

export = CountUp;
export as namespace CountUp;
