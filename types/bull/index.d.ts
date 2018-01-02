// Type definitions for bull 3.3
// Project: https://github.com/OptimalBits/bull
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
//                 Cameron Crothers <https://github.com/JProgrammer>
//                 Marshall Cottrell <https://github.com/marshall007>
//                 Weeco <https://github.com/weeco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Redis from "ioredis";
import * as Promise from "bluebird";

/**
 * This is the Queue constructor.
 * It creates a new Queue that is persisted in Redis.
 * Everytime the same queue is instantiated it tries to process all the old jobs that may exist from a previous unfinished session.
 */
declare const Bull: {
  (queueName: string, opts?: Bull.QueueOptions): Bull.Queue;
  (queueName: string, url?: string): Bull.Queue; // tslint:disable-line unified-signatures
  new (queueName: string, opts?: Bull.QueueOptions): Bull.Queue;
  new (queueName: string, url?: string): Bull.Queue; // tslint:disable-line unified-signatures
};

declare namespace Bull {
  interface RateLimiter {
    /** Max numbers of jobs processed */
    max: number;
    /** Per duration in milliseconds */
    duration: number;
  }

  interface QueueOptions {
    /**
     * Options passed directly to the `ioredis` constructor
     */
    redis?: Redis.RedisOptions;

    /**
     * When specified, the `Queue` will use this function to create new `ioredis` client connections.
     * This is useful if you want to re-use connections.
     */
    createClient?(type: 'client' | 'subscriber', redisOpts?: Redis.RedisOptions): Redis.Redis;

    /**
     * Prefix to use for all redis keys
     */
    prefix?: string;

    settings?: AdvancedSettings;

    limiter?: RateLimiter;
  }

  interface AdvancedSettings {
    /**
     * Key expiration time for job locks
     */
    lockDuration?: number;

    /**
     * How often check for stalled jobs (use 0 for never checking)
     */
    stalledInterval?: number;

    /**
     * Max amount of times a stalled job will be re-processed
     */
    maxStalledCount?: number;

    /**
     * Poll interval for delayed jobs and added jobs
     */
    guardInterval?: number;

    /**
     * Delay before processing next job in case of internal error
     */
    retryProcessDelay?: number;
  }

  type DoneCallback = (error?: Error | null, value?: any) => void;

  type JobId = number | string;

  interface Job {
    id: JobId;

    /**
     * The custom data passed when the job was created
     */
    data: any;

    /**
     * Report progress on a job
     */
    progress(value: any): Promise<void>;

    /**
     * Returns a promise resolving to the current job's status.
     * Please take note that the implementation of this method is not very efficient, nor is
     * it atomic. If your queue does have a very large quantity of jobs, you may want to
     * avoid using this method.
     */
    getState(): Promise<JobStatus>;

    /**
     * Update a specific job's data. Promise resolves when the job has been updated.
     */
    update(data: any): Promise<void>;

    /**
     * Removes a job from the queue and from any lists it may be included in.
     * The returned promise resolves when the job has been removed.
     */
    remove(): Promise<void>;

    /**
     * Re-run a job that has failed. The returned promise resolves when the job
     * has been scheduled for retry.
     */
    retry(): Promise<void>;

    /**
     * Returns a promise that resolves to the returned data when the job has been finished.
     * TODO: Add a watchdog to check if the job has finished periodically.
     * since pubsub does not give any guarantees.
     */
    finished(): Promise<any>;

    /**
     * Promotes a job that is currently "delayed" to the "waiting" state and executed as soon as possible.
     */
    promote(): Promise<void>;
  }

  type JobStatus = 'completed' | 'waiting' | 'active' | 'delayed' | 'failed';

  interface BackoffOptions {
    /**
     * Backoff type, which can be either `fixed` or `exponential`
     */
    type: 'fixed' | 'exponential';

    /**
     * Backoff delay, in milliseconds
     */
    delay: number;
  }

  interface RepeatOptions {
    /**
     * Cron pattern specifying when the job should execute
     */
    cron: string;

    /**
     * Timezone
     */
    tz?: string;

    /**
     * End date when the repeat job should stop repeating
     */
    endDate?: Date | string | number;
  }

