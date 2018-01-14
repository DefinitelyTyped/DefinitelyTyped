// Type definitions for Agenda v1.0.0
// Project: https://github.com/rschmukler/agenda
// Definitions by: Meir Gottlieb <https://github.com/meirgottlieb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { EventEmitter } from "events";
import { Db, Collection, ObjectID } from "mongodb";

export = Agenda;

interface Callback {
    (err?: Error): void;
}

interface ResultCallback<T> {
    (err?: Error, result?: T): void;
}


declare class Agenda extends EventEmitter {
    /**
     * Constructs a new Agenda object.
     * @param config Optional configuration to initialize the Agenda.
     * @param cb Optional callback called with the MongoDB colleciton.
     */
    constructor(config?: Agenda.AgendaConfiguration, cb?: ResultCallback<Collection>);

    /**
     * Connect to the specified MongoDB server and database.
     */
    database(url: string, collection?: string, options?: any, cb?: ResultCallback<Collection>): Agenda;

    /**
     * Initialize agenda with an existing MongoDB connection.
     */
    mongo(db: Db, collection?: string, cb?: ResultCallback<Collection>): Agenda;

    /**
     * Sets the agenda name.
     */
    name(value: string): Agenda;

    /**
     * Sets the interval with which the queue is checked. A number in milliseconds or a frequency string.
     */
    processEvery(interval: string | number): Agenda;

    /**
     * Takes a number which specifies the max number of jobs that can be running at any given moment. By default it
     * is 20.
     * @param value The value to set.
     */
    maxConcurrency(value: number): Agenda;

    /**
     * Takes a number which specifies the default number of a specific job that can be running at any given moment.
     * By default it is 5.
     * @param value The value to set.
     */
    defaultConcurrency(value: number): Agenda;

    /**
     * Takes a number shich specifies the max number jobs that can be locked at any given moment. By default it is
     * 0 for no max.
     * @param value The value to set.
     */
    lockLimit(value: number): Agenda;

    /**
     * Takes a number which specifies the default number of a specific job that can be locked at any given moment.
     * By default it is 0 for no max.
     * @param value The value to set.
     */
    defaultLockLimit(value: number): Agenda;

    /**
     * Takes a number which specifies the default lock lifetime in milliseconds. By default it is 10 minutes. This
     * can be overridden by specifying the lockLifetime option to a defined job.
     * @param value The value to set.
     */
    defaultLockLifetime(value: number): Agenda;

    /**
     * Returns an instance of a jobName with data. This does NOT save the job in the database. See below to learn
     * how to manually work with jobs.
     * @param name The name of the job.
     * @param data Data to associated with the job.
     */
    create(name: string, data?: any): Agenda.Job;

    /**
     * Find all Jobs matching `query` and pass same back in cb().
     * @param query
     * @param cb
     */
    jobs(query: any, cb: ResultCallback<Agenda.Job[]>): void;

    /**
     * Removes all jobs in the database without defined behaviors. Useful if you change a definition name and want
     * to remove old jobs.
     * @param cb Called with the number of jobs removed.
     */
    purge(cb?: ResultCallback<number>): void;

    /**
     * Defines a job with the name of jobName. When a job of job name gets run, it will be passed to fn(job, done).
     * To maintain asynchronous behavior, you must call done() when you are processing the job. If your function is
     * synchronous, you may omit done from the signature.
     * @param name The name of the jobs.
     * @param options The options for the job.
     * @param handler The handler to execute.
     */
    define(name: string, handler: (job: Agenda.Job, done: (err?: Error) => void) => void): void;
    define(name: string, options: Agenda.JobOptions, handler: (job: Agenda.Job, done: (err?: Error) => void) => void): void;

