/// <reference types="q-retry" />

import * as Q from "q";
/**
 * interface for the final result.
 */
export interface IResult {
    fulfilled: number;
    rejected: number;
    total: number;
}
/**
 * interface for progress data.
 */
export interface IProgress {
    index: number;
    success: boolean;
    error: any;
    retries: number;
    fulfilled: number;
    rejected: number;
    pending: number;
    total: number;
}
/**
 * tasks pool that manages concurrency.
 */
export declare class Pool<T> {
    /**
     * (get/set) the max concurrency of this task pool.
     */
    public concurrency: number;
    private _tasksData;
    /**
     * (get/set) the processor function that handles tasks data.
     */
    public processor: (data: T, index: number) => Q.IPromise<void>;
    private _deferred;
    private _pauseDeferred;
    /**
     * (get) the number of successful tasks.
     */
    public fulfilled: number;
    /**
     * (get) the number of failed tasks.
     */
    public rejected: number;
    /**
     * (get) the number of pending tasks.
     */
    public pending: number;
    /**
     * (get) the number of completed tasks and pending tasks in total.
     */
    public total: number;
    /**
     * (get/set) indicates whether this task pool is endless, if so, tasks can still be added even after all previous tasks have been fulfilled.
     */
    public endless: boolean;
    /**
     * (get/set) defaults to 0, the number or retries that this task pool will take for every single task, could be Infinity.
     */
    public retries: number;
    /**
     * (get/set) defaults to 0, interval (milliseconds) between each retries.
     */
    public retryInterval: number;
    /**
     * (get/set) defaults to Infinity, max retry interval when retry interval multiplier applied.
     */
    public maxRetryInterval: number;
    /**
     * (get/set) defaults to 1, the multiplier applies to interval after every retry.
     */
    public retryIntervalMultiplier: number;
    private _index;
    private _currentConcurrency;
    public onProgress: (progress: IProgress) => void;
    /**
     * initialize a task pool.
     * @param processor a function takes the data and index as parameters and returns a promise.
     * @param concurrency the concurrency of this task pool.
     * @param endless defaults to false. indicates whether this task pool is endless, if so, tasks can still be added even after all previous tasks have been fulfilled.
     * @param tasksData an initializing array of task data.
     */
    constructor(
        processor: (data: T, index: number) => Q.IPromise<void>,
        concurrency: number,
        endless?: boolean,
        tasksData?: T[],
    );
    /**
     * add a data item.
     * @param taskData task data to add.
     */
    public add(taskData: T): void;
    /**
     * add data items.
     * @param tasskData tasks data to add.
     */
    public add(tasksData: T[]): void;
    /**
     * start tasks, return a promise that will be fulfilled after all tasks accomplish if endless is false.
     * @param onProgress a callback that will be triggered every time when a single task is fulfilled.
     */
    public start(onProgress?: (progress: IProgress) => void): Q.Promise<IResult>;
    private _start();
    private _process(data, index);
    private _notifyProgress(index, success, err, retries);
    private _next();
    /**
     * pause tasks and return a promise that will be fulfilled after the running tasks accomplish. this will wait for running tasks to complete instead of aborting them.
     */
    public pause(): Q.Promise<void>;
    /**
     * resume tasks.
     */
    public resume(): void;
    /**
     * pause tasks, then clear pending tasks data and reset counters. return a promise that will be fulfilled after resetting accomplish.
     */
    public reset(): Q.Promise<void>;
}
