declare module 'worker_threads' {
    import { Blob } from 'node:buffer';
    import { Context } from 'node:vm';
    import { EventEmitter } from 'node:events';
    import { EventLoopUtilityFunction } from 'node:perf_hooks';
    import { FileHandle } from 'node:fs/promises';
    import { Readable, Writable } from 'node:stream';
    import { URL } from 'node:url';
    import { X509Certificate } from 'node:crypto';

    const isMainThread: boolean;
    const parentPort: null | MessagePort;
    const resourceLimits: ResourceLimits;
    const SHARE_ENV: unique symbol;
    const threadId: number;
    const workerData: any;

    class MessageChannel {
        readonly port1: MessagePort;
        readonly port2: MessagePort;
    }

    interface WorkerPerformance {
        eventLoopUtilization: EventLoopUtilityFunction;
    }

    type TransferListItem = ArrayBuffer | MessagePort | FileHandle | X509Certificate | Blob;

    class MessagePort extends EventEmitter {
        close(): void;
        postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void;
        ref(): void;
        unref(): void;
        start(): void;

        addListener(event: "close", listener: () => void): this;
        addListener(event: "message", listener: (value: any) => void): this;
        addListener(event: "messageerror", listener: (error: Error) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "close"): boolean;
        emit(event: "message", value: any): boolean;
        emit(event: "messageerror", error: Error): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "close", listener: () => void): this;
        on(event: "message", listener: (value: any) => void): this;
        on(event: "messageerror", listener: (error: Error) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "close", listener: () => void): this;
        once(event: "message", listener: (value: any) => void): this;
        once(event: "messageerror", listener: (error: Error) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "message", listener: (value: any) => void): this;
        prependListener(event: "messageerror", listener: (error: Error) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "message", listener: (value: any) => void): this;
        prependOnceListener(event: "messageerror", listener: (error: Error) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener(event: "close", listener: () => void): this;
        removeListener(event: "message", listener: (value: any) => void): this;
        removeListener(event: "messageerror", listener: (error: Error) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off(event: "close", listener: () => void): this;
        off(event: "message", listener: (value: any) => void): this;
        off(event: "messageerror", listener: (error: Error) => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface WorkerOptions {
        /**
         * List of arguments which would be stringified and appended to
         * `process.argv` in the worker. This is mostly similar to the `workerData`
         * but the values will be available on the global `process.argv` as if they
         * were passed as CLI options to the script.
         */
        argv?: any[] | undefined;
        env?: NodeJS.Dict<string> | typeof SHARE_ENV | undefined;
        eval?: boolean | undefined;
        workerData?: any;
        stdin?: boolean | undefined;
        stdout?: boolean | undefined;
        stderr?: boolean | undefined;
        execArgv?: string[] | undefined;
        resourceLimits?: ResourceLimits | undefined;
        /**
         * Additional data to send in the first worker message.
         */
        transferList?: TransferListItem[] | undefined;
        /**
         * @default true
         */
        trackUnmanagedFds?: boolean | undefined;
    }

    interface ResourceLimits {
        /**
         * The maximum size of a heap space for recently created objects.
         */
        maxYoungGenerationSizeMb?: number | undefined;
        /**
         * The maximum size of the main heap in MB.
         */
        maxOldGenerationSizeMb?: number | undefined;
        /**
         * The size of a pre-allocated memory range used for generated code.
         */
        codeRangeSizeMb?: number | undefined;
        /**
         * The default maximum stack size for the thread. Small values may lead to unusable Worker instances.
         * @default 4
         */
        stackSizeMb?: number | undefined;
    }

    class Worker extends EventEmitter {
        readonly stdin: Writable | null;
        readonly stdout: Readable;
        readonly stderr: Readable;
        readonly threadId: number;
        readonly resourceLimits?: ResourceLimits | undefined;
        readonly performance: WorkerPerformance;

        /**
         * @param filename  The path to the Worker’s main script or module.
         *                  Must be either an absolute path or a relative path (i.e. relative to the current working directory) starting with ./ or ../,
         *                  or a WHATWG URL object using file: protocol. If options.eval is true, this is a string containing JavaScript code rather than a path.
         */
        constructor(filename: string | URL, options?: WorkerOptions);

        postMessage(value: any, transferList?: ReadonlyArray<TransferListItem>): void;
        ref(): void;
        unref(): void;
        /**
         * Stop all JavaScript execution in the worker thread as soon as possible.
         * Returns a Promise for the exit code that is fulfilled when the `exit` event is emitted.
         */
        terminate(): Promise<number>;

        /**
         * Returns a readable stream for a V8 snapshot of the current state of the Worker.
         * See `v8.getHeapSnapshot()` for more details.
         *
         * If the Worker thread is no longer running, which may occur before the
         * `'exit'` event is emitted, the returned `Promise` will be rejected
         * immediately with an `ERR_WORKER_NOT_RUNNING` error
         */
        getHeapSnapshot(): Promise<Readable>;

        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "exit", listener: (exitCode: number) => void): this;
        addListener(event: "message", listener: (value: any) => void): this;
        addListener(event: "messageerror", listener: (error: Error) => void): this;
        addListener(event: "online", listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "error", err: Error): boolean;
        emit(event: "exit", exitCode: number): boolean;
        emit(event: "message", value: any): boolean;
        emit(event: "messageerror", error: Error): boolean;
        emit(event: "online"): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "error", listener: (err: Error) => void): this;
        on(event: "exit", listener: (exitCode: number) => void): this;
        on(event: "message", listener: (value: any) => void): this;
        on(event: "messageerror", listener: (error: Error) => void): this;
        on(event: "online", listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "error", listener: (err: Error) => void): this;
        once(event: "exit", listener: (exitCode: number) => void): this;
        once(event: "message", listener: (value: any) => void): this;
        once(event: "messageerror", listener: (error: Error) => void): this;
        once(event: "online", listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "exit", listener: (exitCode: number) => void): this;
        prependListener(event: "message", listener: (value: any) => void): this;
        prependListener(event: "messageerror", listener: (error: Error) => void): this;
        prependListener(event: "online", listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "exit", listener: (exitCode: number) => void): this;
        prependOnceListener(event: "message", listener: (value: any) => void): this;
        prependOnceListener(event: "messageerror", listener: (error: Error) => void): this;
        prependOnceListener(event: "online", listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener(event: "error", listener: (err: Error) => void): this;
        removeListener(event: "exit", listener: (exitCode: number) => void): this;
        removeListener(event: "message", listener: (value: any) => void): this;
        removeListener(event: "messageerror", listener: (error: Error) => void): this;
        removeListener(event: "online", listener: () => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off(event: "error", listener: (err: Error) => void): this;
        off(event: "exit", listener: (exitCode: number) => void): this;
        off(event: "message", listener: (value: any) => void): this;
        off(event: "messageerror", listener: (error: Error) => void): this;
        off(event: "online", listener: () => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface BroadcastChannel extends NodeJS.RefCounted {}

    /**
     * See https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel
     */
    class BroadcastChannel {
        readonly name: string;
        onmessage: (message: unknown) => void;
        onmessageerror: (message: unknown) => void;

        constructor(name: string);

        close(): void;
        postMessage(message: unknown): void;
    }

    /**
     * Mark an object as not transferable.
     * If `object` occurs in the transfer list of a `port.postMessage()` call, it will be ignored.
     *
     * In particular, this makes sense for objects that can be cloned, rather than transferred,
     * and which are used by other objects on the sending side. For example, Node.js marks
     * the `ArrayBuffer`s it uses for its Buffer pool with this.
     *
     * This operation cannot be undone.
     */
    function markAsUntransferable(object: object): void;

    /**
     * Transfer a `MessagePort` to a different `vm` Context. The original `port`
     * object will be rendered unusable, and the returned `MessagePort` instance will
     * take its place.
     *
     * The returned `MessagePort` will be an object in the target context, and will
     * inherit from its global `Object` class. Objects passed to the
     * `port.onmessage()` listener will also be created in the target context
     * and inherit from its global `Object` class.
     *
     * However, the created `MessagePort` will no longer inherit from
     * `EventEmitter`, and only `port.onmessage()` can be used to receive
     * events using it.
     */
    function moveMessagePortToContext(port: MessagePort, context: Context): MessagePort;

    /**
     * Receive a single message from a given `MessagePort`. If no message is available,
     * `undefined` is returned, otherwise an object with a single `message` property
     * that contains the message payload, corresponding to the oldest message in the
     * `MessagePort`’s queue.
     */
    function receiveMessageOnPort(port: MessagePort): { message: any } | undefined;

    type Serializable = string | object | number | boolean | bigint;

    /**
     * @param key Any arbitrary, cloneable JavaScript value that can be used as a {Map} key.
     * @experimental
     */
    function getEnvironmentData(key: Serializable): Serializable;

    /**
     * @param key Any arbitrary, cloneable JavaScript value that can be used as a {Map} key.
     * @param value Any arbitrary, cloneable JavaScript value that will be cloned
     * and passed automatically to all new `Worker` instances. If `value` is passed
     * as `undefined`, any previously set value for the `key` will be deleted.
     * @experimental
     */
    function setEnvironmentData(key: Serializable, value: Serializable): void;
}

declare module 'node:worker_threads' {
    export * from 'worker_threads';
}
