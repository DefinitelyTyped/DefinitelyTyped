// Type definitions for bree 6.5
// Project: https://github.com/breejs/bree
// Definitions by: Taylor Schley <https://github.com/shadogate15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import EventEmitter = require('events');
import { WorkerOptions } from 'worker_threads';
import { Timeout, Interval } from 'safe-timers';

export = Bree;

declare class Bree extends EventEmitter {
    constructor(config?: Bree.BreeOptions);

    config: Bree.BreeConfigs;

    closeWorkerAfterMs: object;
    workers: object;
    timeouts: Record<string, Timeout>;
    intervals: Record<string, Interval>;

    isSchedule: (value: any) => boolean;
    getWorkerMetadata: (name: string, meta?: object) => object;
    run: (name?: string) => void;
    start: (name?: string) => void;
    stop: (name?: string) => Promise<void>;
    add: (jobs: string | (() => void) | Bree.JobOptions | Array<string | (() => void) | Bree.JobOptions>) => void;
    remove: (name: string) => Promise<void>;
    removeSafeTimer: (type: string, name: string) => void;

    validateJob: (
        job: string | (() => void) | Bree.JobOptions,
        i: number,
        names: string[],
        config: Bree.BreeOptions,
    ) => void;
    getName: (job: string | object | (() => void)) => string;
    getHumanToMs: (_value: string) => number;
    parseValue: (value: boolean | string | number | object) => number | boolean | object;

    // will set the output for this as Node Workers
    // once bthreads is dropped in Bree v7.0.0
    createWorker: (filename: string, options: Partial<WorkerOptions>) => object;
}

declare namespace Bree {
    interface JobOptions {
        name?: string;
        path?: string | (() => void);
        timeout?: number | string | boolean;
        interval?: number | string;
        date?: Date;
        cron?: string;
        hasSeconds?: boolean;
        cronValidate?: object;
        closeWorkerAfterMs?: number;
        worker?: Partial<WorkerOptions>;
        outputWorkerMetadate?: boolean;
        timezone?: string;
    }

    interface BreeConfigs {
        logger: object;
        root: string | boolean;
        timeout: number | boolean;
        interval: number;
        timezone: string;
        jobs: Array<string | (() => void) | JobOptions>;
        hasSeconds: boolean;
        cronValidate: object;
        closeWorkerAfterMs: number;
        defaultExtension: string;
        acceptedExtensions: string[];
        worker: WorkerOptions;
        errorHandler?: (error: any, workerMetadata: any) => void;
        workerMessageHandler?: (message: any, workerMetadata: any) => void;
        outputWorkerMetadate: boolean;
    }

    interface BreeOptions {
        logger?: object;
        root?: string | boolean;
        timeout?: number | boolean;
        interval?: number;
        timezone?: string;
        jobs?: Array<string | (() => void) | JobOptions>;
        hasSeconds?: boolean;
        cronValidate?: object;
        closeWorkerAfterMs?: number;
        defaultExtension?: string;
        acceptedExtensions?: string[];
        worker?: WorkerOptions;
        errorHandler?: (error: any, workerMetadata: any) => void;
        workerMessageHandler?: (message: any, workerMetadata: any) => void;
        outputWorkerMetadate?: boolean;
    }

    type PluginFunc<T = unknown> = (options: T, c: typeof Bree) => void;

    function extend<T = unknown>(plugin: PluginFunc<T>, options?: T): Bree;
}
