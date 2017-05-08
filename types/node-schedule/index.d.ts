// Type definitions for node-schedule 1.2
// Project: https://github.com/tejasmanohar/node-schedule/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, Florian Plattner <https://github.com/flowpl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

/**
 * The callback executed by a Job
 */
export type JobCallback = () => void;

/**
 * Scheduler jobs.
 *
 * @class
 */
export class Job extends EventEmitter {
    /**
     * This Job's name. read-only.
     */
        name: string;

    /**
     * Use the function scheduleJob() to create new Job objects.
     *
     * @constructor
     * @internal
     * @param {string|JobCallback}   name     either an optional name for this Job or this Job's callback
     * @param {JobCallback|Function} job      either this Job's callback or an optional callback function
     * @param {Function}             callback optional callback that is executed right before the JobCallback
     */
        constructor(name: string|JobCallback, job?: JobCallback|(() => void), callback?: () => void);

    /**
     * Adds an Invocation to this job. For internal use.
     * @internal
     * @param {Invocation} invocation
     * @return {boolean} whether the invocation could be added
     */
        trackInvocation(invocation: Invocation): boolean;

    /**
     * removes an Invocation from this Job's tracking list. For internal use.
     * @internal
     * @param {Invocation} invocation
     * @return boolean whether the invocation was successful. Removing an Invocation that doesn't exist, returns false.
     */
        stopTrackingInvocation(invocation: Invocation): boolean;

    /**
     * @internal
     * @return {number} the number of currently running instances of this Job.
     */
        triggeredJobs(): number;

    /**
     * set the number of currently running Jobs.
     * @internal
     * @param {number} triggeredJobs
     */
        setTriggeredJobs(triggeredJobs: number): void;

    /**
     * cancel all pending Invocations of this Job.
     * @param {boolean} reschedule whether to reschedule the canceled Invocations.
     */
        cancel(reschedule?: boolean): boolean;

    /**
     * cancel the next Invocation of this Job.
     * @param {boolean} reschedule whether to reschedule the canceled Invocation.
     * @return {boolean} whether cancelation was successful
     */
        cancelNext(reschedule?: boolean): boolean;

    /**
     * Changes the scheduling information for this Job.
     * @param {RecurrenceRule|string|number} spec
     * @return {boolean} whether the reschedule was successful
     */
        reschedule(spec: RecurrenceRule|string|number): boolean;

    /**
     * Returns the Date on which this Job will be run next.
     * @return {Date}
     */
        nextInvocation(): Date;

    /**
     * @return Invocation[] a list of all pending Invocations
     */
        pendingInvocations(): Invocation[];

    /**
     * run this Job immediately.
     */
        invoke(): void;

    /**
     * schedule this Job to be run on the specified date.
     * @param date {Date}
     */
        runOnDate(date: Date): void;

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
     * @param {number} end   The end.
     * @param {number} step  The step.
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

export type Recurrence = number | Range | string;
export type RecurrenceSegment = Recurrence | Recurrence[];

/**
 * Recurrence rules.
 */
export class RecurrenceRule {
    /**
     * Day of the month.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        date: RecurrenceSegment;

    /**
     * Day of the week.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        dayOfWeek: RecurrenceSegment;

    /**
     * Hour.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        hour: RecurrenceSegment;

    /**
     * Minute.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        minute: RecurrenceSegment;

    /**
     * Month.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        month: RecurrenceSegment;

    /**
     * Second.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        second: RecurrenceSegment;

    /**
     * Year.
     *
     * @public
     * @type {RecurrenceSegment}
     */
        year: RecurrenceSegment;

        constructor(
            year?: RecurrenceSegment,
            month?: RecurrenceSegment,
            date?: RecurrenceSegment,
            dayOfWeek?: RecurrenceSegment,
            hour?: RecurrenceSegment,
            minute?: RecurrenceSegment,
            second?: RecurrenceSegment
        );

        nextInvocationDate(base: Date): Date;
}

/**
 * Recurrence rule specification using a date range and cron expression.
 */
export interface RecurrenceSpecDateRange {
    /**
     * Starting date in date range.
     *
     * @public
     * @type {Date|string|number}
     */
    start: Date | string | number;
    /**
     * Ending date in date range.
     *
     * @public
     * @type {Date|string|number}
     */
    end: Date | string | number;
    /**
     * Cron expression string.
     *
     * @public
     * @type {string}
     */
    rule: string;
}

/**
 * Recurrence rule specification using object literal syntax.
 */
export interface RecurrenceSpecObjLit {
    /**
     * Day of the month.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    date?: RecurrenceSegment;

    /**
     * Day of the week.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    dayOfWeek?: RecurrenceSegment;

    /**
     * Hour.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    hour?: RecurrenceSegment;

    /**
     * Minute.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    minute?: RecurrenceSegment;

    /**
     * Month.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    month?: RecurrenceSegment;

    /**
     * Second.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    second?: RecurrenceSegment;

    /**
     * Year.
     *
     * @public
     * @type {RecurrenceSegment}
     */
    year?: RecurrenceSegment;
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
    fireDate: Date;

    /**
     * Job.
     *
     * @public
     * @type {Job}
     */
    job: Job;

    /**
     * Recurrence rule.
     *
     * @public
     * @type {RecurrenceRule}
     */
    recurrenceRule: RecurrenceRule;

    /**
     * Timer identifier.
     *
     * @public
     * @type {number}
     */
    timerID: number;

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
 * @param {string}                                    name     name for the new Job
 * @param {RecurrenceRule|RecurrenceSpecDateRange|RecurrenceSpecObjLit|Date|string} rule     scheduling info
 * @param {JobCallback}                               callback callback to be executed on each invocation
 */
export function scheduleJob(name: string, rule: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string, callback: JobCallback): Job;

/**
 * Create a schedule job.
 *
 * @param {RecurrenceRule|RecurrenceSpecDateRange|RecurrenceSpecObjLit|Date|string} rule     scheduling info
 * @param {JobCallback}                               callback callback to be executed on each invocation
 */
export function scheduleJob(rule: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string, callback: JobCallback): Job;

/**
 * Changes the timing of a Job, canceling all pending invocations.
 *
 * @param {Job|string} job
 * @param {RecurrenceRule|RecurrenceSpecDateRange|RecurrenceSpecObjLit|Date|string} spec The new timing for this Job.
 * @return {Job} if the job could be rescheduled, {null} otherwise.
 */
export function rescheduleJob(job: Job | string, spec: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string): Job;

/**
 * Dictionary of all Jobs, accessible by name.
 */
export let scheduledJobs: {[jobName: string]: Job};

/**
 * Cancels the job.
 *
 * @param {Job} job The job.
 * @returns {boolean} {true} if the job has been cancelled with success, otherwise, {false}.
 */
export function cancelJob(job: Job|string): boolean;
