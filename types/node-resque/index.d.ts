// Type definitions for node-resque 5.4
// Project: http://github.com/taskrabbit/node-resque
// Definitions by: Gordey Doronin <https://github.com/gordey4doronin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ConnectionOptions {
    pkg?: string;
    host?: string;
    port?: number;
    database?: number;
    namespace?: string;
    looping?: boolean;
    options?: any;
}

export class Connection extends NodeJS.EventEmitter {
    constructor(options: ConnectionOptions);

    connect(): Promise<void>;
    end(): Promise<void>;
}

export interface Job<TResult> {
    plugins?: string[];
    pluginOptions?: { [pluginName: string]: any };
    perform: (...args: any[]) => Promise<TResult>;
}

export interface JobsHash {
    [jobName: string]: Job<any>;
}

export interface QueueOptions {
    connection?: ConnectionOptions;
}

export class Queue extends NodeJS.EventEmitter {
    constructor(options: QueueOptions, jobs?: JobsHash);

    connect(): Promise<void>;
    enqueue(queue: string, jobName: string, args: ReadonlyArray<any>): Promise<void>;
    enqueueIn(milliseconds: number, queue: string, jobName: string, args: ReadonlyArray<any>): Promise<void>;
    end(): Promise<void>;

    on(event: 'error', cb: (error: Error, queue: string) => void): this;
    once(event: 'error', cb: (error: Error, queue: string) => void): this;
}

export interface WorkerOptions {
    connection?: ConnectionOptions;
    queues: string[];
    name?: string;
    timeout?: number;
    looping?: boolean;
}

export type WorkerEvent = 'start' | 'end' | 'cleaning_worker' | 'poll' | 'ping' | 'job' | 'reEnqueue' | 'success' | 'failure' | 'error' | 'pause';

export class Worker extends NodeJS.EventEmitter {
    constructor(options: WorkerOptions, jobs?: JobsHash);

    connect(): Promise<void>;
    start(): Promise<void>;
    end(): Promise<void>;

    on(event: 'start' | 'end' | 'pause', cb: () => void): this;
    on(event: 'cleaning_worker', cb: (worker: string, pid: string) => void): this;
    on(event: 'poll', cb: (queue: string) => void): this;
    on(event: 'ping', cb: (time: number) => void): this;
    on(event: 'job', cb: (queue: string, job: Job<any>) => void): this;
    on(event: 'reEnqueue', cb: (queue: string, job: Job<any>, plugin: string) => void): this;
    on(event: 'success', cb: (queue: string, job: Job<any>, result: any) => void): this;
    on(event: 'failure', cb: (queue: string, job: Job<any>, failure: any) => void): this;
    on(event: 'error', cb: (error: Error, queue: string, job: Job<any>) => void): this;

    once(event: 'start' | 'end' | 'pause', cb: () => void): this;
    once(event: 'cleaning_worker', cb: (worker: string, pid: string) => void): this;
    once(event: 'poll', cb: (queue: string) => void): this;
    once(event: 'ping', cb: (time: number) => void): this;
    once(event: 'job', cb: (queue: string, job: Job<any>) => void): this;
    once(event: 'reEnqueue', cb: (queue: string, job: Job<any>, plugin: string) => void): this;
    once(event: 'success', cb: (queue: string, job: Job<any>, result: any) => void): this;
    once(event: 'failure', cb: (queue: string, job: Job<any>, failure: any) => void): this;
    once(event: 'error', cb: (error: Error, queue: string, job: Job<any>) => void): this;

    removeAllListeners(event: WorkerEvent): this;
}

export interface SchedulerOptions {
    connection?: ConnectionOptions;
    name?: string;
    timeout?: number;
    stuckWorkerTimeout?: number;
    masterLockTimeout?: number;
}

export type SchedulerEvent = 'start' | 'end' | 'poll' | 'master' | 'cleanStuckWorker' | 'error' | 'workingTimestamp' | 'transferredJob';

export class Scheduler extends NodeJS.EventEmitter {
    constructor(options: SchedulerOptions, jobs?: JobsHash);

    connect(): Promise<void>;
    start(): Promise<void>;
    end(): Promise<void>;

    on(event: 'start' | 'end' | 'poll' | 'master', cb: () => void): this;
    on(event: 'cleanStuckWorker', cb: (workerName: string, errorPayload: ErrorPayload, delta: number) => void): this;
    on(event: 'error', cb: (error: Error, queue: string) => void): this;
    on(event: 'workingTimestamp', cb: (timestamp: number) => void): this;
    on(event: 'transferredJob', cb: (timestamp: number, job: Job<any>) => void): this;

    once(event: 'start' | 'end' | 'poll' | 'master', cb: () => void): this;
    once(event: 'cleanStuckWorker', cb: (workerName: string, errorPayload: ErrorPayload, delta: number) => void): this;
    once(event: 'error', cb: (error: Error, queue: string) => void): this;
    once(event: 'workingTimestamp', cb: (timestamp: number) => void): this;
    once(event: 'transferredJob', cb: (timestamp: number, job: Job<any>) => void): this;

    removeAllListeners(event: SchedulerEvent): this;
}

export interface ErrorPayload {
    worker: string;
    queue: string;
    payload: any;
    exception: string;
    error: string;
    backtrace: string[];
    failed_at: string;
}