    /**
     * Runs job name at the given interval. Optionally, data and options can be passed in.
     * @param interval Can be a human-readable format String, a cron format String, or a Number.
     * @param names The name or names of the job(s) to run.
     * @param data An optional argument that will be passed to the processing function under job.attrs.data.
     * @param options An optional argument that will be passed to job.repeatEvery.
     * @param cb An optional callback function which will be called when the job has been persisted in the database.
     */
    every(interval: number | string, names: string, data?: any, options?: any, cb?: ResultCallback<Agenda.Job>): Agenda.Job;
    every(interval: number | string, names: string[], data?: any, options?: any, cb?: ResultCallback<Agenda.Job[]>): Agenda.Job[];

    /**
     * Schedules a job to run name once at a given time.
     * @param when A Date or a String such as tomorrow at 5pm.
     * @param names The name or names of the job(s) to run.
     * @param data An optional argument that will be passed to the processing function under job.attrs.data.
     * @param cb An optional callback function which will be called when the job has been persisted in the database.
     */
    schedule(when: Date | string, names: string, data?: any, cb?: ResultCallback<Agenda.Job>): Agenda.Job;
    schedule(when: Date | string, names: string[], data?: any, cb?: ResultCallback<Agenda.Job[]>): Agenda.Job[];

    /**
     * Schedules a job to run name once immediately.
     * @param name The name of the job to run.
     * @param data An optional argument that will be passed to the processing function under job.attrs.data.
     * @param cb An optional callback function which will be called when the job has been persisted in the database.
     */
    now(name: string, data?: any, cb?: ResultCallback<Agenda.Job>): Agenda.Job;

    /**
     * Cancels any jobs matching the passed mongodb-native query, and removes them from the database.
     * @param query Mongodb native query.
     * @param cb Called with the number of jobs removed.
     */
    cancel(query: any, cb?: ResultCallback<number>): void;

    /**
     * Starts the job queue processing, checking processEvery time to see if there are new jobs.
     */
    start(): void;

    /**
     * Stops the job queue processing. Unlocks currently running jobs.
     * @param cb Called after the job processing queue shuts down and unlocks all jobs.
     */
    stop(cb: Callback): void;
}

declare namespace Agenda {

    /**
     * Agenda Configuration.
     */
    interface AgendaConfiguration {

        /**
         * Sets the interval with which the queue is checked. A number in milliseconds or a frequency string.
         */
        processEvery?: string | number;

        /**
         * Takes a number which specifies the default number of a specific job that can be running at any given moment.
         * By default it is 5.
         */
        defaultConcurrency?: number;

        /**
         * Takes a number which specifies the max number of jobs that can be running at any given moment. By default it
         * is 20.
         */
        maxConcurrency?: number;

        /**
         * Takes a number which specifies the default number of a specific job that can be locked at any given moment.
         * By default it is 0 for no max.
         */
        defaultLockLimit?: number;

        /**
         * Takes a number shich specifies the max number jobs that can be locked at any given moment. By default it is
         * 0 for no max.
         */
        lockLimit?: number;

        /**
         * Takes a number which specifies the default lock lifetime in milliseconds. By default it is 10 minutes. This
         * can be overridden by specifying the lockLifetime option to a defined job.
         */
        defaultLockLifetime?: number;

        /**
         * Specifies that Agenda should be initialized using and existing MongoDB connection.
         */
        mongo?: {
            /**
             * The MongoDB database connection to use.
             */
            db: Db;

            /**
             * The name of the collection to use.
             */
            collection?: string;
        }

        /**
         * Specifies that Agenda should connect to MongoDB.
         */
        db?: {
            /**
             * The connection URL.
             */
            address: string;

            /**
             * The name of the collection to use.
             */
            collection?: string;

            /**
             * Connection options to pass to MongoDB.
             */
            options?: any;
        }
    }

    /**
     * The database record associated with a job.
     */
    interface JobAttributes {
        /**
         * The record identity.
         */
        _id: ObjectID;

        /**
         * The name of the job.
         */
        name: string;

        /**
         * The type of the job (single|normal).
         */
        type: string;

        /**
         * The job details.
         */
        data: { [name: string]: any };

        /**
         * The priority of the job.
         */
        priority: number;

