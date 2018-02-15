// Type definitions for tocktimer 1.0
// Project: https://github.com/mrchimp/tock
// Definitions by: Evan Shortiss <https://github.com/evanshortiss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function t(opts?: t.TockOptions): t.Tock;

declare namespace t {
    interface TockOptions {
        /**
         * Defaults to 10 milliseconds. How often, in milliseconds, that the clock will tick.
         */
        interval?: number;

        /**
         * Defaults to false. If true, the clock will count down from a given time, otherwise it will count up from 0:00.
         */
        countdown?: boolean;

        /**
         * Callback function executed on each tick
         */
        callback(): void;

        /**
         * Callback function executed when the timer is complete
         */
        complete(): void;
    }

    class Tock {
        /**
         * Create a Tock instance
         */
        constructor(opts?: TockOptions)

        /**
         * Start the timer
         * @param time Can be either a countdown value or a starting value.
         * If a countdown timer then set time to count down from.
         * If a starting value then set time to the desired start time to count up from.
         */
        start: (time?: number) => void;

        /**
         * Stop the clock and clear the timeout
         */
        stop: () => void;

        /**
         * Stop the clock if it's running, continue clock if paused
         */
        pause: () => void;

        /**
         * Reset times to zero. Countdown clocks need a duration to be passed to start() after reset() is called.
         */
        reset: () => void;

        /**
         * Returns the elapsed time in milliseconds
         */
        lap: () => number;

        /**
         * Convert number of milliseconds to a MM:SS time string. Won't handle times greater than 1 hour
         */
        msToTime: (ms: number) => string;

        /**
         * Convert number of milliseconds to timecode string
         */
        msToTimecode: (ms: number, showMs?: boolean) => string;

        /**
         * Convert a time string to a number of milliseconds. Should be a duration as a string of form MM:SS, MM:SS:ms, MM:SS.ms, HH:MM:SS
         * Alternatively a time in the future can be provided using the form yyyy-mm-dd HH:MM:SS.ms. The difference between this time and present will be returned.
         * If the input cannot be recognized as one of the above then 0 is returned
         */
        timeToMS: (time: string) => number;
    }
}

export = t;