  interface JobOptions {
    /**
     * Optional priority value. ranges from 1 (highest priority) to MAX_INT  (lowest priority).
     * Note that using priorities has a slight impact on performance, so do not use it if not required
     */
    priority?: number;

    /**
     * An amount of miliseconds to wait until this job can be processed.
     * Note that for accurate delays, both server and clients should have their clocks synchronized. [optional]
     */
    delay?: number;

    /**
     * The total number of attempts to try the job until it completes
     */
    attempts?: number;

    /**
     * Repeat job according to a cron specification
     */
    repeat?: RepeatOptions;

    /**
     * Backoff setting for automatic retries if the job fails
     */
    backoff?: number | BackoffOptions;

    /**
     * A boolean which, if true, adds the job to the right
     * of the queue instead of the left (default false)
     */
    lifo?: boolean;

    /**
     *  The number of milliseconds after which the job should be fail with a timeout error
     */
    timeout?: number;

    /**
     * Override the job ID - by default, the job ID is a unique
     * integer, but you can use this setting to override it.
     * If you use this option, it is up to you to ensure the
     * jobId is unique. If you attempt to add a job with an id that
     * already exists, it will not be added.
     */
    jobId?: JobId;

    /**
     * A boolean which, if true, removes the job when it successfully completes.
     * Default behavior is to keep the job in the completed set.
     */
    removeOnComplete?: boolean;

    /**
     * A boolean which, if true, removes the job when it fails after all attempts
     * Default behavior is to keep the job in the completed set.
     */
    removeOnFail?: boolean;
  }

  interface JobCounts {
    wait: number;
    active: number;
    completed: number;
    failed: number;
    delayed: number;
  }

  interface JobInformation {
    key: string;
    name: string;
    id?: string;
    endDate?: number;
    tz?: string;
    cron: string;
    next: number;
  }

  interface Queue {
    /**
     * Returns a promise that resolves when Redis is connected and the queue is ready to accept jobs.
     * This replaces the `ready` event emitted on Queue in previous verisons.
     */
    isReady(): Promise<this>;

    /**
     * Defines a processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * The done callback can be called with an Error instance, to signal that the job did not complete successfully,
     * or with a result as second argument as second argument (e.g.: done(null, result);) when the job is successful.
     * Errors will be passed as a second argument to the "failed" event;
     * results, as a second argument to the "completed" event.
     */
    process(callback: (job: Job, done: DoneCallback) => void): void;

    /**
     * Defines a processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * A promise must be returned to signal job completion.
     * If the promise is rejected, the error will be passed as a second argument to the "failed" event.
     * If it is resolved, its value will be the "completed" event's second argument.
     */
    process(callback: (job: Job) => void): Promise<any>;

    /**
     * Defines a processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * A promise must be returned to signal job completion.
     * If the promise is rejected, the error will be passed as a second argument to the "failed" event.
     * If it is resolved, its value will be the "completed" event's second argument.
     *
     * @param concurrency Bull will then call you handler in parallel respecting this max number.
     */
    process(concurrency: number, callback: (job: Job) => void): Promise<any>;

    /**
     * Defines a processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * The done callback can be called with an Error instance, to signal that the job did not complete successfully,
     * or with a result as second argument as second argument (e.g.: done(null, result);) when the job is successful.
     * Errors will be passed as a second argument to the "failed" event;
     * results, as a second argument to the "completed" event.
     *
     * @param concurrency Bull will then call you handler in parallel respecting this max number.
     */
    process(concurrency: number, callback: (job: Job, done: DoneCallback) => void): void;

    /**
     * Defines a named processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * A promise must be returned to signal job completion.
     * If the promise is rejected, the error will be passed as a second argument to the "failed" event.
     * If it is resolved, its value will be the "completed" event's second argument.
     *
     * @param name Bull will only call the handler if the job name matches
     */
    // tslint:disable-next-line:unified-signatures
    process(name: string, callback: (job: Job) => void): Promise<any>;

