// Type definitions for Agenda v2.0.0
// Project: https://github.com/agenda/agenda
// Definitions by: Meir Gottlieb <https://github.com/meirgottlieb>
//                 Jeff Principe <https://github.com/princjef>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

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
    database(url: string, collection?: string, options?: any, cb?: ResultCallback<Collection>): this;

    /**
     * Initialize agenda with an existing MongoDB connection.
     */
    mongo(db: Db, collection?: string, cb?: ResultCallback<Collection>): this;

    /**
     * Sets the agenda name.
     */
    name(value: string): this;

    /**
     * Sets the interval with which the queue is checked. A number in milliseconds or a frequency string.
     */
    processEvery(interval: string | number): this;

    /**
     * Takes a number which specifies the max number of jobs that can be running at any given moment. By default it
     * is 20.
     * @param value The value to set.
     */
    maxConcurrency(value: number): this;

    /**
     * Takes a number which specifies the default number of a specific job that can be running at any given moment.
     * By default it is 5.
     * @param value The value to set.
     */
    defaultConcurrency(value: number): this;

    /**
     * Takes a number which specifies the max number jobs that can be locked at any given moment. By default it is
     * 0 for no max.
     * @param value The value to set.
     */
    lockLimit(value: number): this;

    /**
     * Takes a number which specifies the default number of a specific job that can be locked at any given moment.
     * By default it is 0 for no max.
     * @param value The value to set.
     */
    defaultLockLimit(value: number): this;

    /**
     * Takes a number which specifies the default lock lifetime in milliseconds. By default it is 10 minutes. This
     * can be overridden by specifying the lockLifetime option to a defined job.
     * @param value The value to set.
     */
    defaultLockLifetime(value: number): this;

    /**
     * Returns an instance of a jobName with data. This does NOT save the job in the database. See below to learn
     * how to manually work with jobs.
     * @param name The name of the job.
     * @param data Data to associated with the job.
     */
    create<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, data?: T): Agenda.Job<T>;

    /**
     * Find all Jobs matching `query` and pass same back in cb().
     * @param query
     */
    jobs<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(query: any): Promise<Agenda.Job<T>[]>;

    /**
     * Removes all jobs in the database without defined behaviors. Useful if you change a definition name and want
     * to remove old jobs.
     */
    purge(): Promise<number>;

    /**
     * Defines a job with the name of jobName. When a job of job name gets run, it will be passed to fn(job, done).
     * To maintain asynchronous behavior, you must call done() when you are processing the job. If your function is
     * synchronous, you may omit done from the signature.
     * @param name The name of the jobs.
     * @param options The options for the job.
     * @param handler The handler to execute.
     */
    define<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, handler: (job: Agenda.Job<T>, done: (err?: Error) => void) => void): void;
    define<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, options: Agenda.JobOptions, handler: (job: Agenda.Job<T>, done: (err?: Error) => void) => void): void;

    /**
     * Runs job name at the given interval. Optionally, data and options can be passed in.
     * @param interval Can be a human-readable format String, a cron format String, or a Number.
     * @param names The name or names of the job(s) to run.
     * @param data An optional argument that will be passed to the processing function under job.attrs.data.
     * @param options An optional argument that will be passed to job.repeatEvery.
     */
    every<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(interval: number | string, names: string, data?: T, options?: any): Promise<Agenda.Job<T>>;
    every<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(interval: number | string, names: string[], data?: T, options?: any): Promise<Agenda.Job<T>[]>;

    /**
     * Schedules a job to run name once at a given time.
     * @param when A Date or a String such as tomorrow at 5pm.
     * @param names The name or names of the job(s) to run.
     * @param data An optional argument that will be passed to the processing function under job.attrs.data.
     */
    schedule<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(when: Date | string, names: string, data?: T): Promise<Agenda.Job<T>>;
    schedule<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(when: Date | string, names: string[], data?: T): Promise<Agenda.Job<T>[]>;

    /**
     * Schedules a job to run name once immediately.
     * @param name The name of the job to run.
     * @param data An optional argument that will be passed to the processing function under job.attrs.data.
     */
    now<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, data?: T): Promise<Agenda.Job<T>>;

    /**
     * Cancels any jobs matching the passed mongodb-native query, and removes them from the database.
     * @param query Mongodb native query.
     */
    cancel(query: any): Promise<number>;

    /**
     * Starts the job queue processing, checking processEvery time to see if there are new jobs.
     */
    start(): Promise<void>;

    /**
     * Stops the job queue processing. Unlocks currently running jobs.
     */
    stop(): Promise<void>;
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
         * Takes a number which specifies the max number jobs that can be locked at any given moment. By default it is
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
        mongo?: Db;

        /**
         * Specifies that Agenda should connect to MongoDB.
         */
        db?: {
            /**
             * The connection URL.
             * Required when using `db` option to connect.
             * Not required when an existing connection is passed as `mongo` property.
             */
            address?: string;

            /**
             * The name of the collection to use.
             */
            collection?: string;

            /**
             * Connection options to pass to MongoDB.
             * Not required when an existing connection is passed as `mongo` property.
             */
            options?: any;
        }
    }

    interface JobAttributesData {
        [key: string]: any;
    }

    /**
     * The database record associated with a job.
     */
    interface JobAttributes<T extends JobAttributesData = JobAttributesData> {
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
        data: T;

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
    interface Job<T extends JobAttributesData = JobAttributesData> {

        /**
         * The database record associated with the job.
         */
        attrs: JobAttributes<T>;

        /**
         * The agenda that created the job.
         */
        agenda: Agenda;

        /**
         * Specifies an interval on which the job should repeat.
         * @param interval A human-readable format String, a cron format String, or a Number.
         * @param options An optional argument that can include a timezone field or skipImmediate field.
         * The timezone should be a string as accepted by moment-timezone and is considered when using an interval in the cron string format.
         * Setting skipImmediate as true will skip the immediate run. The first run will occur only in configured interval.
         */
        repeatEvery(interval: string | number, options?: { timezone?: string, skipImmediate?: boolean }): this

        /**
         * Specifies a time when the job should repeat. [Possible values](https://github.com/matthewmueller/date#examples).
         * @param time
         */
        repeatAt(time: string): this

        /**
         * Disables the job.
         */
        disable(): this;

        /**
         * Enables the job.
         */
        enable(): this;

        /**
         * Ensure that only one instance of this job exists with the specified properties
         * @param value The properties associated with the job that must be unqiue.
         * @param opts
         */
        unique(value: any, opts?: { insertOnly?: boolean }): this;

        /**
         * Specifies the next time at which the job should run.
         * @param time The next time at which the job should run.
         */
        schedule(time: string | Date): this;

        /**
         * Specifies the priority weighting of the job.
         * @param value The priority of the job (lowest|low|normal|high|highest|number).
         */
        priority(value: string | number): this;

        /**
         * Sets job.attrs.failedAt to now, and sets job.attrs.failReason to reason.
         * @param reason A message or Error object that indicates why the job failed.
         */
        fail(reason: string | Error): this;

        /**
         * Runs the given job and calls callback(err, job) upon completion. Normally you never need to call this manually
         */
        run(): Promise<this>;

        /**
         * Returns true if the job is running; otherwise, returns false.
         */
        isRunning(): boolean;

        /**
         * Saves the job into the database.
         */
        save(): Promise<this>;

        /**
         * Removes the job from the database and cancels the job.
         */
        remove(): Promise<void>;

        /**
         * Resets the lock on the job. Useful to indicate that the job hasn't timed out when you have very long running
         * jobs.
         */
        touch(): Promise<this>;

        /**
         * Calculates next time the job should run
         */
        computeNextRunAt(): this;
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
