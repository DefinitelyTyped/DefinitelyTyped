/// <reference types="node" />

import * as cp from "child_process";
import * as wt from "worker_threads";

export interface WorkerPoolStats {
    totalWorkers: number;
    busyWorkers: number;
    idleWorkers: number;
    pendingTasks: number;
    activeTasks: number;
}

export type Proxy<T extends { [k: string]: (...args: any[]) => any }> = {
    [M in keyof T]: (...args: Parameters<T[M]>) => Promise<ReturnType<T[M]>>;
};

export interface WorkerPool {
    /**
     * Execute a function on a worker with given arguments.
     *
     * @param method When method is a string, a method with this name must exist at the worker
     * and must be registered to make it accessible via the pool.
     * The function will be executed on the worker with given parameters.
     * When method is a function, the provided function fn will be stringified, send to the worker,
     * and executed there with the provided parameters. The provided function must be static,
     * it must not depend on variables in a surrounding scope.
     */
    exec<T extends (...args: any[]) => any>(
        method: T | string,
        params: Parameters<T> | null,
        options?: { on?: (payload: any) => void; transfer?: Transferable[] },
    ): Promise<ReturnType<T>>;

    /**
     * Create a proxy for the worker pool.
     * The proxy contains a proxy for all methods available on the worker.
     * All methods return promises resolving the methods result.
     */
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    proxy<T extends { [k: string]: (...args: any[]) => any }>(): Promise<Proxy<T>>;

    /** Retrieve statistics on workers, and active and pending tasks. */
    stats(): WorkerPoolStats;

    /**
     * If parameter force is false (default), workers will finish the tasks they are working on before terminating themselves.
     * When force is true, all workers are terminated immediately without finishing running tasks.
     * If timeout is provided, worker will be forced to terminal when the timeout expires and the worker has not finished.
     */
    terminate(force?: boolean, timeout?: number): Promise<any[]>;
}

/**
 * The helper class for transferring data from the worker to the main thread.
 */
export class Transfer {
    message: any;
    transfer: Transferable[];

    /**
     * @param message The object to deliver to the main thread.
     * @param transfer An array of transferable Objects to transfer ownership of.
     */
    constructor(message: any, transfer: Transferable[]);
}

export class Promise<T, E = Error> {
    readonly resolved: boolean;
    readonly rejected: boolean;
    readonly pending: boolean;

    always<TT>(handler: () => Promise<TT>): Promise<TT>;
    then<TT, TE = never>(result: (r: T) => TT, err?: (r: E) => TE): Promise<TT | TE, any>;
    catch<TT>(err: (error: E) => TT): Promise<T | TT>;
    cancel(): this;
    timeout(delay: number): this;

    static all(promises: Array<Promise<any, any>>): Promise<any[], any>;
}

export namespace Promise {
    // eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
    export class CancellationError extends Error {
        name: "CancellationError";
    }

    // eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
    export class TimeoutError extends Error {
        name: "TimeoutError";
    }
}

export interface WorkerCreationOptions {
    /** For process worker type. An array passed as args to child_process.fork */
    forkArgs?: string[] | undefined;

    /**
     * For process worker type. An object passed as options to child_process.fork.
     */
    forkOpts?: cp.ForkOptions | undefined;

    /**
     * For worker worker type. An object passed to worker_threads.options.
     */
    workerThreadOpts?: wt.WorkerOptions | undefined;
}

export interface WorkerHandlerOptions extends WorkerCreationOptions {
    script?: string | undefined;
}

export interface WorkerPoolOptions extends WorkerCreationOptions {
    /**
     * The minimum number of workers that must be initialized and kept available.
     * Setting this to 'max' will create maxWorkers default workers.
     */
    minWorkers?: number | "max" | undefined;

    /**
     * The default number of maxWorkers is the number of CPU's minus one.
     * When the number of CPU's could not be determined (for example in older browsers), maxWorkers is set to 3.
     */
    maxWorkers?: number | undefined;

    /**
     * The maximum number of tasks allowed to be queued. Can be used to prevent running out of memory.
     * If the maximum is exceeded, adding a new task will throw an error.
     * The default value is `Infinity`.
     */
    maxQueueSize?: number | undefined;

    /**
     * - In case of `'auto'` (default), workerpool will automatically pick a suitable type of worker:
     *   when in a browser environment, `'web'` will be used. When in a node.js environment, `worker_threads` will be used
     *   if available (Node.js >= 11.7.0), else `child_process` will be used.
     * - In case of `'web'`, a Web Worker will be used. Only available in a browser environment.
     * - In case of `'process'`, `child_process` will be used. Only available in a node.js environment.
     * - In case of `'thread'`, `worker_threads` will be used. If `worker_threads` are not available, an error is thrown.
     *   Only available in a node.js environment.
     */
    workerType?: "auto" | "web" | "process" | "thread" | undefined;

    /**
     * The timeout in milliseconds to wait for a worker to cleanup it's resources on termination before stopping it forcefully.
     *
     * @default 1000.
     */
    workerTerminateTimeout?: number | undefined;

    /**
     * A callback that is called whenever a worker is being created.
     * It can be used to allocate resources for each worker for example.
     * Optionally, this callback can return an object containing one or more of the above properties.
     * The provided properties will be used to override the Pool properties for the worker being created.
     */
    onCreateWorker?: ((options: WorkerHandlerOptions) => WorkerHandlerOptions | void) | undefined;
    /**
     * A callback that is called whenever a worker is being terminated.
     * It can be used to release resources that might have been allocated for this specific worker.
     * The callback is passed as argument an object as described for onCreateWorker, with each property sets with the value for the worker being terminated.
     */
    onTerminateWorker?: ((options: WorkerHandlerOptions) => void) | undefined;
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

export interface WorkerOptions {
    /**
     * A callback that is called whenever a worker is being terminated.
     * It can be used to release resources that might have been allocated for this specific worker.
     * The difference with pool's onTerminateWorker is that this callback runs in the worker context, while onTerminateWorker is executed on the main thread.
     */
    onTerminate?: (code?: number) => PromiseLike<void> | void;
}

/**
 * Argument methods is optional can can be an object with functions available in the worker.
 * Registered functions will be available via the worker pool.
 */
export function worker(methods?: { [k: string]: (...args: any[]) => any }, options?: WorkerOptions): any;
export function workerEmit(payload: any): void;
export const platform: "node" | "browser";
export const isMainThread: boolean;
export const cpus: number;
