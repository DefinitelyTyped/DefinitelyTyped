// Type definitions for tress 1.0
// Project: https://github.com/astur/tress
// Definitions by: Matanel Sindilevich <https://github.com/sindilevich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace tress {
    export type TressJobCallback = (this: TressJobData, ...args: any[]) => void;
    export type TressWorkerDoneCallback = (err: boolean | Error | null | undefined, ...args: any[]) => void;

    export interface TressJobData { [name: string]: {}; }

    export interface TressJob {
        data: TressJobData;
        callback: TressJobCallback;
    }

    export interface TressJobQueues {
        failed: TressJobData[];
        finished: TressJobData[];
        waiting: TressJobData[];
    }

    export interface TressStatic {
        // Properties

        /**
         * Array of jobs currently being processed (readonly)
         */
        readonly active: TressJob[];
        /**
         * A minimum threshold buffer in order to say that the queue is unsaturated
         */
        buffer: number;
        /**
         * This property for alter the concurrency/delay on-the-fly
         */
        concurrency: number;
        /**
         * Array of failed jobs
         * (the done callback was called from worker with error in first argument) (readonly)
         */
        readonly failed: TressJob[];
        /**
         * Array of correctly finished jobs
         * (the done callback was called from worker with null or undefined (or any other false equivalent) in first argument) (readonly)
         */
        readonly finished: TressJob[];
        /**
         *  A boolean for determining whether the queue is in a paused state.
         * (readonly - use pause() and resume() instead)
         */
        readonly paused: boolean;
        /**
         * false untill any items have been pushed and processed by the queue.
         * Then becomes true and never changes in queue lifecycle (readonly)
         */
        readonly started: boolean;
        /**
         * Array of queued jobs (readonly)
         */
        readonly waiting: TressJob[];

        // Methods

        /**
         * Returns false if there are items waiting or being processed,
         * or true if not
         */
        idle(): boolean;
        /**
         * Removes the drain callback and empties remaining jobs from the queue
         * forcing it to go idle
         */
        kill(): void;
        /**
         * Returns the number of items waiting to be processed
         */
        length(): number;
        /**
         * Loads new arrays from data object to waiting, failed, and finished arrays and sets active to empty array.
         * Rises an error if started is true
         */
        load(data: TressJobQueues): void;
        /**
         * Pauses the processing of jobs until resume() is called
         */
        pause(): void;
        /**
         * Adds a new job to the queue.
         * Instead of a single job, a jobs array can be submitted.
         * Note, that if you pass callback as second argument,
         * tress calls this callback once the worker has finished processing the job
         */
        push(job: TressJobData | TressJobData[], done?: TressJobCallback): void;
        /**
         * Resumes the processing of queued jobs when the queue is paused
         */
        resume(): void;
        /**
         * Returns the number of items currently being processed
         */
        running(): number;
        /**
         * Runs a callback with object, that contains arrays of waiting, failed, and finished jobs.
         * If there are any active jobs at the moment, they will be concatenated to waiting array
         */
        save(callback: (data: TressJobQueues) => void): void;
        /**
         * Returns the status of job ("waiting", "running", "finished", "pending" or "missing")
         */
        status(job: TressJob): "active" | "failed" | "finished" | "missing" | "waiting";
        /**
         * Adds a new job to the front of the queue.
         * Instead of a single job, a jobs array can be submitted.
         * Note, that if you pass callback as second argument,
         * tress calls this callback once the worker has finished processing the job
         */
        unshift(job: TressJobData | TressJobData[], done?: TressJobCallback): void;
        /**
         * Returns the array of items currently being processed
         */
        workersList(): TressStatic["active"];

        // Callbacks

        /**
         * A callback that is called when the last item from the queue has returned from the worker
         */
        drain(): void;
        /**
         * A callback that is called when the last item from the queue is given to a worker
         */
        empty(): void;
        /**
         * A callback that is called when job failed (worker call done with error as first argument).
         * Note, that this callback is called after job has been moved from active to failed/finished and after job callback (from push/unshift) was called
         */
        error(this: TressJobData, err: Error, job: TressJobData, ...args: any[]): void;
        /**
         * A  callback that is called when job returned to queue (worker call done with boolean as first argument)
         */
        retry(this: TressJobData, ...args: any[]): void;
        /**
         * A callback that is called when the number of running workers hits the concurrency limit, and further jobs will be queued
         */
        saturated(): void;
        /**
         * A callback that is called when job correctly finished (worker call done with null or undefined as first argument).
         * Note, that this callback is called after job has been moved from active to failed/finished and after job callback (from push/unshift) was called
         */
        success(this: TressJobData, ...args: any[]): void;
        /**
         * A callback that is called when the number of running workers is less than the concurrency & buffer limits, and further jobs will not be queued
         */
        unsaturated(): void;
    }
}

/**
 * Creates queue object that will store jobs and process them with worker function
 * in parallel (up to the concurrency limit)
 * @param worker An asynchronous function for processing a queued job,
 * which must call its done argument when finished.
 * Callback done may take various argumens,
 * but first argument must be error (if job failed),
 * null/undefined (if job successfully finished)
 * or boolean (if job returned to queue head (if true)
 * or to queue tail (if false))
 * @param concurrency An integer for determining how many worker functions
 * should be run in parallel. If omitted, the concurrency defaults to 1.
 * If negative - no parallel and delay between worker functions (concurrency -1,000 sets 1 second delay)
 */
declare function tress(
    worker: (job: tress.TressJobData, done: tress.TressWorkerDoneCallback) => void,
    concurrency?: number): tress.TressStatic;

export = tress;
