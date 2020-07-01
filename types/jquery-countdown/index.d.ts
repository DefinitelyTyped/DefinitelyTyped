// Type definitions for jQuery Countdown 2.2
// Project: https://github.com/hilios/jQuery.countdown, http://hilios.github.io/jquery.countdown
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace jQueryCountdown {
    interface Options {
        /**
         * Allow to continue after finishes
         */
        elapse?: boolean;

        /**
         * The update rate in milliseconds
         */
        precision?: number;

        /**
         * Deferred initialization mode
         */
        defer?: boolean;
    }

    interface Event extends JQuery.Event {
        /**
         * The namespaced event type
         */
        type: string;

        /**
         * The formatter function
         */
        strftime: ((format: string) => string);

        /**
         * The parsed final date native object
         */
        finalDate: Date;

        /**
         * Passed away the final date?
         */
        elapsed: boolean;

        offset: OffsetEvent;
    }

    interface OffsetEvent {
        /**
         * Seconds left for the next minute
         */
        seconds: number;

        /**
         * Minutes left for the next hour
         */
        minutes: number;

        /**
         * Hours left until next day
         */
        hours: number;

        /**
         * Days left until next week
         */
        days: number;

        /**
         * Days left until next week
         */
        daysToWeek: number;

        /**
         * Days left until next month
         */
        daysToMonth: number;

        /**
         * Weeks left until the final date
         */
        weeks: number;

        /**
         * Weeks left until the next month
         */
        weeksToMonth: number;

        /**
         * Months left until final date
         */
        months: number;

        /**
         * Years left until final date
         */
        years: number;

        /**
         * Total amount of days left until final date
         */
        totalDays: number;

        /**
         * Total amount of hours left until final date
         */
        totalHours: number;

        /**
         * Total amount of minutes left until final date
         */
        totalMinutes: number;

        /**
         * Total amount of seconds left until final date
         */
        totalSeconds: number;
    }

    type Methods = 'update.countdown' | 'finish.countdown' | 'stop.countdown';

    type Controls = 'start' | 'stop' | 'pause' | 'resume';
}
interface JQuery {
    /**
     * Initialize the countdown
     */
    countdown(finalDate: string, callback?: ((event: jQueryCountdown.Event) => void)): JQuery;

    /**
     * Initialize the countdown with options
     */
    countdown(finalDate: string, options: jQueryCountdown.Options, callback?: ((event: jQueryCountdown.Event) => void)): JQuery;

    /**
     * Methods to control the execution flow of countdown
     */
    countdown(control: jQueryCountdown.Controls): JQuery;

    /**
     * Trigger an event whenever some state change
     */
    on(method: jQueryCountdown.Methods, callback: ((event: jQueryCountdown.Event) => void)): JQuery;
}
