/**
 * The `node:async_hooks` module provides an API to track asynchronous resources.
 * It can be accessed using:
 *
 * ```js
 * import async_hooks from 'node:async_hooks';
 * ```
 * @experimental
 * @see [source](https://github.com/nodejs/node/blob/v25.x/lib/async_hooks.js)
 */
declare module "node:async_hooks" {
    /**
     * Low-level API.
     * Registers functions to be called for different lifetime events of each async
     * operation. We strongly discourage direct use of async_hooks.
     * Prefer AsyncLocalStorage for most use cases.
     *
     * All callbacks are optional. For example, if only resource cleanup needs to
     * be tracked, then only the `destroy` callback needs to be passed.
     *
     * The specifics of all functions that can be passed to `callbacks` are in the `HookCallbacks` section.
     *
     * ```js
     * import { createHook } from 'node:async_hooks';
     *
     * const asyncHook = createHook({
     *   init(asyncId, type, triggerAsyncId, resource) { },
     *   destroy(asyncId) { },
     * });
     * ```
     *
     * @since v8.1.0
     * @param callbacks The `HookCallbacks` to register
     * @return Instance used for disabling and enabling hooks
     */
    function createHook(callbacks: HookCallbacks): AsyncHook;

    /**
     * Low-level API.
     * Returns the asyncId of the current execution context.
     * Prefer AsyncLocalStorage for general async context tracking.
     * @since v8.1.0
     * @return The asyncId of the current execution context.
     */
    function executionAsyncId(): number;

    /**
     * Low-level API.
     * Returns the ID of the resource responsible for calling the callback that is currently being executed.
     * Prefer AsyncLocalStorage for general async context tracking.
     * @since v8.1.0
     * @return The ID of the resource responsible for calling the callback.
     */
    function triggerAsyncId(): number;

    interface HookCallbacks {
        init?(asyncId: number, type: string, triggerAsyncId: number, resource: object): void;
        before?(asyncId: number): void;
        after?(asyncId: number): void;
        promiseResolve?(asyncId: number): void;
        destroy?(asyncId: number): void;
    }

    interface AsyncHook {
        enable(): this;
        disable(): this;
    }

    interface AsyncResourceOptions {
        triggerAsyncId?: number | undefined;
        requireManualDestroy?: boolean | undefined;
    }

    class AsyncResource {
        constructor(type: string, triggerAsyncId?: number | AsyncResourceOptions);
        static bind<Func extends (this: ThisArg, ...args: any[]) => any, ThisArg>(
            fn: Func,
            type?: string,
            thisArg?: ThisArg,
        ): Func;
        bind<Func extends (...args: any[]) => any>(fn: Func): Func;
        runInAsyncScope<This, Result>(
            fn: (this: This, ...args: any[]) => Result,
            thisArg?: This,
            ...args: any[]
        ): Result;
        emitDestroy(): this;
        asyncId(): number;
        triggerAsyncId(): number;
    }

    interface AsyncLocalStorageOptions {
        defaultValue?: any;
        name?: string | undefined;
    }

    /**
     * Recommended high-level API for async context tracking.
     * Use this class for most async tracking use cases.
     *
     * Each instance maintains an independent store and can safely coexist with other instances.
     * @since v13.10.0, v12.17.0
     */
    class AsyncLocalStorage<T> {
        constructor(options?: AsyncLocalStorageOptions);
        run<R>(store: T, callback: () => R): R;
        run<R, TArgs extends any[]>(store: T, callback: (...args: TArgs) => R, ...args: TArgs): R;
        getStore(): T | undefined;
        enterWith(store: T): void;
        disable(): void;
        readonly name: string;
        static bind<Func extends (...args: any[]) => any>(fn: Func): Func;
        static snapshot(): <R, TArgs extends any[]>(fn: (...args: TArgs) => R, ...args: TArgs) => R;
    }

    namespace asyncWrapProviders {
        const NONE: number;
        const DIRHANDLE: number;
        const DNSCHANNEL: number;
        const ELDHISTOGRAM: number;
        const FILEHANDLE: number;
        const FILEHANDLECLOSEREQ: number;
        const FIXEDSIZEBLOBCOPY: number;
        const FSEVENTWRAP: number;
        const FSREQCALLBACK: number;
        const FSREQPROMISE: number;
        const GETADDRINFOREQWRAP: number;
        const GETNAMEINFOREQWRAP: number;
        const HEAPSNAPSHOT: number;
        const HTTP2SESSION: number;
        const HTTP2STREAM: number;
        const HTTP2PING: number;
        const HTTP2SETTINGS: number;
        const HTTPINCOMINGMESSAGE: number;
        const HTTPCLIENTREQUEST: number;
        const JSSTREAM: number;
        const JSUDPWRAP: number;
        const MESSAGEPORT: number;
        const PIPECONNECTWRAP: number;
        const PIPESERVERWRAP: number;
        const PIPEWRAP: number;
        const PROCESSWRAP: number;
        const PROMISE: number;
        const QUERYWRAP: number;
        const SHUTDOWNWRAP: number;
        const SIGNALWRAP: number;
        const STATWATCHER: number;
        const STREAMPIPE: number;
        const TCPCONNECTWRAP: number;
        const TCPSERVERWRAP: number;
        const TCPWRAP: number;
        const TTYWRAP: number;
        const UDPSENDWRAP: number;
        const UDPWRAP: number;
        const SIGINTWATCHDOG: number;
        const WORKER: number;
        const WORKERHEAPSNAPSHOT: number;
        const WRITEWRAP: number;
        const ZLIB: number;
        const CHECKPRIMEREQUEST: number;
        const PBKDF2REQUEST: number;
        const KEYPAIRGENREQUEST: number;
        const KEYGENREQUEST: number;
        const KEYEXPORTREQUEST: number;
        const CIPHERREQUEST: number;
        const DERIVEBITSREQUEST: number;
        const HASHREQUEST: number;
        const RANDOMBYTESREQUEST: number;
        const RANDOMPRIMEREQUEST: number;
        const SCRYPTREQUEST: number;
        const SIGNREQUEST: number;
        const TLSWRAP: number;
        const VERIFYREQUEST: number;
    }
}

declare module "async_hooks" {
    export * from "node:async_hooks";
}
