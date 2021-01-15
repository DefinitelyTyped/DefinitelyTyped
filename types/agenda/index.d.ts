// Type definitions for Agenda v3.0.1
// Project: https://github.com/agenda/agenda
// Definitions by: Meir Gottlieb <https://github.com/meirgottlieb>
//                 Jeff Principe <https://github.com/princjef>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="node" />

import { EventEmitter } from "events";

import { MongoClient, Db, Collection, ObjectID, FilterQuery, SortOptionObject } from "mongodb";

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
     * Connect to the spec'd MongoDB server and database.
     * @param url MongoDB server URI
     * @param collection name of collection to use. Defaults to `agendaJobs`
     * @param options options for connecting
     * @param cb callback of MongoDB connection
     * NOTE:
     * If `url` includes auth details then `options` must specify: { 'uri_decode_auth': true }. This does Auth on
     * the specified database, not the Admin database. If you are using Auth on the Admin DB and not on the Agenda DB,
     * then you need to authenticate against the Admin DB and then pass the MongoDB instance into the constructor
     * or use Agenda.mongo(). If your app already has a MongoDB connection then use that. ie. specify config.mongo in
     * the constructor or use Agenda.mongo().
     */
    database(url: string, collection?: string, options?: any, cb?: ResultCallback<Collection>): this;

    /**
     * Build method used to add MongoDB connection details
     * @param mdb instance of MongoClient to use
     * @param collection name collection we want to use ('agendaJobs')
     * @param cb called when MongoDB connection fails or passes
     */
    mongo(mdb: MongoClient | Db, collection?: string, cb?: ResultCallback<Collection>): this;

    /**
     * Set name of queue
     * @param name name of agenda instance
     */
    name(name: string): this;

    /**
     * Set the default process interval
     * @param time - time to process, expressed in human interval
     */
    processEvery(time: string | number): this;

    /**
     * Set the concurrency for jobs (globally), type does not matter
     * @param concurrency max concurrency value
     * @returns agenda instance
     */
    maxConcurrency(concurrency: number): this;

    /**
     * Set the default concurrency for each job
     * @param concurrency default concurrency
     */
    defaultConcurrency(concurrency: number): this;

    /**
     * Set the default amount jobs that are allowed to be locked at one time (GLOBAL)
     * @param limit num Lock limit
     */
    lockLimit(limit: number): this;

    /**
     * Set default lock limit per job type
     * @param  num Lock limit per job
     */
    defaultLockLimit(num: number): this;

    /**
     * Set the default lock time (in ms)
     * Default is 10 * 60 * 1000 ms (10 minutes)
     * @param ms time in ms to set default lock
     */
    defaultLockLifetime(ms: number): this;

    /**
     * Given a name and some data, create a new job
     * @param name name of job
     * @param data data to set for job
     */
    create<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, data?: T): Agenda.Job<T>;

    /**
     * Find all Jobs matching `query`
     * @param query object for MongoDB
     * @param sort object for MongoDB
     * @param limit number of documents to return from MongoDB
     * @param number of documents to skip in MongoDB
     * @returns resolves when fails or passes
     */
    jobs<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(
        query: FilterQuery<Agenda.JobAttributes>,
        sort?: SortOptionObject<Agenda.JobAttributes>,
        limit?: number,
        skip?: number):
        Promise<Agenda.Job<T>[]>;

    /**
     * Removes all jobs from queue
     * @returns resolved when job cancelling fails or passes
     */
    purge(): Promise<number>;

    /**
     * Setup definition for job
     * Method is used by consumers of lib to setup their functions
     * @param name name of job
     * @param options options for job to run
     * @param processor function to be called to run actual job
     */
    define<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, processor: (job: Agenda.Job<T>, done: (err?: Error) => void) => void): void;
    define<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, options: Agenda.JobOptions, processor: (job: Agenda.Job<T>, done: (err?: Error) => void) => void): void;

    /**
     * Creates a scheduled job with given interval and name/names of the job to run
     * @param interval - run every X interval
     * @param names - String or strings of jobs to schedule
     * @param data - data to run for job
     * @param options - options to run job for
     * @returns Job/s created. Resolves when schedule fails or passes
     */
    every<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(interval: number | string, names: string, data?: T, options?: any): Promise<Agenda.Job<T>>;
    every<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(interval: number | string, names: string[], data?: T, options?: any): Promise<Agenda.Job<T>[]>;

    /**
     * Schedule a job or jobs at a specific time
     * @param when when the job gets run
     * @param names array of job names to run
     * @param data data to send to job
     * @returns job or jobs created
     */
    schedule<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(when: Date | string, names: string, data?: T): Promise<Agenda.Job<T>>;
    schedule<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(when: Date | string, names: string[], data?: T): Promise<Agenda.Job<T>[]>;

    /**
     * Create a job for this exact moment
     * @param name name of job to schedule
     * @param data data to pass to job
     */
    now<T extends Agenda.JobAttributesData = Agenda.JobAttributesData>(name: string, data?: T): Promise<Agenda.Job<T>>;

    /**
     * Cancels any jobs matching the passed MongoDB query, and removes them from the database.
     * @param query MongoDB query to use when cancelling
     * @caller client code, Agenda.purge(), Job.remove()
     */
    cancel(query: any): Promise<number>;

    /**
     * Starts processing jobs using processJobs() methods, storing an interval ID
     * This method will only resolve if a db has been set up beforehand.
     * @returns resolves if db set beforehand, returns undefined otherwise
     */
    start(): Promise<void>;

    /**
     * Clear the interval that processes the jobs
     * @returns resolves when job unlocking fails or passes
     */
    stop(): Promise<void>;
}

declare namespace Agenda {

    /**
     * Agenda Configuration.
     */
    interface AgendaConfiguration {

        /**
         * Sets the `lastModifiedBy` field to `name` in the jobs collection. Useful if you have multiple job processors
         * (agendas) and want to see which job queue last ran the job.
         */
        name?: string;

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
        remove(): Promise<number>;

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
