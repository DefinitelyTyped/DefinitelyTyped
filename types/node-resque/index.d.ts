/// <reference types="node" />
import { EventEmitter } from "events";

export interface ConnectionOptions {
    pkg?: string | undefined;
    host?: string | undefined;
    port?: number | undefined;
    database?: number | undefined;
    namespace?: string | undefined;
    looping?: boolean | undefined;
    options?: any;
    redis?: any;
}

export class Connection extends EventEmitter {
    constructor(options: ConnectionOptions);

    connect(): Promise<void>;
    end(): Promise<void>;
}

export interface Job<TResult> {
    plugins?: string[] | undefined;
    pluginOptions?: { [pluginName: string]: any } | undefined;
    perform: (...args: any[]) => Promise<TResult>;
}

export interface JobsHash {
    [jobName: string]: Job<any>;
}

export interface QueueOptions {
    connection?: ConnectionOptions | undefined;
}

export interface WorkerStatus {
    run_at: string;
    queue: string;
    payload: {
        class: string;
        queue: string;
        args: ReadonlyArray<any>;
    };
    worker: string;
}

export class Queue extends EventEmitter {
    constructor(options: QueueOptions, jobs?: JobsHash);

    connect(): Promise<void>;
    end(): Promise<void>;
    encode(queue: string, jobName: string, args?: ReadonlyArray<any>): string;
    enqueue(queue: string, jobName: string, args?: ReadonlyArray<any>): Promise<void>;
    enqueueAt(timestamp: number, queue: string, jobName: string, args?: ReadonlyArray<any>): Promise<void>;
    enqueueIn(milliseconds: number, queue: string, jobName: string, args?: ReadonlyArray<any>): Promise<void>;
    queues(): Promise<string[]>;
    delQueue(queue: string): Promise<void>;
    length(queue: string): Promise<number>;
    del(queue: string, jobName: string, args?: ReadonlyArray<any>, count?: number): Promise<number>;
    delDelayed(queue: string, jobName: string, args?: ReadonlyArray<any>, count?: number): Promise<number[]>;
    scheduledAt(queue: string, jobName: string, args?: ReadonlyArray<any>): Promise<number[]>;
    timestamps(): Promise<number[]>;
    delayedAt(timestamp: number): Promise<{ tasks: Array<Job<any>>; rTimestamp: number }>;
    queued(queue: string, start: number, stop: number): Promise<Array<Job<any>>>;
    allDelayed(): Promise<number[]>;
    locks(): Promise<{ [lockName: string]: string }>;
    delLock(lockName: string): Promise<number>;
    workers(): Promise<{ [hash: string]: string }>;
    workingOn(workerName: string, queues: string[]): Promise<WorkerStatus>;
    allWorkingOn(): Promise<{ [hashName: string]: WorkerStatus }>;
    forceCleanWorker(workerName: string): Promise<ErrorPayload[]> | Promise<void>;
    cleanOldWorkers(age: number): Promise<{ [workerName: string]: ErrorPayload } | {}>;
    failedCount(): Promise<number>;
    failed(start: number, stop: number): Promise<ErrorPayload[]>;
    removeFailed(failedJob: ErrorPayload): Promise<void>;
    retryAndRemoveFailed(failedJob: ErrorPayload): Promise<void>;
    stats(): Promise<any>;
    on(event: "error", cb: (error: Error, queue: string) => void): this;
    once(event: "error", cb: (error: Error, queue: string) => void): this;
}

export interface WorkerOptions {
    connection?: ConnectionOptions | undefined;
    queues: string[];
    name?: string | undefined;
    timeout?: number | undefined;
    looping?: boolean | undefined;
}

export type WorkerEvent =
    | "start"
    | "end"
    | "cleaning_worker"
    | "poll"
    | "ping"
    | "job"
    | "reEnqueue"
    | "success"
    | "failure"
    | "error"
    | "pause";

export class Worker extends EventEmitter {
    constructor(options: WorkerOptions, jobs?: JobsHash);

    connect(): Promise<void>;
    start(): Promise<void>;
    end(): Promise<void>;

    on(event: "start" | "end" | "pause", cb: () => void): this;
    on(event: "cleaning_worker", cb: (worker: string, pid: string) => void): this;
    on(event: "poll", cb: (queue: string) => void): this;
    on(event: "ping", cb: (time: number) => void): this;
    on(event: "job", cb: (queue: string, job: Job<any>) => void): this;
    on(event: "reEnqueue", cb: (queue: string, job: Job<any>, plugin: string) => void): this;
    on(event: "success", cb: (queue: string, job: Job<any>, result: any) => void): this;
    on(event: "failure", cb: (queue: string, job: Job<any>, failure: any) => void): this;
    on(event: "error", cb: (error: Error, queue: string, job: Job<any>) => void): this;

    once(event: "start" | "end" | "pause", cb: () => void): this;
    once(event: "cleaning_worker", cb: (worker: string, pid: string) => void): this;
    once(event: "poll", cb: (queue: string) => void): this;
    once(event: "ping", cb: (time: number) => void): this;
    once(event: "job", cb: (queue: string, job: Job<any>) => void): this;
    once(event: "reEnqueue", cb: (queue: string, job: Job<any>, plugin: string) => void): this;
    once(event: "success", cb: (queue: string, job: Job<any>, result: any) => void): this;
    once(event: "failure", cb: (queue: string, job: Job<any>, failure: any) => void): this;
    once(event: "error", cb: (error: Error, queue: string, job: Job<any>) => void): this;

    removeAllListeners(event: WorkerEvent): this;
}

export interface SchedulerOptions {
    connection?: ConnectionOptions | undefined;
    name?: string | undefined;
    timeout?: number | undefined;
    stuckWorkerTimeout?: number | undefined;
    masterLockTimeout?: number | undefined;
}

export type SchedulerEvent =
    | "start"
    | "end"
    | "poll"
    | "master"
    | "cleanStuckWorker"
    | "error"
    | "workingTimestamp"
    | "transferredJob";

export class Scheduler extends EventEmitter {
    constructor(options: SchedulerOptions, jobs?: JobsHash);

    connect(): Promise<void>;
    start(): Promise<void>;
    end(): Promise<void>;

    on(event: "start" | "end" | "poll" | "master", cb: () => void): this;
    on(event: "cleanStuckWorker", cb: (workerName: string, errorPayload: ErrorPayload, delta: number) => void): this;
    on(event: "error", cb: (error: Error, queue: string) => void): this;
    on(event: "workingTimestamp", cb: (timestamp: number) => void): this;
    on(event: "transferredJob", cb: (timestamp: number, job: Job<any>) => void): this;

    once(event: "start" | "end" | "poll" | "master", cb: () => void): this;
    once(event: "cleanStuckWorker", cb: (workerName: string, errorPayload: ErrorPayload, delta: number) => void): this;
    once(event: "error", cb: (error: Error, queue: string) => void): this;
    once(event: "workingTimestamp", cb: (timestamp: number) => void): this;
    once(event: "transferredJob", cb: (timestamp: number, job: Job<any>) => void): this;

    removeAllListeners(event: SchedulerEvent): this;
}

export interface ErrorPayload {
    worker: string;
    queue: string;
    payload: any;
    exception: string;
    error: string;
    backtrace: string[] | null;
    failed_at: string;
}
