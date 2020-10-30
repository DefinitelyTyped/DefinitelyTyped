// Type definitions for node-schedule 1.3
// Project: https://github.com/node-schedule/node-schedule
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Florian Plattner <https://github.com/flowpl>
//                 Tieu Philippe Khim <https://github.com/spike008t>
//                 Seohyun Yoon <https://github.com/seohyun0120>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

/** The callback executed by a Job */
export type JobCallback = (fireDate: Date) => void;

/** Scheduler jobs. */
export class Job extends EventEmitter {
    readonly name: string;

    /**
     * Use the function scheduleJob() to create new Job objects.
     *
     * @internal
     * @param name     either an optional name for this Job or this Job's callback
     * @param job      either this Job's callback or an optional callback function
     * @param callback optional callback that is executed right before the JobCallback
     */
    constructor(name: string|JobCallback, job?: JobCallback|(() => void), callback?: () => void);

    /**
     * Adds an Invocation to this job. For internal use.
     * @internal
     * @return whether the invocation could be added
     */
    trackInvocation(invocation: Invocation): boolean;

    /**
     * removes an Invocation from this Job's tracking list. For internal use.
     * @internal
     * @return boolean whether the invocation was successful. Removing an Invocation that doesn't exist, returns false.
     */
    stopTrackingInvocation(invocation: Invocation): boolean;

    /**
     * @internal
     * @return the number of currently running instances of this Job.
     */
    triggeredJobs(): number;

    /**
     * set the number of currently running Jobs.
     * @internal
     */
    setTriggeredJobs(triggeredJobs: number): void;

    /**
     * cancel all pending Invocations of this Job.
     * @param reschedule whether to reschedule the canceled Invocations.
     */
    cancel(reschedule?: boolean): boolean;

    /**
     * cancel the next Invocation of this Job.
     * @param reschedule whether to reschedule the canceled Invocation.
     * @return whether cancelation was successful
     */
    cancelNext(reschedule?: boolean): boolean;

    /**
     * Changes the scheduling information for this Job.
     * @return whether the reschedule was successful
     */
    reschedule(spec: RecurrenceRule|string|number): boolean;

    /** The Date on which this Job will be run next. */
    nextInvocation(): Date;

    /** A list of all pending Invocations */
    pendingInvocations(): Invocation[];

    /**
     * run this Job immediately.
     */
    invoke(): void;

    /** schedule this Job to be run on the specified date. */
    runOnDate(date: Date): void;

    /** set scheduling information */
    schedule(date: Date|string|number): boolean;
}

export class Range {
    constructor(start?: number, end?: number, step?: number);

    /** Whether the class contains the specified value. */
    contains(value: number): boolean;
}

export type Recurrence = number | Range | string;
export type RecurrenceSegment = Recurrence | Recurrence[];
export type Timezone = string;

export class RecurrenceRule {
    /**
     * Day of the month.
     */
    date: RecurrenceSegment;
    dayOfWeek: RecurrenceSegment;
    hour: RecurrenceSegment;
    minute: RecurrenceSegment;
    month: RecurrenceSegment;
    second: RecurrenceSegment;
    year: RecurrenceSegment;
    tz: Timezone;

    constructor(
        year?: RecurrenceSegment,
        month?: RecurrenceSegment,
        date?: RecurrenceSegment,
        dayOfWeek?: RecurrenceSegment,
        hour?: RecurrenceSegment,
        minute?: RecurrenceSegment,
        second?: RecurrenceSegment,
        tz?: Timezone,
    );

    nextInvocationDate(base: Date): Date;
}

/**
 * Recurrence rule specification using a date range and cron expression.
 */
export interface RecurrenceSpecDateRange {
    /**
     * Starting date in date range.
     */
    start?: Date | string | number;
    /**
     * Ending date in date range.
     */
    end?: Date | string | number;
    /**
     * Cron expression string.
     */
    rule: string;
    /**
     * Timezone
     */
    tz?: Timezone;
}

/**
 * Recurrence rule specification using object literal syntax.
 */
export interface RecurrenceSpecObjLit {
    /**
     * Day of the month.
     */
    date?: RecurrenceSegment;
    dayOfWeek?: RecurrenceSegment;
    hour?: RecurrenceSegment;
    minute?: RecurrenceSegment;
    month?: RecurrenceSegment;
    second?: RecurrenceSegment;
    year?: RecurrenceSegment;
    /**
     * Timezone
     */
    tz?: Timezone;
}

export class Invocation {
    fireDate: Date;
    job: Job;
    recurrenceRule: RecurrenceRule;
    timerID: number;
    constructor(job: Job, fireDate: Date, recurrenceRule: RecurrenceRule);
}

/**
 * Create a schedule job.
 *
 * @param name     name for the new Job
 * @param rule     scheduling info
 * @param callback callback to be executed on each invocation
 */
export function scheduleJob(name: string, rule: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string | number, callback: JobCallback): Job;

/**
 * Create a schedule job.
 *
 * @param rule     scheduling info
 * @param callback callback to be executed on each invocation
 */
export function scheduleJob(rule: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string | number, callback: JobCallback): Job;

/**
 * Changes the timing of a Job, canceling all pending invocations.
 *
 * @param spec The new timing for this Job.
 * @return if the job could be rescheduled, {null} otherwise.
 */
export function rescheduleJob(job: Job | string, spec: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string): Job;

/** Dictionary of all Jobs, accessible by name. */
export let scheduledJobs: {[jobName: string]: Job};

/**
 * Cancels the job.
 *
 * @returns Whether the job has been cancelled with success.
 */
export function cancelJob(job: Job|string): boolean;
