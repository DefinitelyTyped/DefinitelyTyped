// Type definitions for workerpool 5.0
// Project: https://github.com/josdejong/workerpool
// Definitions by: Alorel <https://github.com/Alorel>
//                 Seulgi Kim <https://github.com/sgkim126>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="node" />

import * as cp from 'child_process';

export interface WorkerPoolStats {
    totalWorkers: number;
    busyWorkers: number;
    idleWorkers: number;
    pendingTasks: number;
    activeTasks: number;
}

export type Proxy<T extends {[k: string]: (...args: any[]) => any}> = {
    [M in keyof T]: (...args: Parameters<T[M]>) => Promise<ReturnType<T[M]>>;
};

export interface WorkerPool {
    /**
     * Execute a function on a worker with given arguments.
     * @param method When method is a string, a method with this name must exist at the worker
     * and must be registered to make it accessible via the pool.
     * The function will be executed on the worker with given parameters.
     * When method is a function, the provided function fn will be stringified, send to the worker,
     * and executed there with the provided parameters. The provided function must be static,
     * it must not depend on variables in a surrounding scope.
     */
    exec<T extends (...args: any[]) => any>(method: T | string, params: Parameters<T> | null): Promise<ReturnType<T>>;

    /**
     * Create a proxy for the worker pool.
     * The proxy contains a proxy for all methods available on the worker.
     * All methods return promises resolving the methods result.
     */
    // tslint:disable-next-line: no-unnecessary-generics
    proxy<T extends {[k: string]: (...args: any[]) => any}>(): Promise<Proxy<T>>;

    /** Retrieve statistics on workers, and active and pending tasks. */
    stats(): WorkerPoolStats;

    /**
     * If parameter force is false (default), workers will finish the tasks they are working on before terminating themselves.
     * When force is true, all workers are terminated immediately without finishing running tasks.
     * If timeout is provided, worker will be forced to terminal when the timeout expires and the worker has not finished.
     */
    terminate(force?: boolean, timeout?: number): Promise<any[]>;

    /**
     * Clear all workers from the pool.
     * If parameter force is false (default), workers will finish the tasks they are working on before terminating themselves.
     * When force is true, all workers are terminated immediately without finishing running tasks.
     * @deprecated
     */
    clear(force?: boolean): Promise<any[]>;
}

export class Promise<T, E = Error> {
    readonly resolved: boolean;
    readonly rejected: boolean;
    readonly pending: boolean;

    always<TT>(handler: () => Promise<TT>): Promise<TT>;
    then<TT, EE = Error>(result: (r: T) => TT, err?: (r: E) => EE): Promise<TT, EE>;
    catch<TT>(err: (error: E) => TT): Promise<TT>;
    cancel(): this;
    timeout(delay: number): this;

    static all(promises: Array<Promise<any, any>>): Promise<any[], any>;
}

export namespace Promise {
    // tslint:disable-next-line:strict-export-declare-modifiers
    export class CancellationError extends Error {
        name: 'CancellationError';
    }

    // tslint:disable-next-line:strict-export-declare-modifiers
    export class TimeoutError extends Error {
        name: 'TimeoutError';
    }
}

export interface WorkerPoolOptions {
    /**
     * The minimum number of workers that must be initialized and kept available.
     * Setting this to 'max' will create maxWorkers default workers.
     */
    minWorkers?: number | 'max';
    /**
     * The default number of maxWorkers is the number of CPU's minus one.
     * When the number of CPU's could not be determined (for example in older browsers), maxWorkers is set to 3.
     */
    maxWorkers?: number;
    /**
     * In case of 'process' (default), child_process will be used.
     * In case of 'thread', worker_threads will be used. If worker_threads are not available, an error is thrown.
     * In case of 'auto', worker_threads will be used if available (Node.js >= 11.7.0), else child_process will be used as fallback.
     * @deprecated
     */
    nodeWorker?: 'process' | 'thread' | 'auto';

    /**
     * - In case of `'auto'` (default), workerpool will automatically pick a suitable type of worker:
     *   when in a browser environment, `'web'` will be used. When in a node.js environment, `worker_threads` will be used
     *   if available (Node.js >= 11.7.0), else `child_process` will be used.
     * - In case of `'web'`, a Web Worker will be used. Only available in a browser environment.
     * - In case of `'process'`, `child_process` will be used. Only available in a node.js environment.
     * - In case of `'thread'`, `worker_threads` will be used. If `worker_threads` are not available, an error is thrown.
     *   Only available in a node.js environment.
     */
    workerType?: 'auto' | 'web' | 'process' | 'thread';

    /** 2nd argument to pass to childProcess.fork() */
    forkArgs?: string[];

    forkOpts?: cp.ForkOptions;
}

/**
 * When a `script` argument is provided, the provided script will be started as a dedicated worker.
 * When no `script` argument is provided, a default worker is started which can be used to offload functions dynamically via `Pool.exec`.
 * Note that on node.js, `script` must be an absolute file path like `__dirname + '/myWorker.js'`.
 * In a browser environment, `script` can also be a data URL like `'data:application/javascript;base64,...'`.
 * This allows embedding the bundled code of a worker in your main application. See `examples/embeddedWorker` for a demo.
 */
export function pool(pathToScript?: string, options?: WorkerPoolOptions): WorkerPool;

/**
 * When a script argument is provided, the provided script will be started as a dedicated worker.
 * When no script argument is provided, a default worker is started which can be used to offload functions dynamically via Pool.exec.
 * Note that on node.js, script must be an absolute file path like __dirname + '/myWorker.js'.
 */
export function pool(options?: WorkerPoolOptions): WorkerPool;

/**
 * Argument methods is optional can can be an object with functions available in the worker.
 * Registered functions will be available via the worker pool.
 */
export function worker(methods?: {[k: string]: (...args: any[]) => any}): any;
export const platform: 'node' | 'browser';
export const isMainThread: boolean;
export const cpus: number;
