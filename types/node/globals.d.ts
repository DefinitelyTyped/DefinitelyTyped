// Declare "static" methods in Error
interface ErrorConstructor {
    /** Create .stack property on a target object */
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;

    /**
     * Optional override for formatting stack traces
     *
     * @see https://v8.dev/docs/stack-trace-api#customizing-stack-traces
     */
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;

    stackTraceLimit: number;
}

/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/

// For backwards compability
interface NodeRequire extends NodeJS.Require { }
interface RequireResolve extends NodeJS.RequireResolve { }
interface NodeModule extends NodeJS.Module { }

declare var process: NodeJS.Process;
declare var console: Console;

declare var __filename: string;
declare var __dirname: string;

declare var require: NodeRequire;
declare var module: NodeModule;

// Same as module.exports
declare var exports: any;

/**
 * Only available if `--expose-gc` is passed to the process.
 */
declare var gc: undefined | (() => void);

//#region borrowed
// from https://github.com/microsoft/TypeScript/blob/38da7c600c83e7b31193a62495239a0fe478cb67/lib/lib.webworker.d.ts#L633 until moved to separate lib
/** A controller object that allows you to abort one or more DOM requests as and when desired. */
interface AbortController {
    /**
     * Returns the AbortSignal object associated with this object.
     */

    readonly signal: AbortSignal;
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.
     */
    abort(): void;
}

interface AbortSignalEventMap {
    "abort": NodeJS.Event;
}

/** A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object. */
interface AbortSignal {
    /**
     * Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.
     */
    readonly aborted: boolean;
    onabort: ((this: AbortSignal, ev: NodeJS.Event) => any) | null;
    /**
     * An optional reason specified when the AbortSignal was triggered.
     * @since v17.2.0
     */
    readonly reason: any;
    /**
     * If {@link aborted} is true, throws {@link reason}.
     * @since v17.3.0
     */
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | NodeJS.AddEventListenerOptions): void;
    addEventListener(type: string, listener: NodeJS.EventListenerOrEventListenerObject, options?: boolean | NodeJS.AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | NodeJS.EventListenerOptions): void;
    removeEventListener(type: string, listener: NodeJS.EventListenerOrEventListenerObject, options?: boolean | NodeJS.EventListenerOptions): void;
}

declare var AbortController: {
    prototype: AbortController;
    new(): AbortController;
};

declare var AbortSignal: {
    prototype: AbortSignal;
    new(): AbortSignal;
    // TODO: Add abort() static
    timeout(milliseconds: number): AbortSignal;
};
//#endregion borrowed

//#region ArrayLike.at()
interface RelativeIndexable<T> {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): T | undefined;
}
interface String extends RelativeIndexable<string> {}
interface Array<T> extends RelativeIndexable<T> {}
interface Int8Array extends RelativeIndexable<number> {}
interface Uint8Array extends RelativeIndexable<number> {}
interface Uint8ClampedArray extends RelativeIndexable<number> {}
interface Int16Array extends RelativeIndexable<number> {}
interface Uint16Array extends RelativeIndexable<number> {}
interface Int32Array extends RelativeIndexable<number> {}
interface Uint32Array extends RelativeIndexable<number> {}
interface Float32Array extends RelativeIndexable<number> {}
interface Float64Array extends RelativeIndexable<number> {}
interface BigInt64Array extends RelativeIndexable<bigint> {}
interface BigUint64Array extends RelativeIndexable<bigint> {}
//#endregion ArrayLike.at() end

/**
 * @since v17.0.0
 *
 * Creates a deep clone of an object.
 */
declare function structuredClone<T>(
    value: T,
    transfer?: { transfer: ReadonlyArray<import('worker_threads').TransferListItem> },
): T;

/*----------------------------------------------*
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
*-----------------------------------------------*/
declare namespace NodeJS {
    interface CallSite {
        /**
         * Value of "this"
         */
        getThis(): unknown;

        /**
         * Type of "this" as a string.
         * This is the name of the function stored in the constructor field of
         * "this", if available.  Otherwise the object's [[Class]] internal
         * property.
         */
        getTypeName(): string | null;

        /**
         * Current function
         */
        getFunction(): Function | undefined;

        /**
         * Name of the current function, typically its name property.
         * If a name property is not available an attempt will be made to try
         * to infer a name from the function's context.
         */
        getFunctionName(): string | null;

        /**
         * Name of the property [of "this" or one of its prototypes] that holds
         * the current function
         */
        getMethodName(): string | null;

        /**
         * Name of the script [if this function was defined in a script]
         */
        getFileName(): string | null;

        /**
         * Current line number [if this function was defined in a script]
         */
        getLineNumber(): number | null;

