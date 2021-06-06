// Type definitions for webworker-promise 0.4
// Project: https://github.com/kwolfy/webworker-promise#readme
// Definitions by: Idicious <https://github.com/idicious>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Webworker side API for registering operations and events that can be called from the main thread.
 */
export interface WorkerHost {
    /**
     * Allows you to register operations that can be triggered via the `exec` command from the main thread.
     * The emit function is scoped to the event handler of the `exec` operation and does not trigger the global `on` / `once` handlers in the main thread.
     *
     * @param eventName Name of the operation
     * @param handler Event handler
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
    operation(
        eventName: string,
        handler: (message: any, emit: (eventName: string, data: any) => void) => any,
    ): WorkerHost;
    /**
     * Allows you to register operations that can be triggered via the `emit` command from the main thread.
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
    on(eventName: string, handler: (...args: any[]) => void): WorkerHost;
    /**
     * Allows you to register operations that can be triggered via the `emit` command from the main thread, will only be triggered once.
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
    once(eventName: string, handler: (...args: any[]) => void): WorkerHost;
    /**
     * Allows you to emit values to the main thread that can be listened to via the `on` and `once` methods.
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

declare class TransferableResponse {
    constructor(response: any, tranferables: Transferable[]);
}

declare type Register = {
    /**
     * Main function to register functions in the webworker that a callable from the main thread.
     *
     * @param register Eventhandler for `postMessage` calls from the main thread.
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
    (register?: (message: any, emit: (eventName: string, data: any) => void) => Promise<any>): WorkerHost;

    /**
     * Use to return transferables from worker thread to main thread.
     *
     * @example
     *
     * ```
     *  const arrayBuffer = new ArrayBuffer(10);
     *
     *  // worker.js
     *  registerWebworker((message) => {
     *      return new registerWebworker.TransferableResponse(arrayBuffer, [arrayBuffer]);
     *  });
     * ```
     */
    TransferableResponse: typeof TransferableResponse;
};

declare const _export: Register;

export default _export;
