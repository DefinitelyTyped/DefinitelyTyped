// Type definitions for webworker-promise 0.4
// Project: https://github.com/kwolfy/webworker-promise#readme
// Definitions by: Idicious <https://github.com/idicious>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import NodeWorker from './lib/node-worker';

declare class PromiseWorker {
    constructor(worker: Worker | NodeWorker);

    /**
     * Allows you to trigger the main worker function.
     * The event handler function is scoped to the emit past into the main function and is not triggered by global emits from the worker.
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
    postMessage<TResult = any, TEvent = any>(
        message: unknown,
        transferableList?: Transferable[],
        onEvent?: (eventName: string, message: TEvent) => void,
    ): Promise<TResult>;

    /**
     * Allows you to trigger operations that are registered via the `operation` function in the worker.
     * The event handler function is scoped to the emit past into the `operation` function and is not triggered by global emits from the worker.
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
    exec<TResult = any, TEvent = any>(
        operationName: string,
        message?: any,
        transferableList?: Transferable[],
        onEvent?: (eventName: string, message: TEvent) => void,
    ): Promise<TResult>;
    /**
     * Allows you to register operations that can be triggered via the `emit` command from the worker.
     *
     * @param eventName Name of the operation
     * @param handler Event handler
     *
     * @example
     *
     * ```
     * // worker.js
     * const host = registerWebworker()
     *  .on('add', (x, y) => {
     *      host.emit('add:result', x + y);
     *  });
     *
     * // main.js
     * worker.on('add:result', (result) => {
     *      console.log(result); // 3
     * });
     *
     * worker.emit('add', 1, 2);
     * ```
     */
    on(eventName: string, handler: (...args: any[]) => void): PromiseWorker;
    /**
     * Allows you to register operations that can be triggered via the `emit` command from the worker, will only be triggered once.
     *
     * @param eventName Name of the operation
     * @param handler Event handler
     *
     * @example
     *
     * ```
     * // worker.js
     * const host = registerWebworker()
     *  .once('add', (x, y) => {
     *      host.emit('add:result', x + y);
     *  });
     *
     * // main.js
     * worker.once('add:result', (result) => {
     *      console.log(result); // 3
     * });
     *
     * // Will only have effect first call
     * worker.emit('add', 1, 2);
     * ```
     */
    once(eventName: string, handler: (...args: any[]) => void): PromiseWorker;
    /**
     * Allows you to emit values to the worker that can be listened to via the `on` and `once` methods.
     *
     * @param eventName Name of the operation
     * @param handler Event handler
     *
     * @example
     *
     * ```
     * // worker.js
     * const host = registerWebworker()
     *  .on('add', (x, y) => {
     *      host.emit('add:result', x + y);
     *  });
     *
     * // main.js
     * worker.on('add:result', (result) => {
     *      console.log(result); // 3
     * });
     *
     * worker.emit('add', 1, 2);
     * ```
     */
    emit(eventName: string, ...args: any[]): void;
}
export default PromiseWorker;
