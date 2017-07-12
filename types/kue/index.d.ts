// Type definitions for kue 0.11.x
// Project: https://github.com/Automattic/kue
// Definitions by: Nicholas Penree <http://github.com/drudge>
//                 Amiram Korach <http://github.com/amiram>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { RedisClient } from 'redis';
import events = require('events');

export interface TestMode {
    jobs: Array<Job<any>>;
    enter(process?: boolean): void;
    exit(): void;
    clear(): void;
}

export interface JobContext {
    pause(ms: number, cb: (err?: Error) => void): void;
    resume(): void;
}

export type JobHandler<T> = (job: Job<T>, done: (err: Error | void, result: any) => void) => any;
export type JobHandlerWithContext<T> = (job: Job<T>, ctx: JobContext, done: (err: Error | void, result: any) => void) => any;
export type CountHandler = (err: Error | void, total: number) => any;
export type StateHandler = (err: Error | void, ids: number[]) => any;
export type RangeHandler = (err: Error | void, jobs: Array<Job<any>>) => any;

export class Queue extends events.EventEmitter {
    name: string;
    id: string;
    promoter: any;
    workers: Array<Worker<any>>;
    shuttingDown: boolean;
    client: RedisClient;
    testMode: TestMode;

    static singleton: Queue;

    constructor(options: Object);
    create<T>(type: string, data: T): Job<T>;
    createJob<T>(type: string, data: T): Job<T>;
    checkJobPromotion(promotionOptions?: { interval?: number, limit?: number }): void;
    checkActiveJobTtl(ttlOptions?: { interval?: number, limit?: number }): void;
    watchStuckJobs(ms?: number): void;
    setting(name: string, fn: (err: Error | void, value: string) => any): this;
    process<T>(type: string, handler: JobHandler<T> | JobHandlerWithContext<T>): void;
    process<T>(type: string, concurrency: number, handler: JobHandler<T> | JobHandlerWithContext<T>): void;
    shutdown(cb: (err?: Error) => any): this;
    shutdown(timeout: number, cb: (err?: Error) => any): this;
    shutdown(timeout: number, type: string, cb: (err?: Error) => any): this;
    types(fn: (err: Error | void, types: string[]) => any): this;
    state(string: string, fn: StateHandler): this;
    workTime(fn: (err: Error | void, time: number) => any): this;
    cardByType(type: string, state: string, fn: CountHandler): this;
    card(state: string, fn: CountHandler): this;
    complete(fn: StateHandler): this;
    failed(fn: StateHandler): this;
    inactive(fn: StateHandler): this;
    active(fn: StateHandler): this;
    delayed(fn: StateHandler): this;
    completeCount(fn: CountHandler): this;
    completeCount(type: string, fn: CountHandler): this;
    failedCount(fn: CountHandler): this;
    failedCount(type: string, fn: CountHandler): this;
    inactiveCount(fn: CountHandler): this;
    inactiveCount(type: string, fn: CountHandler): this;
    activeCount(fn: CountHandler): this;
    activeCount(type: string, fn: CountHandler): this;
    delayedCount(fn: CountHandler): this;
    delayedCount(type: string, fn: CountHandler): this;

    on(event: 'job complete', listener: (id: string, result: any) => any): this;
    on(event: 'job failed attempt', listener: (id: string, errorMessage: any, doneAttempts: number) => any): this;
    on(event: 'job failed', listener: (id: string, errorMessage: any) => any): this;
    on(event: 'job progress', listener: (id: string, progress: number, data: any) => any): this;
    on(event: 'job remove', listener: (id: string, type: string) => any): this;
    on(event: 'job promotion', listener: (id: string) => any): this;
    on(event: 'job start', listener: (id: string) => any): this;
    on(event: 'job enqueue', listener: (id: string, type: string) => any): this;
    on(event: 'error', listener: (err: Error) => any): this;
    on(event: string, listener: Function): this;
}

export interface Priorities {
    low: number;
    normal: number;
    medium: number;
    high: number;
    critical: number;
}

export interface BackoffOptions {
    delay?: number;
    type: 'fixed' | 'exponential';
}

export class Job<T = any> extends events.EventEmitter {
    public id: number;
    public type: string;
    public data: T;
    public client: RedisClient;

