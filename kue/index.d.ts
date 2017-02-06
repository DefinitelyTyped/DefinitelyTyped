// Type definitions for kue 0.9.x
// Project: https://github.com/Automattic/kue
// Definitions by: Nicholas Penree <http://github.com/drudge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import events = require('events');
import express = require('express');
export import redisClientFactory = require('redis');

export declare class Queue extends events.EventEmitter {
    name: string;
    id: string;
    promoter: any;
    workers: Worker[];
    shuttingDown: boolean;
    client: redisClientFactory.RedisClient;
    testMode: TestMode;

    static singleton: Queue;

    constructor(options: Object);
    create(type: string, data: Object): Job;
    createJob(type: string, data: Object): Job;
    promote(ms?: number): void;
    setupTimer(): void;
    checkJobPromotion(ms: number): void;
    checkActiveJobTtl(ttlOptions: Object): void;
    watchStuckJobs(ms: number): void;
    setting(name: string, fn: Function): Queue;
    process(type: string, n?: number, fn?: Function): void;
    shutdown(timeout: number, type: string, fn: Function): Queue;
    types(fn: Function): Queue;
    state(string: string, fn: Function): Queue;
    workTime(fn: Function): Queue;
    cardByType(type: string, state: string, fn: Function): Queue;
    card(state: string, fn: Function): Queue;
    complete(fn: Function): Queue;
    failed(fn: Function): Queue;
    inactive(fn: Function): Queue;
    active(fn: Function): Queue;
    delayed(fn: Function): Queue;
    completeCount(type: string, fn: Function): Queue;
    failedCount(type: string, fn: Function): Queue;
    inactiveCount(type: string, fn: Function): Queue;
    activeCount(type: string, fn: Function): Queue;
    delayedCount(type: string, fn: Function): Queue;
}

interface Priorities {
    low: number;
    normal: number;
    medium: number;
    high: number;
    critical: number;
}

export declare class Job extends events.EventEmitter {
    public id: number;
    public type: string;
    public data: any;
    public client: redisClientFactory.RedisClient;
    private _max_attempts;

    static priorities: Priorities;
    static disableSearch: boolean;
    static jobEvents: boolean;
    static get(id: number, fn: Function): void;
    static remove(id: number, fn?: Function): void;
    static removeBadJob(id: number): void;
    static log(id: number, fn: Function): void;
    static range(from: number, to: number, order: string, fn: Function): void;
    static rangeByState(state: string, from: number, to: number, order: string, fn: Function): void;
    static rangeByType(type: string, state: string, from: number, to: number, order: string, fn: Function): void;

    constructor(type: string, data?: any);
    toJSON(): Object;
    log(str: string): Job;
    set(key: string, val: string, fn?: Function): Job;
    get(key: string, fn?: Function): Job;
    progress(complete: number, total: number, data?: any): Job;
    delay(ms: number | Date): Job;
    removeOnComplete(param: any): void;
    backoff(param: any): void;
    ttl(param: any): Job;
    private _getBackoffImpl(): void;
    priority(level: string | number): Job;
    attempt(fn: Function): Job;
    reattempt(attempt: number, fn?: Function): void;
    attempts(n: number): Job;
    searchKeys(keys: string[] | string): Job;
    remove(fn?: Function): Job;
    state(state: string, fn?: Function): Job;
    error(err: Error): Job;
    complete(fn?: Function): Job;
    failed(fn?: Function): Job;
    inactive(fn?: Function): Job;
    active(fn?: Function): Job;
    delayed(fn?: Function): Job;
    save(fn?: Function): Job;
    update(fn?: Function): Job;
    subscribe(fn?: Function): Job;
}

declare class Worker extends events.EventEmitter {
    queue: Queue;
    type: string;
    client: redisClientFactory.RedisClient;
    job: Job;

    constructor(queue: Queue, type: string);
    start(fn: Function): Worker;
    error(err: Error, job: Job): Worker;
    failed(job: Job, theErr: Object, fn?: Function): Worker;
    process(job: Job, fn: Function): Worker;
    private zpop(key: string, fn: Function): void;
    private getJob(fn: Function): void;
    idle(): Worker;
    shutdown(timeout: number, fn: Function): void;
    emitJobEvent(event: Object, job: Job, arg1: any, arg2: any): void;
    resume(): boolean;
}

interface Redis {
    configureFactory(options: Object, queue: Queue): void;
    createClient(): redisClientFactory.RedisClient;
    createClientFactory(options: Object): redisClientFactory.RedisClient;
    client(): redisClientFactory.RedisClient;
    pubsubClient(): redisClientFactory.RedisClient;
    reset(): void;
}

interface TestMode {
    jobs: Job[];
    enter(): void;
    exit(): void;
    clear(): void;
}

export declare var app: express.Application;
export declare var workers: Worker[];

export declare function createQueue(options?: Object): Queue;