    /**
     * Defines a processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * The done callback can be called with an Error instance, to signal that the job did not complete successfully,
     * or with a result as second argument as second argument (e.g.: done(null, result);) when the job is successful.
     * Errors will be passed as a second argument to the "failed" event;
     * results, as a second argument to the "completed" event.
     *
     * @param name Bull will only call the handler if the job name matches
     */
    // tslint:disable-next-line:unified-signatures
    process(name: string, callback: (job: Job, done: DoneCallback) => void): void;

    /**
     * Defines a named processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * A promise must be returned to signal job completion.
     * If the promise is rejected, the error will be passed as a second argument to the "failed" event.
     * If it is resolved, its value will be the "completed" event's second argument.
     *
     * @param name Bull will only call the handler if the job name matches
     * @param concurrency Bull will then call you handler in parallel respecting this max number.
     */
    process(name: string, concurrency: number, callback: (job: Job) => void): Promise<any>;

    /**
     * Defines a processing function for the jobs placed into a given Queue.
     *
     * The callback is called everytime a job is placed in the queue.
     * It is passed an instance of the job as first argument.
     *
     * The done callback can be called with an Error instance, to signal that the job did not complete successfully,
     * or with a result as second argument as second argument (e.g.: done(null, result);) when the job is successful.
     * Errors will be passed as a second argument to the "failed" event;
     * results, as a second argument to the "completed" event.
     *
     * @param name Bull will only call the handler if the job name matches
     * @param concurrency Bull will then call you handler in parallel respecting this max number.
     */
    process(name: string, concurrency: number, callback: (job: Job, done: DoneCallback) => void): void;

    /**
     * Creates a new job and adds it to the queue.
     * If the queue is empty the job will be executed directly,
     * otherwise it will be placed in the queue and executed as soon as possible.
     */
    add(data: any, opts?: JobOptions): Promise<Job>;

    /**
     * Creates a new named job and adds it to the queue.
     * If the queue is empty the job will be executed directly,
     * otherwise it will be placed in the queue and executed as soon as possible.
     */
    add(name: string, data: any, opts?: JobOptions): Promise<Job>;

    /**
     * Returns a promise that resolves when the queue is paused.
     * The pause is global, meaning that all workers in all queue instances for a given queue will be paused.
     * A paused queue will not process new jobs until resumed,
     * but current jobs being processed will continue until they are finalized.
     *
     * Pausing a queue that is already paused does nothing.
     */
    pause(): Promise<void>;

    /**
     * Returns a promise that resolves when the queue is resumed after being paused.
     * The resume is global, meaning that all workers in all queue instances for a given queue will be resumed.
     *
     * Resuming a queue that is not paused does nothing.
     */
    resume(): Promise<void>;

    /**
     * Returns a promise that returns the number of jobs in the queue, waiting or paused.
     * Since there may be other processes adding or processing jobs, this value may be true only for a very small amount of time.
     */
    count(): Promise<number>;

    /**
     * Empties a queue deleting all the input lists and associated jobs.
     */
    empty(): Promise<void>;

    /**
     * Closes the underlying redis client. Use this to perform a graceful shutdown.
     *
     * `close` can be called from anywhere, with one caveat:
     * if called from within a job handler the queue won't close until after the job has been processed
     */
    close(): Promise<void>;

    /**
     * Returns a promise that will return the job instance associated with the jobId parameter.
     * If the specified job cannot be located, the promise callback parameter will be set to null.
     */
    getJob(jobId: JobId): Promise<Job>;

    /**
     * Returns a promise that will return an array with the active jobs between start and end.
     */
    getActive(start?: number, end?: number): Promise<Job[]>;

    /**
     * Returns a promise that will return an array with the delayed jobs between start and end.
     */
    getDelayed(start?: number, end?: number): Promise<Job[]>;

    /**
     * Returns a promise that will return an array with the completed jobs between start and end.
     */
    getCompleted(start?: number, end?: number): Promise<Job[]>;

    /**
     * Returns a promise that will return an array with the failed jobs between start and end.
     */
    getFailed(start?: number, end?: number): Promise<Job[]>;

    /**
     * Returns JobInformation of repeatable jobs (ordered descending). Provide a start and/or an end
     * index to limit the number of results. Start defaults to 0, end to -1 and asc to false.
     */
    getRepeatableJobs(start?: number, end?: number, asc?: boolean): Promise<JobInformation[]>;

