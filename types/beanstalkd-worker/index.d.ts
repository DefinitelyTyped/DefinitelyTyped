// Type definitions for beanstalkd-worker 1.2
// Project: https://github.com/burstable/node-beanstalkd-worker
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import BeanstalkdClient, { BeanstalkdJobState, BeanstalkdJobStats } from "beanstalkd";

export = BeanstalkdWorker;

declare class BeanstalkdWorker {
    host?: string;
    port?: number;
    options?: {};
    running: boolean;

    constructor(host?: string, port?: number, options?: {});

    /**
     * Create or reuse a connection to Beanstalkd with given id.
     *
     * @param id Id for the connection.
     */
    connection(id: string): Promise<BeanstalkdClient>;

    /**
     * Get or create a Tube.
     *
     * @param name The Tube name to get or create.
     */
    tube(name: string): BeanstalkdWorker.Tube;

    /**
     * Spawn a new Job on given Tube.
     *
     * @param tube The tube to spawn new job on.
     * @param payload The message payload.
     * @param options The options for the new job.
     */
    spawn(tube: string, payload: object, options?: BeanstalkdWorker.BeanstalkdSpawnOptions): Promise<BeanstalkdWorker.Job>;

    /**
     * Handle jobs from given Tube.
     *
     * @param tube The tube to handle jobs on.
     * @param handler The callback for handling jobs.
     * @param options The options for the handler.
     */
    handle(tube: string, handler: BeanstalkdWorker.TubeHandler, options?: BeanstalkdWorker.BeanstalkdHandleOptions): void;

    /**
     * Creates a new Job representation.
     *
     * @param tube The tube to create job for.
     * @param jobId The job id for the new job.
     */
    job(tube: string, jobId: string): BeanstalkdWorker.Job;

    /**
     * Wait for the given job on specifed tube to be done.
     * If provided, calls the `onPoll` handler on each check (500ms).
     *
     * @param tube The tube that contains the job.
     * @param jobId The job id to wait for.
     * @param onPoll The poll handler called on each check.
     */
    done(tube: string, jobId: string, onPoll?: BeanstalkdWorker.JobPollHandler): Promise<void>;

    /** Enable handlers and start processing jobs, make sure handlers are setup before calling start. */
    start(): void;

    /** Start handling configured tubes. */
    startTubes(): void;

    /** Stop the Worker process and all associated tubes. */
    stop(): Promise<void>;

    /** Stop handling the configured tubes. */
    stopTubes(): Promise<void>;

    /**
     * Checks if the given tube is currently working.
     *
     * @param tube The tube to check if currently working.
     */
    working(tube: string): boolean;
}

declare namespace BeanstalkdWorker {
    type TubeHandler = (this: WatcherJob, payload?: any) => any;
    type JobPollHandler = (state: BeanstalkdJobState) => any;

    type JobStatus = BeanstalkdJobState | "success";

    interface Tube {
        /**
         * Gets or creates a new Client for given id.
         *
         * @param id The id for the connection.
         */
        connection(id: string): Promise<BeanstalkdClient>;

        /**
         * Executes given command on this Tube.
         *
         * @param command The command to execute.
         * @param args The arguments for the command.
         */
        command(command: string, ...args: any[]): Promise<any>;

        /**
         * Handle jobs from this Tube.
         *
         * @param handler The callback for handling jobs.
         * @param options The options for the handler.
         */
        handle(handler: TubeHandler, options?: BeanstalkdHandleOptions): void;

        /** Start watchers for this Tube. */
        start(): void;

        /** Stop watching for new Job on this Tube. */
        stop(): Promise<void>;

        /** Check whether this Tube is currently working. */
        working(): boolean;
    }

    interface Job {
        tube: string;
        id: string;

        /**
         * Executes given command on the Tube that contains the Job.
         *
         * @param command The command to execute.
         * @param args The arguments for the command.
         */
        command(command: string, ...args: any[]): Promise<any>;

        /**
         * Requests stats for this job.
         * If `catchNotFound` is true, and `NOT_FOUND` error is thrown, returns null.
         *
         * @param catchNotFound Whether to catch `NOT_FOUND` error and return null.
         */
        stats(catchNotFound?: boolean): Promise<BeanstalkdJobStats>;

        /** Query current status for this Job. */
        status(): Promise<JobStatus>;

        /**
         * Wait for this job to be done.
         * If provided, calls the `onPoll` handler on each check (500ms).
         *
         * @param onPoll The poll handler called on each check.
         */
        done(onPoll?: JobPollHandler): Promise<void>;
    }

    interface WatcherJob extends Job {
        /** Inform the server that the client is still processing this job, thus requesting more time to work on it. */
        touch(): void;

        /**
         * Initialize a timeout with given delay for this Job.
         *
         * @param delay The delay to wait before rejecting the Promise.
         */
        timeout(delay: number): Promise<never>;
        /**
         * Initialize a timeout with given delay for specified action.
         *
         * @param delay The delay to wait before rejecting the Promise.
         * @param action The Promise to check for timeout resolution.
         */
        timeout<T>(delay: number, action: T | Promise<T>): Promise<T>;

        /**
         * Advanced use only! Mainly internal usage.
         * Reset the configured timeout.
         */
        refreshTimeout(): void;

        /**
         * Advanced use only! Mainly internal usage.
         * Cancel the configured timeout.
         */
        cancelTimeout(): void;

        /**
         * Spawn a new Job on given Tube.
         *
         * @param tube The tube to spawn new job on.
         * @param payload The message payload.
         * @param options The options for the new job.
         */
        spawn(tube: string, payload: object, options?: BeanstalkdSpawnOptions): Promise<Job>;

        /**
         * Spawn a new child Job on given Tube and make this Job to wait for its resolution.
         * This automatically touch this Job during the wait time.
         *
         * @param tube The tube to spawn new job on.
         * @param payload The message payload.
         * @param options The options for the new job.
         */
        child(tube: string, payload: object, options?: BeanstalkdSpawnOptions): Promise<void>;

        /**
         * Wait for the given job on specifed tube to be done.
         * This automatically touch this Job during the wait time.
         *
         * @param tube The tube that contains the job.
         * @param jobId The job id to wait for.
         */
        wait(tube: string, jobId: string): Promise<void>;

        /**
         * Puts current job back in queue with delay (in milliseconds), does not affect retries counter.
         *
         * @param delay The time to delay (in milliseconds).
         * @param exponent The exponent to for calculating the final delay (delay^exponent).
         */
        delay(delay?: number, exponent?: number): Promise<1>;
    }

    interface BeanstalkdSpawnOptions {
        /** The priority for the new Job. */
        priority?: number;
        /** The timeout for the new Job (in milliseconds). */
        timeout?: number;
        /** The delay before making the new Job visible (in milliseconds). */
        delay?: number;
    }

    interface BeanstalkdHandleOptions {
        /** Total number of watcher handling this Tube simultaneously. */
        width?: number;
        /** Total amount of tries including the first one. */
        tries?: number;
        /** Backoff handling options */
        backoff?: BeanstalkdHandleBackoff;
    }

    interface BeanstalkdHandleBackoff {
        /** Initial time to wait (in milliseconds). */
        initial?: number;
        /** Multiple backoff by N each try. */
        exponential?: number;
    }
}
