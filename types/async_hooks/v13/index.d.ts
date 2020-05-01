// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

/**
 * Async Hooks module: https://nodejs.org/api/async_hooks.html
 */

/**
 * Returns the asyncId of the current execution context.
 */
export function executionAsyncId(): number;

/**
 * The resource representing the current execution.
 *  Useful to store data within the resource.
 *
 * Resource objects returned by `executionAsyncResource()` are most often internal
 * Node.js handle objects with undocumented APIs. Using any functions or properties
 * on the object is likely to crash your application and should be avoided.
 *
 * Using `executionAsyncResource()` in the top-level execution context will
 * return an empty object as there is no handle or request object to use,
 * but having an object representing the top-level can be helpful.
 */
export function executionAsyncResource(): object;

/**
 * Returns the ID of the resource responsible for calling the callback that is currently being executed.
 */
export function triggerAsyncId(): number;

export interface HookCallbacks {
    /**
     * Called when a class is constructed that has the possibility to emit an asynchronous event.
     * @param asyncId a unique ID for the async resource
     * @param type the type of the async resource
     * @param triggerAsyncId the unique ID of the async resource in whose execution context this async resource was created
     * @param resource reference to the resource representing the async operation, needs to be released during destroy
     */
    init?(asyncId: number, type: string, triggerAsyncId: number, resource: object): void;

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
     *   AsyncResourceOptions object (since 9.3)
     */
    constructor(type: string, triggerAsyncId?: number|AsyncResourceOptions);

    /**
     * Call the provided function with the provided arguments in the
     * execution context of the async resource. This will establish the
     * context, trigger the AsyncHooks before callbacks, call the function,
     * trigger the AsyncHooks after callbacks, and then restore the original
     * execution context.
     * @param fn The function to call in the execution context of this
     *   async resource.
     * @param thisArg The receiver to be used for the function call.
     * @param args Optional arguments to pass to the function.
     */
    runInAsyncScope<This, Result>(fn: (this: This, ...args: any[]) => Result, thisArg?: This, ...args: any[]): Result;

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

/**
 * When having multiple instances of `AsyncLocalStorage`, they are independent
 * from each other. It is safe to instantiate this class multiple times.
 */
export class AsyncLocalStorage<T> {
    /**
     * This method disables the instance of `AsyncLocalStorage`. All subsequent calls
     * to `asyncLocalStorage.getStore()` will return `undefined` until
     * `asyncLocalStorage.run()` or `asyncLocalStorage.runSyncAndReturn()`
     * is called again.
     *
     * When calling `asyncLocalStorage.disable()`, all current contexts linked to the
     * instance will be exited.
     *
     * Calling `asyncLocalStorage.disable()` is required before the
     * `asyncLocalStorage` can be garbage collected. This does not apply to stores
     * provided by the `asyncLocalStorage`, as those objects are garbage collected
     * along with the corresponding async resources.
     *
     * This method is to be used when the `asyncLocalStorage` is not in use anymore
     * in the current process.
     */
    disable(): void;

    /**
     * This method returns the current store.
     * If this method is called outside of an asynchronous context initialized by
     * calling `asyncLocalStorage.run` or `asyncLocalStorage.runAndReturn`, it will
     * return `undefined`.
     */
    getStore(): T | undefined;

    /**
     * Calling `asyncLocalStorage.run(callback)` will create a new asynchronous
     * context.
     * Within the callback function and the asynchronous operations from the callback,
     * `asyncLocalStorage.getStore()` will return an instance of `Map` known as
     * "the store". This store will be persistent through the following
     * asynchronous calls.
     *
     * The callback will be ran asynchronously. Optionally, arguments can be passed
     * to the function. They will be passed to the callback function.
     *
     * If an error is thrown by the callback function, it will not be caught by
     * a `try/catch` block as the callback is ran in a new asynchronous resource.
     * Also, the stacktrace will be impacted by the asynchronous call.
     */
    // TODO: Apply generic vararg once available
    run(store: T, callback: (...args: any[]) => void, ...args: any[]): void;

    /**
     * Calling `asyncLocalStorage.exit(callback)` will create a new asynchronous
     * context.
     * Within the callback function and the asynchronous operations from the callback,
     * `asyncLocalStorage.getStore()` will return `undefined`.
     *
     * The callback will be ran asynchronously. Optionally, arguments can be passed
     * to the function. They will be passed to the callback function.
     *
     * If an error is thrown by the callback function, it will not be caught by
     * a `try/catch` block as the callback is ran in a new asynchronous resource.
     * Also, the stacktrace will be impacted by the asynchronous call.
     */
    exit(callback: (...args: any[]) => void, ...args: any[]): void;

    /**
     * This methods runs a function synchronously within a context and return its
     * return value. The store is not accessible outside of the callback function or
     * the asynchronous operations created within the callback.
     *
     * Optionally, arguments can be passed to the function. They will be passed to
     * the callback function.
     *
     * If the callback function throws an error, it will be thrown by
     * `runSyncAndReturn` too. The stacktrace will not be impacted by this call and
     * the context will be exited.
     */
    runSyncAndReturn<R>(store: T, callback: (...args: any[]) => R, ...args: any[]): R;

    /**
     * This methods runs a function synchronously outside of a context and return its
     * return value. The store is not accessible within the callback function or
     * the asynchronous operations created within the callback.
     *
     * Optionally, arguments can be passed to the function. They will be passed to
     * the callback function.
     *
     * If the callback function throws an error, it will be thrown by
     * `exitSyncAndReturn` too. The stacktrace will not be impacted by this call and
     * the context will be re-entered.
     */
    exitSyncAndReturn<R>(callback: (...args: any[]) => R, ...args: any[]): R;

    /**
     * Calling `asyncLocalStorage.enterWith(store)` will transition into the context
     * for the remainder of the current synchronous execution and will persist
     * through any following asynchronous calls.
     */
    enterWith(store: T): void;
}
