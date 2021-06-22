// Type definitions for cron-converter 1.0
// Project: https://github.com/roccivic/cron-converter#readme
// Definitions by: DouglasAntunes <https://github.com/DouglasAntunes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as moment from 'moment';

export as namespace Cron;
export = Cron;

declare class Cron {
    /**
     * Creates an instance of Cron.
     * Cron objects each represent a cron schedule.
     * @param options The options to use.
     */
    constructor(options?: Cron.Options);

    /**
     * Parses a 2-dimensional array of integers as a cron schedule.
     * @param cronArr The array to parse.
     */
    fromArray(cronArr: Cron.CronArray): Cron;

    /**
     * Parses a cron string.
     * @param str The string to parse.
     */
    fromString(str: string): Cron;

    /**
     * Returns the time the schedule would run next.
     * @param now A Date or Moment object.
     */
    schedule(now?: Date | moment.Moment): Cron.Seeker;

    /**
     * Returns the cron schedule as a 2-dimensional array of integers.
     */
    toArray(): Cron.CronArray;

    /**
     * Returns the cron schedule as a string.
     */
    toString(): string;
}

declare namespace Cron {
    type CronArray = [number[], number[], number[], number[], number[]];

    class Seeker {
        /**
         * Creates an instance of Seeker.
         * Seeker objects search for execution times of a cron schedule.
         * @param cron A Cron instance.
         * @param now A Date or Moment object.
         */
        constructor(cron: Cron, now: Date);

        /**
         * Returns the time the schedule would run next.
         */
        next(): moment.Moment;

        /**
         * Returns the time the schedule would have last run at.
         */
        prev(): moment.Moment;

        /**
         * Resets the iterator.
         */
        reset(): void;
    }

    interface Options {
        /**
         * Changes the numbers to 3 letter weekday names on the `toString()`.
         * Default: `false`.
         */
        outputWeekdayNames?: boolean;

        /**
         * Changes the numbers to 3 letter month names on the `toString()`.
         * Default: `false`.
         */
        outputMonthNames?: boolean;

        /**
         * Changes the * to H on the `toString()`.
         * Default: `false`.
         */
        outputHashes?: boolean;

        /**
         * Defines a timezone to the cron instance.
         * Default: `Local timezone`.
         */
        timezone?: string;
    }
}