    /**
     * ???
     */
    nextRepeatableJob(name: string, data: any, opts: JobOptions): Promise<Job>;

    /**
     * Removes a given repeatable job. The RepeatOpts needs to be the same as the ones used for
     * the job when it was added.
     */
    removeRepeatable(repeat: RepeatOptions): Promise<void>;

    /**
     * Removes a given repeatable job. The RepeatOpts needs to be the same as the ones used for
     * the job when it was added.
     *
     * name: The name of the to be removed job
     */
    removeRepeatable(name: string, repeat: RepeatOptions): Promise<void>;

    /**
     * Returns a promise that resolves with the job counts for the given queue.
     */
    getJobCounts(): Promise<JobCounts>;

    /**
     * Returns a promise that resolves with the quantity of completed jobs.
     */
    getCompletedCount(): Promise<number>;

    /**
     * Returns a promise that resolves with the quantity of failed jobs.
     */
    getFailedCount(): Promise<number>;

    /**
     * Returns a promise that resolves with the quantity of delayed jobs.
     */
    getDelayedCount(): Promise<number>;

    /**
     * Returns a promise that resolves with the quantity of waiting jobs.
     */
    getWaitingCount(): Promise<number>;

    /**
     * Returns a promise that resolves with the quantity of paused jobs.
     */
    getPausedCount(): Promise<number>;

    /**
     * Returns a promise that resolves with the quantity of active jobs.
     */
    getActiveCount(): Promise<number>;

    /**
     * Returns a promise that resolves to the quantity of repeatable jobs.
     */
    getRepeatableCount(): Promise<number>;

    /**
     * Tells the queue remove all jobs created outside of a grace period in milliseconds.
     * You can clean the jobs with the following states: completed, waiting, active, delayed, and failed.
     * @param grace Grace period in milliseconds.
     * @param status Status of the job to clean. Values are completed, wait, active, delayed, and failed. Defaults to completed.
     * @param limit Maximum amount of jobs to clean per call. If not provided will clean all matching jobs.
     */
    clean(grace: number, status?: JobStatus, limit?: number): Promise<Job[]>;

    /**
     * Listens to queue events
     */
    on(event: string, callback: (...args: any[]) => void): this;

    /**
     * An error occured
     */
    on(event: 'error', callback: ErrorEventCallback): this;

    /**
     * A job has started. You can use `jobPromise.cancel()` to abort it
     */
    on(event: 'active', callback: ActiveEventCallback): this;

    /**
     * A job has been marked as stalled.
     * This is useful for debugging job workers that crash or pause the event loop.
     */
    on(event: 'stalled', callback: StalledEventCallback): this;

    /**
     * A job's progress was updated
     */
    on(event: 'progress', callback: ProgressEventCallback): this;

    /**
     * A job successfully completed with a `result`
     */
    on(event: 'completed', callback: CompletedEventCallback): this;

    /**
     * A job failed with `err` as the reason
     */
    on(event: 'failed', callback: FailedEventCallback): this;

    /**
     * The queue has been paused
     */
    on(event: 'paused', callback: EventCallback): this;

    /**
     * The queue has been resumed
     */
    on(event: 'resumed', callback: EventCallback): this; // tslint:disable-line unified-signatures

    /**
     * Old jobs have been cleaned from the queue.
     * `jobs` is an array of jobs that were removed, and `type` is the type of those jobs.
     *
     * @see Queue#clean() for details
     */
    on(event: 'cleaned', callback: CleanedEventCallback): this;
  }

  type EventCallback = () => void;

  type ErrorEventCallback = (error: Error) => void;

  interface JobPromise {
    /**
     * Abort this job
     */
    cancel(): void;
  }

  type ActiveEventCallback = (job: Job, jobPromise?: JobPromise) => void;

  type StalledEventCallback = (job: Job) => void;

  type ProgressEventCallback = (job: Job, progress: any) => void;

  type CompletedEventCallback = (job: Job, result: any) => void;

  type FailedEventCallback = (job: Job, error: Error) => void;

  type CleanedEventCallback = (jobs: Job[], status: JobStatus) => void;
}

export = Bull;
