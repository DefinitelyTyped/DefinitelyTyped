// Type definitions for node-schedule 1.1.0
// Project: https://github.com/tejasmanohar/node-schedule/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, Florian Plattner <https://github.com/flowpl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../node/node.d.ts"/>

declare module 'node-schedule' {
    import nodeSchedule = require('node-schedule');
    import {EventEmitter} from 'events';

    /**
     * The callback executed by a Job
     */
    export interface JobCallback {
        ():void;
    }

    /**
     * Scheduler jobs.
     *
     * @class
     */
    export class Job extends EventEmitter {
        /**
         * This Job's name. read-only.
         */
        name:string;

        /**
         * Use the function scheduleJob() to create new Job objects.
         *
         * @constructor
         * @internal
         * @param {string|JobCallback}   name     either an optional name for this Job or this Job's callback
         * @param {JobCallback|Function} job      either this Job's callback or an optional callback function
         * @param {Function}             callback optional callback that is executed right before the JobCallback
         */
        constructor(name: string|JobCallback, job?: JobCallback|Function, callback?: Function);

        /**
         * Adds an Invocation to this job. For internal use.
         * @internal
         * @param {Invocation} invokation
         * @return {boolean} whether the invocation could be added
         */
        trackInvocation(invokation:Invocation):boolean;

        /**
         * removes an Invocation from this Job's tracking list. For internal use.
         * @internal
         * @param invocation {Invocation}
         * @return boolean whether the invocation was successful. Removing an Invocation that doesn't exist, returns false.
         */
        stopTrackingInvocation(invocation:Invocation):boolean;

        /**
         * @internal
         * @return {number} the number of currently running instances of this Job.
         */
        triggeredJobs():number;

        /**
         * set the number of currently running Jobs.
         * @internal
         * @param triggeredJobs
         */
        setTriggeredJobs(triggeredJobs:number):void;

        /**
         * cancel all pending Invocations of this Job.
         * @param reschedule {boolean} whether to reschedule the canceled Invocations.
         */
        cancel(reschedule?:boolean):boolean;

        /**
         * cancel the next Invocation of this Job.
         * @param reschedule {boolean} whether to reschedule the canceled Invocation.
         * @return {boolean} whether cancelation was successful
         */
        cancelNext(reschedule?:boolean):boolean;

        /**
         * Changes the scheduling information for this Job.
         * @param spec {RecurrenceRule|string|number} the
         * @return {boolean} whether the reschedule was successful
         */
        reschedule(spec:RecurrenceRule|string|number):boolean;

        /**
         * Returns the Date on which this Job will be run next.
         * @return {Date}
         */
        nextInvocation():Date;

        /**
         * @return Invocation[] a list of all pending Invocations
         */
        pendingInvocations():Invocation[];

        /**
         * run this Job immediately.
         */
        invoke():void;

        /**
         * schedule this Job to be run on the specified date.
         * @param date {Date}
         */
        runOnDate(date:Date): void;

        /**
         * set scheduling information
         * @param {Date|string|number} date
         * @public
         */
        schedule(date: Date|string|number): boolean;
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
     * Recurrence rules.
     */
    export class RecurrenceRule {
        /**
         * Day of the month.
         *
         * @public
         * @type {number}
         */
        date: number;

        /**
         * Day of the week.
         *
         * @public
         * @type {number|Array<number|Range>}
         */
        dayOfWeek: number|Array<number|Range>;

        /**
         * Hour.
         *
         * @public
         * @type {number}
         */
        hour: number;

        /**
         * Minute.
         *
         * @public
         * @type {number}
         */
        minute: number;

        /**
         * Month.
         *
         * @public
         * @type {number}
         */
        month: number;

        /**
         * Second.
         *
         * @public
         * @type {number}
         */
        second: number;

        /**
         * Year.
         *
         * @public
         * @type {number}
         */
        year: number;

        constructor(year:number,
                    month:number,
                    date:number,
                    dayOfWeek:number|Array<number|Range>,
                    hour:number,
                    minute:number,
                    second:number);

        nextInvocationDate(base:Date):Date;
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
     * Create a schedule job.
     *
     * @param {string|RecurrenceRule|Date} name     either an optional name for the new Job or scheduling information
     * @param {RecurrenceRule|Date|string} rule     either the scheduling info or the JobCallback
     * @param {JobCallback}                callback The callback to be executed on each invocation.
     */
    export function scheduleJob(name:string|RecurrenceRule|Date, rule: RecurrenceRule|Date|string|JobCallback, callback?: JobCallback): Job;

    /**
     * Changes the timing of a Job, canceling all pending invocations.
     *
     * @param job {Job}
     * @param spec {JobCallback} the new timing for this Job
     * @return {Job} if the job could be rescheduled, {null} otherwise.
     */
    export function rescheduleJob(job:Job|string, spec:RecurrenceRule|Date|string):Job;

    /**
     * Dictionary of all Jobs, accessible by name.
     */
    export let scheduledJobs:{[jobName:string]:Job};

    /**
     * Cancels the job.
     *
     * @param {Job} job The job.
     * @returns {boolean} {true} if the job has been cancelled with success, otherwise, {false}.
     */
    export function cancelJob(job: Job|string): boolean;
}
