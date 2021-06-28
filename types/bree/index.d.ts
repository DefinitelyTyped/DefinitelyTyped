// Type definitions for bree 6.2
// Project: https://github.com/breejs/bree
// Definitions by: Taylor Schley <https://github.com/shadogate15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import EventEmitter = require('events');

export = Bree;

declare class Bree extends EventEmitter {
    constructor(config?: BreeOptions);

    config: BreeOptions;

    closeWorkerAfterMs: object;
    workers: object;
    timeouts: object;
    intervals: object;

    isSchedule: (value: any) => boolean;
    getWorkerMetadata: (name: string, meta?: object) => object;
    run: (name?: string) => void;
    start: (name?: string) => void;
    stop: (name?: string) => Promise<void>;
    add: (jobs: string | (() => void) | JobOptions | Array<string | (() => void) | JobOptions>) => void;
    remove: (name: string) => Promise<void>;

    validateJob: (job: string | (() => void) | JobOptions, i: number, names: string[], config: BreeOptions) => void;
    getName: (job: string | object | (() => void)) => string;
    getHumanToMs: (_value: string) => number;
    parseValue: (value: boolean | string | number | object) => number | boolean | object;
}

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
    worker?: object;
    outputWorkerMetadate?: boolean;
}

interface BreeOptions {
    logger?: object;
    root?: string | boolean;
    timeout?: number | boolean;
    interval?: number;
    jobs?: Array<string | (() => void) | JobOptions>;
    hasSeconds?: boolean;
    cronValidate?: object;
    closeWorkerAfterMs?: number;
    defaultExtension?: string;
    worker?: object;
    outputWorkerMetadate?: boolean;
    errorHandler?: (error: any, workerMetadata: any) => void;
    workerMessageHandler?: (message: any, workerMetadata: any) => void;
}
