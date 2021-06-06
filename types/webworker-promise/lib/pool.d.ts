import NodeWorker from './node-worker';

export interface WorkerPoolSharedOptions {
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
 *
 * ```
 * const pool = WorkerPool.create({
 *      src: './test.worker.js',
 *      // or
 *      create: () => new Worker('./test.worker.js'),
 *      maxThreads: 3, // optional, default is 2, max numbers of workers to create if necessary
 *      maxConcurrentPerWorker: 1, // optional, default is 1
 *  });
 *
 *  pool.postMessage('hello').then(() => {
 *      console.log('result');
 *  });
 * ```
 */
export default class WorkerPool {
    static create(workerPoolOptions: WorkerPoolSrcOptions | WorkerPoolCreateOptions): WorkerPool;
    /**
     * Allows you to trigger the main worker function.
     * The event handler function is scoped to the emit passed into the main function and is not triggered by global emits from the worker.
     *
     * @param message Data to send to worker
     * @param transferableList List of transferables to send to worker
     * @param onEvent Eventhandler for `emit` calls from the worker
     *
     * @example
     *
     * ```
     * // worker.js
     * registerWebworker((message) => {
     *      return `Hello ${message}!`;
     * });
     *
     * // main.js
     * worker.postMessage('world').then((response) => {
     *      console.log(response); // Hello world!
     * })
     * ```
     */
    postMessage(
        message: unknown,
        transferableList?: Transferable[],
        onEvent?: (eventName: string, message: any) => void,
    ): Promise<any>;

    /**
     * Allows you to trigger operations that are registered via the `operation` function in the worker.
     * The event handler function is scoped to the emit passed into the `operation` function and is not triggered by global emits from the worker.
     *
     * @param operationName Name of the operation
     * @param message Data to send to worker
     * @param transferableList List of transferables to send to worker
     * @param onEvent Eventhandler for `emit` calls from the worker
     *
     * @example
     *
     * ```
     * // worker.js
     * registerWebworker().operation('greet', (message) => {
     *      return `Hello ${message}!`;
     * });
     *
     * // main.js
     * worker.exec('greet', 'world').then((response) => {
     *      console.log(response); // Hello world!
     * })
     * ```
     */
    exec(
        operationName: string,
        message?: any,
        transferableList?: Transferable[],
        onEvent?: (eventName: string, message: any) => void,
    ): Promise<any>;
}