        /**
         * Current column number [if this function was defined in a script]
         */
        getColumnNumber(): number | null;

        /**
         * A call site object representing the location where eval was called
         * [if this function was created using a call to eval]
         */
        getEvalOrigin(): string | undefined;

        /**
         * Is this a toplevel invocation, that is, is "this" the global object?
         */
        isToplevel(): boolean;

        /**
         * Does this call take place in code defined by a call to eval?
         */
        isEval(): boolean;

        /**
         * Is this call in native V8 code?
         */
        isNative(): boolean;

        /**
         * Is this a constructor call?
         */
        isConstructor(): boolean;
    }

    interface ErrnoException extends Error {
        errno?: number | undefined;
        code?: string | undefined;
        path?: string | undefined;
        syscall?: string | undefined;
    }

    interface ReadableStream extends EventEmitter {
        readable: boolean;
        read(size?: number): string | Buffer;
        setEncoding(encoding: BufferEncoding): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean | undefined; }): T;
        unpipe(destination?: WritableStream): this;
        unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
        wrap(oldStream: ReadableStream): this;
        [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>;
    }

    interface WritableStream extends EventEmitter {
        writable: boolean;
        write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean;
        write(str: string, encoding?: BufferEncoding, cb?: (err?: Error | null) => void): boolean;
        end(cb?: () => void): this;
        end(data: string | Uint8Array, cb?: () => void): this;
        end(str: string, encoding?: BufferEncoding, cb?: () => void): this;
    }

    interface ReadWriteStream extends ReadableStream, WritableStream { }

    interface RefCounted {
        ref(): this;
        unref(): this;
    }

    type TypedArray =
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Int8Array
        | Int16Array
        | Int32Array
        | BigUint64Array
        | BigInt64Array
        | Float32Array
        | Float64Array;
    type ArrayBufferView = TypedArray | DataView;

    interface Require {
        (id: string): any;
        resolve: RequireResolve;
        cache: Dict<NodeModule>;
        /**
         * @deprecated
         */
        extensions: RequireExtensions;
        main: Module | undefined;
    }

    interface RequireResolve {
        (id: string, options?: { paths?: string[] | undefined; }): string;
        paths(request: string): string[] | null;
    }

    interface RequireExtensions extends Dict<(m: Module, filename: string) => any> {
        '.js': (m: Module, filename: string) => any;
        '.json': (m: Module, filename: string) => any;
        '.node': (m: Module, filename: string) => any;
    }
    interface Module {
        /**
         * `true` if the module is running during the Node.js preload
         */
        isPreloading: boolean;
        exports: any;
        require: Require;
        id: string;
        filename: string;
        loaded: boolean;
        /** @deprecated since v14.6.0 Please use `require.main` and `module.children` instead. */
        parent: Module | null | undefined;
        children: Module[];
        /**
         * @since v11.14.0
         *
         * The directory name of the module. This is usually the same as the path.dirname() of the module.id.
         */
        path: string;
        paths: string[];
    }

    interface Dict<T> {
        [key: string]: T | undefined;
    }

    interface ReadOnlyDict<T> {
        readonly [key: string]: T | undefined;
    }
/** An event which takes place in the DOM. */
interface Event {
    /** Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. */
    readonly bubbles: boolean;
    cancelBubble: boolean;
    /** Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. */
    readonly cancelable: boolean;
    /** Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise. */
    readonly composed: boolean;
    /** Returns the object whose event listener's callback is currently being invoked. */
    readonly currentTarget: EventTarget | null;
    /** Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. */
    readonly defaultPrevented: boolean;
    /** Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE. */
    readonly eventPhase: number;
    /** Returns true if event was dispatched by the user agent, and false otherwise. */
    readonly isTrusted: boolean;
    /** @deprecated */
    returnValue: boolean;
    /** @deprecated */
    readonly srcElement: EventTarget | null;
    /** Returns the object to which event is dispatched (its target). */
    readonly target: EventTarget | null;
    /** Returns the event's timestamp as the number of milliseconds measured relative to the time origin. */
    readonly timeStamp: DOMHighResTimeStamp;
    /** Returns the type of event, e.g. "click", "hashchange", or "submit". */
    readonly type: string;
    /** Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget. */
    composedPath(): EventTarget[];
    /** @deprecated */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /** If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled. */
    preventDefault(): void;
    /** Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects. */
    stopImmediatePropagation(): void;
    /** When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object. */
    stopPropagation(): void;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}
    interface EventListener {
        (evt: Event): void;
    }

    interface EventListenerObject {
        handleEvent(object: Event): void;
    }

    type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

    interface EventListenerOptions {
        capture?: boolean;
    }

    interface AddEventListenerOptions extends EventListenerOptions {
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
    }
}
