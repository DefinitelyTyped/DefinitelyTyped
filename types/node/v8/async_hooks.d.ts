/**
 * Async Hooks module: https://nodejs.org/api/async_hooks.html
 */
declare module "async_hooks" {
    /**
     * Returns the asyncId of the current execution context.
     */
    export function executionAsyncId(): number;
    /// @deprecated - replaced by executionAsyncId()
    export function currentId(): number;

    /**
     * Returns the ID of the resource responsible for calling the callback that is currently being executed.
     */
    export function triggerAsyncId(): number;
    /// @deprecated - replaced by triggerAsyncId()
    export function triggerId(): number;

    export interface HookCallbacks {
        /**
         * Called when a class is constructed that has the possibility to emit an asynchronous event.
         * @param asyncId a unique ID for the async resource
         * @param type the type of the async resource
         * @param triggerAsyncId the unique ID of the async resource in whose execution context this async resource was created
         * @param resource reference to the resource representing the async operation, needs to be released during destroy
         */
        init?(asyncId: number, type: string, triggerAsyncId: number, resource: Object): void;

        /**
         * When an asynchronous operation is initiated or completes a callback is called to notify the user.
         * The before callback is called just before said callback is executed.
         * @param asyncId the unique identifier assigned to the resource about to execute the callback.
         */
        before?(asyncId: number): void;

        /**
         * Called immediately after the callback specified in before is completed.
         * @param asyncId the unique identifier assigned to the resource which has executed the callback.
         */
        after?(asyncId: number): void;

        /**
         * Called when a promise has resolve() called. This may not be in the same execution id
         * as the promise itself.
         * @param asyncId the unique id for the promise that was resolve()d.
         */
        promiseResolve?(asyncId: number): void;

        /**
         * Called after the resource corresponding to asyncId is destroyed
         * @param asyncId a unique ID for the async resource
         */
        destroy?(asyncId: number): void;
    }

    export interface AsyncHook {
        /**
         * Enable the callbacks for a given AsyncHook instance. If no callbacks are provided enabling is a noop.
         */
        enable(): this;

        /**
         * Disable the callbacks for a given AsyncHook instance from the global pool of AsyncHook callbacks to be executed. Once a hook has been disabled it will not be called again until enabled.
         */
        disable(): this;
    }

    /**
     * Registers functions to be called for different lifetime events of each async operation.
     * @param options the callbacks to register
     * @return an AsyncHooks instance used for disabling and enabling hooks
     */
    export function createHook(options: HookCallbacks): AsyncHook;

    export interface AsyncResourceOptions {
      /**
       * The ID of the execution context that created this async event.
       * Default: `executionAsyncId()`
       */
      triggerAsyncId?: number;

      /**
       * Disables automatic `emitDestroy` when the object is garbage collected.
       * This usually does not need to be set (even if `emitDestroy` is called
       * manually), unless the resource's `asyncId` is retrieved and the
       * sensitive API's `emitDestroy` is called with it.
       * Default: `false`
       */
      requireManualDestroy?: boolean;
    }

    /**
     * The class AsyncResource was designed to be extended by the embedder's async resources.
     * Using this users can easily trigger the lifetime events of their own resources.
     */
    export class AsyncResource {
        /**
         * AsyncResource() is meant to be extended. Instantiating a
         * new AsyncResource() also triggers init. If triggerAsyncId is omitted then
         * async_hook.executionAsyncId() is used.
         * @param type The type of async event.
         * @param triggerAsyncId The ID of the execution context that created
         *   this async event (default: `executionAsyncId()`), or an
         *   AsyncResourceOptions object (since 8.10)
         */
        constructor(type: string, triggerAsyncId?: number|AsyncResourceOptions);

        /**
         * Call AsyncHooks before callbacks.
         */
        emitBefore(): void;

        /**
         * Call AsyncHooks after callbacks
         */
        emitAfter(): void;

        /**
         * Call AsyncHooks destroy callbacks.
         */
        emitDestroy(): void;

        /**
         * @return the unique ID assigned to this AsyncResource instance.
         */
        asyncId(): number;

        /**
         * @return the trigger ID for this AsyncResource instance.
         */
        triggerAsyncId(): number;
    }
}
