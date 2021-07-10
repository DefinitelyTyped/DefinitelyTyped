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
    name?: string | undefined;
    path?: string | (() => void) | undefined;
    timeout?: number | string | boolean | undefined;
    interval?: number | string | undefined;
    date?: Date | undefined;
    cron?: string | undefined;
    hasSeconds?: boolean | undefined;
    cronValidate?: object | undefined;
    closeWorkerAfterMs?: number | undefined;
    worker?: object | undefined;
    outputWorkerMetadate?: boolean | undefined;
}

interface BreeOptions {
    logger?: object | undefined;
    root?: string | boolean | undefined;
    timeout?: number | boolean | undefined;
    interval?: number | undefined;
    jobs?: Array<string | (() => void) | JobOptions> | undefined;
    hasSeconds?: boolean | undefined;
    cronValidate?: object | undefined;
    closeWorkerAfterMs?: number | undefined;
    defaultExtension?: string | undefined;
    worker?: object | undefined;
    outputWorkerMetadate?: boolean | undefined;
    errorHandler?: ((error: any, workerMetadata: any) => void) | undefined;
    workerMessageHandler?: ((message: any, workerMetadata: any) => void) | undefined;
}
