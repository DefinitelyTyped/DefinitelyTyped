// Type definitions for node-schedule
// Project: https://github.com/tejasmanohar/node-schedule/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "node-schedule" {
    import nodeSchedule = require('node-schedule');

    /**
     * Recurrence rules.
     */
    export interface RecurrenceRule {
        /**
         * Day of the month.
         *
         * @public
         * @type {number}
         */
        date?: number;

        /**
         * Day of the week.
         *
         * @public
         * @type {number|Array<number|Range>}
         */
        dayOfWeek?: number|Array<number|Range>;

        /**
         * Hour.
         *
         * @public
         * @type {number}
         */
        hour?: number;

        /**
         * Minute.
         *
         * @public
         * @type {number}
         */
        minute?: number;

        /**
         * Month.
         *
         * @public
         * @type {number}
         */
        month?: number;

        /**
         * Second.
         *
         * @public
         * @type {number}
         */
        second?: number;

        /**
         * Year.
         *
         * @public
         * @type {number}
         */
        year?: number;
    }

    /**
     * Range.
     *
     * @class
     */
    export class Range {
        /**
         * Constructor.
         *
         * @constructor
         * @param {number} start The start.
         * @param {end}    end   The end.
         * @param {step}   step  The step.
         */
        constructor(start?: number, end?: number, step?: number);

        /**
         * Return a {boolean} if the class contains the specified value.
         *
         * @param {number} value The value.
         * @returns {boolean} {true} if the class contains the specified value, otherwise, {false}.
         */
        contains(value: number): boolean;
    }

    /**
     * Scheduler jobs.
     *
     * @class
     */
    export class Job {
        /**
         * Constructor.
         *
         * @constructor
         * @param {RecurrenceRule}  rule      The rule.
         * @param {callback}        callback  The callback.
         */
        constructor(name?: string, job?: Function, callback?: Function);

        /**
         * Constructor.
         *
         * @constructor
         * @param {RecurrenceRule} rule The rule.
         * @param
         */
        constructor(job?: Function, callback?: Function);

        /**
         * Attach an event handler function.
         *
         * @public
         * @param {string}    eventName The event name.
         * @param {Function}  handler   The function to execute when the event is triggered.
         */
        on(eventName: string, handler: Function): void;

        /**
         *
         * @public
         */
        schedule(date: Date): void;
    }

    /**
     * Invocation.
     *
     * @class
     */
    export class Invocation {
        /**
         * Fire date.
         *
         * @public
         * @type {Date}
         */
        public fireDate: Date;

        /**
         * Job.
         *
         * @public
         * @type {Job}
         */
        public job: Job;

        /**
         * Recurrence rule.
         *
         * @public
         * @type {RecurrenceRule}
         */
        public recurrenceRule: RecurrenceRule;

        /**
         * Timer identifier.
         *
         * @public
         * @type {number}
         */
        public timerID: number;

        /**
         * Constructor.
         *
         * @constructor
         * @param {Job}             job             The job.
         * @param {Date}            fireDate        The fire date.
         * @param {RecurrenceRule}  recurrenceRule  The recurrence rule.
         */
        constructor(job: Job, fireDate: Date, recurrenceRule: RecurrenceRule);
    }

    /**
     * Cancels the job.
     *
     * @param {Job} job The job.
     * @returns {boolean} {true} if the job has been cancelled with success, otherwise, {false}.
     */
    export function cancelJob(job: Job): boolean;

    /**
     * Create a schedule job.
     *
     * @param {RecurrenceRule} rule The rule.
     * @param {Function} callback The callback.
     */
    export function scheduleJob(rule: RecurrenceRule|Date|string, callback: Function);
}
