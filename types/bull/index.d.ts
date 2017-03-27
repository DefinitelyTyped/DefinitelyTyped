// Type definitions for bull 2.1.2
// Project: https://github.com/OptimalBits/bull
// Definitions by: Bruno Grieder <https://github.com/bgrieder>, Cameron Crothers <https://github.com/JProgrammer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redis" />

declare module "bull" {

    import * as Redis from "redis";

    /**
    * This is the Queue constructor.
    * It creates a new Queue that is persisted in Redis.
    * Everytime the same queue is instantiated it tries to process all the old jobs that may exist from a previous unfinished session.
    */
    function Bull(queueName: string, redisPort: number, redisHost: string, redisOpt?: Redis.ClientOpts): Bull.Queue;

    namespace Bull {

        export interface DoneCallback {
            (error?: Error, value?: any): void
        }

        export interface Job {

            jobId: string

            /**
            * The custom data passed when the job was created
            */
            data: Object;

            /**
             * Report progress on a job
             */
            progress(value: any): Promise<void>;

            /**
             * Removes a Job from the queue from all the lists where it may be included.
             * @returns {Promise} A promise that resolves when the job is removed.
             */
            remove(): Promise<void>;

            /**
             * Rerun a Job that has failed.
             * @returns {Promise} A promise that resolves when the job is scheduled for retry.
             */
            retry(): Promise<void>;

            /**
             * Returns a promise the resolves when the job has been finished.
             * TODO: Add a watchdog to check if the job has finished periodically.
             * since pubsub does not give any guarantees.
             */
            finished(): Promise<void>;
        }

        export interface Backoff {

            /**
             * Backoff type, which can be either `fixed` or `exponential`
             */
            type: string

            /**
             * Backoff delay, in milliseconds
             */
            delay: number;
        }

        export interface AddOptions {
            /**
             * An amount of miliseconds to wait until this job can be processed.
             * Note that for accurate delays, both server and clients should have their clocks synchronized
             */
            delay?: number;

            /**
             * A number of attempts to retry if the job fails [optional]
             */
            attempts?: number;

            /**
             * Backoff setting for automatic retries if the job fails
             */
            backoff?: number | Backoff

            /**
             * A boolean which, if true, adds the job to the right
             * of the queue instead of the left (default false)
             */
            lifo?: boolean;

            /**
             *  The number of milliseconds after which the job should be fail with a timeout error
             */
            timeout?: number;
        }

        export interface Queue {

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
             * concurrency: Bull will then call you handler in parallel respecting this max number.
            */
            process(concurrency: number, callback: (job: Job, done: DoneCallback) => void): void;

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
             *
             * concurrency: Bull will then call you handler in parallel respecting this max number.
            */
            process(concurrency: number, callback: (job: Job) => void): Promise<any>;

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

            // process(callback: (job: Job, done?: DoneCallback) => void): Promise<any>;

            /**
             * Creates a new job and adds it to the queue.
             * If the queue is empty the job will be executed directly,
             * otherwise it will be placed in the queue and executed as soon as possible.
             */
            add(data: Object, opts?: AddOptions): Promise<Job>;

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
            getJob(jobId: string): Promise<Job>;

            /**
             * Tells the queue remove all jobs created outside of a grace period in milliseconds.
             * You can clean the jobs with the following states: completed, waiting, active, delayed, and failed.
             */
            clean(gracePeriod: number, jobsState?: string): Promise<Job[]>;

            /**
             * Listens to queue events
             * 'ready', 'error', 'activ', 'progress', 'completed', 'failed', 'paused', 'resumed', 'cleaned'
             */
            on(eventName: string, callback: EventCallback): void;
        }

        interface EventCallback {
            (...args: any[]): void
        }

        interface ReadyEventCallback extends EventCallback {
            (): void;
        }

        interface ErrorEventCallback extends EventCallback {
            (error: Error): void;
        }

        interface JobPromise {
            /**
             * Abort this job
             */
            cancel(): void
        }

        interface ActiveEventCallback extends EventCallback {
            (job: Job, jobPromise: JobPromise): void;
        }

        interface ProgressEventCallback extends EventCallback {
            (job: Job, progress: any): void;
        }

        interface CompletedEventCallback extends EventCallback {
            (job: Job, result: Object): void;
        }

        interface FailedEventCallback extends EventCallback {
            (job: Job, error: Error): void;
        }

        interface PausedEventCallback extends EventCallback {
            (): void;
        }

        interface ResumedEventCallback extends EventCallback {
            (job?: Job): void;
        }

        /**
         * @see clean() for details
         */
        interface CleanedEventCallback extends EventCallback {
            (jobs: Job[], type: string): void;
        }
    }

    export = Bull;
}

declare module "bull/lib/priority-queue" {

    import * as Bull from "bull";
    import * as Redis from "redis";

    /**
     * This is the Queue constructor of priority queue.
     *
     * It works same a normal queue, with same function and parameters.
     * The only difference is that the Queue#add() allow an options opts.priority
     * that could take ["low", "normal", "medium", "hight", "critical"]. If no options provider, "normal" will be taken.
     *
     * The priority queue will process more often highter priority jobs than lower.
     */
    function PQueue(queueName: string, redisPort: number, redisHost: string, redisOpt?: Redis.ClientOpts): PQueue.PriorityQueue;

    namespace PQueue {

        export interface AddOptions extends Bull.AddOptions {

            /**
             * "low", "normal", "medium", "high", "critical"
             */
            priority?: string;
        }


        export interface PriorityQueue extends Bull.Queue {

            /**
             * Creates a new job and adds it to the queue.
             * If the queue is empty the job will be executed directly,
             * otherwise it will be placed in the queue and executed as soon as possible.
             */
            add(data: Object, opts?: PQueue.AddOptions): Promise<Bull.Job>;

        }
    }

    export = PQueue;
}
