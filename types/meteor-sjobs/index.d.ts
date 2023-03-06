// Type definitions for meteor-sjobs 4.0
// Project: https://github.com/msavin/SteveJobs
// Definitions by: Witold H <https://github.com/LinearMilk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

/// <reference types="meteor" />

// tslint:disable-next-line no-single-declare-module
declare module 'meteor/msavin:sjobs' {
    interface Options {
        /** Specify if the package should start automatically on Meteor.startup. */
        autoStart?: boolean | undefined;
        /** Specify if the package should retry failed jobs whenever a new server takes control. */
        autoRetry?: boolean | undefined;
        /** Specify if the package should automatically delete internal data (not job related). */
        autoPurge?: boolean | undefined;
        /**  Specify how often the package should check for due jobs. */
        interval?: number | undefined;
        /** Specify how long after server startup the package should start running. */
        startupDelay?: number | undefined;
        /** Specify how long the server could be inactive before another server takes on the master role. */
        maxWait?: number | undefined;
        /**  development mode assumes that only one server is running, and that it is the active one. */
        disableDevelopmentMode?: boolean | undefined;
        gracePeriod?: number | undefined;
        /** Determine how to set the serverId - for example, you can have the package use your hosts deployment id */
        setServerId?: (() => string) | undefined;
        /** Determine how to get the current date, if for whatever reason, new Date() is not suitable */
        getDate?: (() => Date) | undefined;
        /** Determine how to log the package outputs */
        log?: ((messages: string | object) => void) | undefined;
        /** Store jobs data in a remote collection. */
        remoteCollection?: string | undefined;
    }

    type JobState = 'pending' | 'success' | 'failure';

    class JobContext {
        /** Access the cached document of the current job. */
        document: () => Job;
        /** Sets a persistent key/value pair */
        set: (key: string, value: any) => object; // returns Mongo WriteResult object
        /** get a persistent value from key */
        get: (key: string) => any;
        /** Mark the job as having failed. */
        failure: (result?: any) => object; // returns Mongo WriteResult object
        /** Tell the job to run again later. */
        reschedule: (config?: JobRunConfigObject) => object; // returns Mongo WriteResult object
        /** Replicate the job with the same arguments. */
        replicate: (config?: JobRunConfigObject) => Job;
        /** Remove the job from the collection. */
        remove: () => number;
        /** Mark the job as successful. */
        success: () => object; // returns Mongo WriteResult object
    }

    interface JobDefinition {
        [propName: string]: (this: JobContext, ...args: any[]) => void;
    }

    type State = 'pending' | 'success' | 'failure' | '*';

    interface HistoryItem {
        date: Date;
        state?: JobState | undefined;
        serverId: string;
        type?: string | undefined;
        newDue?: Date | undefined;
    }

    interface Job {
        _id?: string | undefined;
        name: string;
        created: Date;
        serverId: string;
        state: JobState;
        due: Date;
        priority: number;
        data: any;
        arguments: any[];
        history: HistoryItem[];
    }

    /**
     * The supported fields for in and on can be used in singular and/or plural versions.
     * The date object will be updated in the order that is specified.
     */
    interface CfgTimeObject {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        milisecond?: number | undefined;
        years?: number | undefined;
        months?: number | undefined;
        days?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
        miliseconds?: number | undefined;
    }

    interface JobRunConfigObject {
        /** Will schedule the job at a later time, using the current time and your inputs to calculate the due time. */
        in?: CfgTimeObject | undefined;
        /** Overrides the current time with your inputs */
        on?: CfgTimeObject | undefined;
        /**
         * The default priority for each job is 0, if set to a positive integer, it will run ahead of other jobs.
         * If set to a negative integer, it will only run after all the zero or positive jobs have completed.
         */
        priority?: number | undefined;
        /** Provide your own date. This stacks with the in and on operator, and will be applied before they perform their operations. */
        date?: (() => Date) | undefined;
        /** If a job is marked as unique, it will only be scheduled if no other job exists with the same arguments. */
        unique?: boolean | undefined;
        /** If a job is marked as singular, it will only be scheduled if no other job is pending with the same arguments. */
        singular?: boolean | undefined;
        /** Run a callback function after scheduling the job. */
        callback?: ((error: true | null, result: Job) => any) | undefined;
    }
    // tslint:disable-next-line no-unnecessary-class
    class Jobs {
        /**
         * Allows you to configure how the package should work. You can figure one option or all of them.
         * All the options are pre-configured in ./package/server/imports/utilities/config.js.
         */
        static configure: (options: Options) => void;
        /**
         * Allows you to register logic for a job. Once registered, the package will start a queue to look for and execute jobs
         *  as appropriate, and you will be able to run jobs with Jobs.run .
         */
        static register: (job: JobDefinition) => void;
        /**
         * Allows you to schedule a job to run. You call it by specifying the job name and its arguments.
         * At the end, you can pass in a special configuration object. Otherwise, it will be scheduled to run as soon as possible.
         */
        static run: (jobname: string, ...args: any[]) => void;
        static find: (...args: any[]) => false | void;
        /** Allows you to run a job ahead of its due date. It can only work on jobs that have not been resolved. */
        static execute: (docId: string) => void;
        /** Allows you to reschedule a job. It can only work on jobs that have not been resolved. */
        static reschedule: (jobId: string, config?: JobRunConfigObject) => void;
        /** Allows you to replicate a job. */
        static replicate: (jobId: string, config?: JobRunConfigObject) => void;
        /**
         * Allows you start all the queues. If you call the function with no arguments, it will start all the queues.
         * If you pass in a string, it will start a queue with that name.
         * If you pass in an array, it will loop over the items in it, and treat them like a string.
         */
        static start: (queueName?: string | any[]) => void;
        /**
         * Allows you stop all the queues. If you call the function with no arguments, it will stop all the queues.
         * If you pass in a string, it will stop a queue with that name.
         * If you pass in an array, it will loop over the items in it, and treat them like a string.
         */
        static stop: (queueName?: string | any[]) => void;
        /**  allows you to get a job document by its document id. */
        static get: (docId: string) => Job;
        /** Allows you to cancel a job if it has not run already. */
        static cancel: (jobId: string) => void;
        /**
         * Allows you to clear all or some of the jobs in your database. It supports State for selecting a job state,
         *  You can add the name arguments to specify a specific queue. You can also call an optional callback.
         */
        static clear: (state: State, name?: string, cb?: (...args: any) => any) => number;
    }
}
