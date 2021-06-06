// Type definitions for webworker-promise 0.4
// Project: https://github.com/kwolfy/webworker-promise#readme
// Definitions by: Idicious <https://github.com/idicious>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import NodeWorker from '../node-worker';

interface WorkerPoolSharedOptions {
    maxThreads?: number;
    maxConcurrentPerWorker?: number;
}

export interface WorkerPoolSrcOptions extends WorkerPoolSharedOptions {
    src: string;
}

export interface WorkerPoolCreateOptions extends WorkerPoolSharedOptions {
    create: () => Worker | NodeWorker;
}

/**
 * Workers Pool
 * Dynamic pool for workers.
 *
 * Note: It's experimental feature, and api may be changed
 * 
 * @example
 * const pool = WorkerPool.create({
        src: './test.worker.js',
        // or
        create: () => new Worker('./test.worker.js'),
        maxThreads: 3, // optional, default is 2, max numbers of workers to create if necessary
        maxConcurrentPerWorker: 1, // optional, default is 1
    });

    pool.postMessage('hello').then(() => {
        console.log('result');
    });
 */
export default class WorkerPool {
    static create(workerPoolOptions: WorkerPoolSrcOptions | WorkerPoolCreateOptions): WorkerPool;
    postMessage<T = any, E = any>(
        message: any,
        transferableList?: Transferable[],
        onEvent?: (eventName: string, message: E) => void,
    ): Promise<T>;

    exec<T = any, E = any>(
        operationName: string,
        message?: any,
        transferableList?: Transferable[],
        onEvent?: (eventName: string, message: E) => void,
    ): Promise<T>;
}