    static priorities: Priorities;
    static disableSearch: boolean;
    static jobEvents: boolean;
    static get<T = any>(id: number, cb: (err: Error | void, job: Job<T>) => any): void;
    static get<T = any>(id: number, jobType: string, cb: (err: Error | void, job: Job<T>) => any): void;
    static remove(id: number, cb?: (err?: Error) => any): void;
    static removeBadJob(id: number, jobType?: string): void;
    static log(id: number, cb: (err: Error | void, logs: string[]) => any): void;
    static range(from: number, to: number, order: string, cb: RangeHandler): void;
    static rangeByState(state: string, from: number, to: number, order: string, cb: RangeHandler): void;
    static rangeByType(type: string, state: string, from: number, to: number, order: string, cb: RangeHandler): void;

    constructor(type: string, data?: any);
    toJSON(): any;
    refreshTtl(): void;
    log(value: any): this;
    log(value: string, ...args: any[]): this;
    set(key: string, val: string, cb?: (err: Error | void, res: number) => any): this;
    get(key: string, cb?: (err: Error | void, data: string) => any): this;
    progress(): number;
    progress(complete: number, total: number, data?: any): this;
    delay(ms: number | Date): this;
    removeOnComplete(remove: boolean): this;
    backoff(): BackoffOptions;
    backoff(param: boolean | BackoffOptions | ((attempts: number, delay: number) => number)): this;
    ttl(ms: number): this;
    priority(level: string | number): this;
    attempt(cb: (err: Error | void, remainingAttempts: number, attempts: number, maxAttempts: number) => any): this;
    reattempt(attempt: number, cb?: Function): this;
    attempts(n: number): this;
    failedAttempt(theErr: Error, cb: (err?: Error, finished?: number, attempts?: number) => any): this;
    searchKeys(): string[];
    searchKeys(keys: string | string[]): this;
    remove(cb?: (err?: Error) => any): this;
    state(state: string, cb?: (err?: Error) => any): this;
    error(err: string | Error): this;
    complete(cb?: (err?: Error) => any): this;
    failed(cb?: (err?: Error) => any): this;
    inactive(cb?: (err?: Error) => any): this;
    active(cb?: (err?: Error) => any): this;
    delayed(cb?: (err?: Error) => any): this;
    save(cb?: (err?: Error) => any): this;
    update(cb?: (err?: Error) => any): this;
    subscribe(cb?: (err?: Error) => any): this;

    on(event: 'complete', listener: (result: any) => any): this;
    on(event: 'failed attempt', listener: (errorMessage: any, doneAttempts: number) => any): this;
    on(event: 'failed', listener: (errorMessage: any) => any): this;
    on(event: 'progress', listener: (progress: number, data: any) => any): this;
    on(event: 'remove', listener: (type: string) => any): this;
    on(event: 'promotion', listener: () => any): this;
    on(event: 'start', listener: () => any): this;
    on(event: 'enqueue', listener: (type: string) => any): this;
    on(event: string, listener: (...args: any[]) => any): this;
}

export class Worker<T = any> extends events.EventEmitter {
    queue: Queue;
    type: string;
    client: RedisClient;
    job: Job<T>;
    running: boolean;

    constructor(queue: Queue, type: string);
    start(cb: JobHandler<T>): this;
    error(err: string | Error, job: Job<T>): this;
    failed(job: Job<T>, theErr: Error, cb?: JobHandler<T>): this;
    process(job: Job<T>, cb: JobHandler<T>): this;
    idle(): this;
    shutdown(cb: (err?: Error) => any): void;
    shutdown(timeout: number, cb: (err?: Error) => any): void;
    emitJobEvent(event: Object, job: Job<T>, arg1: any, arg2: any): void;
    resume(): boolean;
}

interface Redis {
    configureFactory(options: Object, queue: Queue): void;
    createClient(): RedisClient;
    createClientFactory(options: Object): RedisClient;
    client(): RedisClient;
    pubsubClient(): RedisClient;
    reset(): void;
}

export interface App {
    (req: any, res: any, next: Function): void;
    set(key: 'title', value: string): void;
    set(key: string, value: any): void;
}

export var app: App;
export var redis: Redis;
export var workers: Array<Worker<any>>;
export var version: string;

export interface QueueOptions {
    jobEvents?: boolean;
    disableSearch?: boolean;
    prefix?: string;
    redis?: string | {
        socket?: string;
        port?: number;
        host?: string;
        auth?: string;
        db?: number;
        // See https://github.com/mranney/node_redis#rediscreateclient
        options?: any;
        createClientFactory?: () => RedisClient;
    };
}

export function createQueue(options?: QueueOptions): Queue;