        /**
         * How often the job is repeated using a human-readable or cron format.
         */
        repeatInterval: string | number;

        /**
         * The timezone that conforms to [moment-timezone](http://momentjs.com/timezone/).
         */
        repeatTimezone: string;

        /**
         * Date/time the job was las modified.
         */
        lastModifiedBy: string;

        /**
         * Date/time the job will run next.
         */
        nextRunAt: Date;

        /**
         * Date/time the job was locked.
         */
        lockedAt: Date;

        /**
         * Date/time the job was last run.
         */
        lastRunAt: Date;

        /**
         * Date/time the job last finished running.
         */
        lastFinishedAt: Date;

        /**
         * The reason the job failed.
         */
        failReason: string;

        /**
         * The number of times the job has failed.
         */
        failCount: number;

        /**
         * The date/time the job last failed.
         */
        failedAt: Date;

        /**
         * Job's state
         */
        disabled: boolean
    }

    /**
     * A scheduled job.
     */
    interface Job {

        /**
         * The database record associated with the job.
         */
        attrs: JobAttributes;

        /**
         * The agenda that created the job.
         */
        agenda: Agenda;

        /**
         * Specifies an interval on which the job should repeat.
         * @param interval A human-readable format String, a cron format String, or a Number.
         * @param options An optional argument that can include a timezone field. The timezone should be a string as
         * accepted by moment-timezone and is considered when using an interval in the cron string format.
         */
        repeatEvery(interval: string | number, options?: { timezone?: string }): Job

        /**
         * Specifies a time when the job should repeat. [Possible values](https://github.com/matthewmueller/date#examples).
         * @param time
         */
        repeatAt(time: string): Job

        /**
         * Disables the job.
         */
        disable(): Job;

        /**
         * Enables the job.
         */
        enable(): Job;

        /**
         * Ensure that only one instance of this job exists with the specified properties
         * @param value The properties associated with the job that must be unqiue.
         * @param opts
         */
        unique(value: any, opts?: { insertOnly?: boolean }): Job;

        /**
         * Specifies the next time at which the job should run.
         * @param time The next time at which the job should run.
         */
        schedule(time: string | Date): Job;

        /**
         * Specifies the priority weighting of the job.
         * @param value The priority of the job (lowest|low|normal|high|highest|number).
         */
        priority(value: string | number): Job;

        /**
         * Sets job.attrs.failedAt to now, and sets job.attrs.failReason to reason.
         * @param reason A message or Error object that indicates why the job failed.
         */
        fail(reason: string | Error): Job;

        /**
         * Runs the given job and calls callback(err, job) upon completion. Normally you never need to call this manually
         * @param cb Called when the job is completed.
         */
        run(cb?: ResultCallback<Job>): Job;

        /**
         * Returns true if the job is running; otherwise, returns false.
         */
        isRunning(): boolean;

        /**
         * Saves the job into the database.
         * @param cb  Called when the job is saved.
         */
        save(cb?: ResultCallback<Job>): Job;

        /**
         * Removes the job from the database and cancels the job.
         * @param cb Called after the job has beeb removed from the database.
         */
        remove(cb?: Callback): void;

        /**
         * Resets the lock on the job. Useful to indicate that the job hasn't timed out when you have very long running
         * jobs.
         * @param cb Called after the job has been saved to the database.
         */
        touch(cb?: Callback): void;

        /**
         * Calculates next time the job should run
         */
        computeNextRunAt(): Job;
    }

    interface JobOptions {

        /**
         * Maximum number of that job that can be running at once (per instance of agenda)
         */
        concurrency?: number;

        /**
         * Maximum number of that job that can be locked at once (per instance of agenda)
         */
        lockLimit?: number;

        /**
         * Interval in ms of how long the job stays locked for (see multiple job processors for more info). A job will
         * automatically unlock if done() is called.
         */
        lockLifetime?: number;

        /**
         * (lowest|low|normal|high|highest|number) specifies the priority of the job. Higher priority jobs will run
         * first.
         */
        priority?: string | number;
    }
}
