export {}; // Make this a module

// #region Fetch and friends
// Conditional type aliases, used at the end of this file.
// Will either be empty if lib-dom is included, or the undici version otherwise.
type _Request = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").Request;
type _Response = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").Response;
type _FormData = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").FormData;
type _Headers = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").Headers;
type _MessageEvent = typeof globalThis extends { onmessage: any } ? {} : import("undici-types").MessageEvent;
type _RequestInit = typeof globalThis extends { onmessage: any } ? {}
    : import("undici-types").RequestInit;
type _ResponseInit = typeof globalThis extends { onmessage: any } ? {}
    : import("undici-types").ResponseInit;
// #endregion Fetch and friends

// #region DOMException
type _DOMException = typeof globalThis extends { onmessage: any } ? {} : NodeDOMException;
interface NodeDOMException extends Error {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)
     */
    readonly code: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message) */
    readonly message: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name) */
    readonly name: string;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
}
interface NodeDOMExceptionConstructor {
    prototype: DOMException;
    new(message?: string, nameOrOptions?: string | { name?: string; cause?: unknown }): DOMException;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
}
// #endregion DOMException

declare global {
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

    var global: typeof globalThis;

    var process: NodeJS.Process;
    var console: Console;

    interface GCFunction {
        (options: {
            execution?: "sync";
            type?: "major" | "minor";
        }): void;
        (options: {
            execution: "async";
            type?: "major" | "minor";
        }): Promise<void>;
        (options?: boolean): void;
    }

    /**
     * Only available if `--expose-gc` is passed to the process.
     */
    var gc: undefined | GCFunction;

    // #region borrowed
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
        abort(reason?: any): void;
    }

    /** A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object. */
    interface AbortSignal extends EventTarget {
        /**
         * Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.
         */
        readonly aborted: boolean;
        readonly reason: any;
        onabort: null | ((this: AbortSignal, event: Event) => any);
        throwIfAborted(): void;
    }

    var AbortController: typeof globalThis extends { onmessage: any; AbortController: infer T } ? T
        : {
            prototype: AbortController;
            new(): AbortController;
        };

    var AbortSignal: typeof globalThis extends { onmessage: any; AbortSignal: infer T } ? T
        : {
            prototype: AbortSignal;
            new(): AbortSignal;
            abort(reason?: any): AbortSignal;
            timeout(milliseconds: number): AbortSignal;
            any(signals: AbortSignal[]): AbortSignal;
        };
    // #endregion borrowed

    /**
     * @since v17.0.0
     *
     * Creates a deep clone of an object.
     */
    function structuredClone<T>(
        value: T,
        transfer?: { transfer: ReadonlyArray<import("worker_threads").TransferListItem> },
    ): T;

    // #region DOMException
    /**
     * @since v17.0.0
     * An abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException)
     */
    interface DOMException extends _DOMException {}

    /**
     * @since v17.0.0
     *
     * The WHATWG `DOMException` class. See [DOMException](https://developer.mozilla.org/docs/Web/API/DOMException) for more details.
     */
    var DOMException: typeof globalThis extends { onmessage: any; DOMException: infer T } ? T
        : NodeDOMExceptionConstructor;
    // #endregion DOMException

    /*----------------------------------------------*
    *                                               *
    *               GLOBAL INTERFACES               *
    *                                               *
    *-----------------------------------------------*/
    namespace NodeJS {
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
            getFileName(): string | undefined;

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
            pipe<T extends WritableStream>(destination: T, options?: { end?: boolean | undefined }): T;
            unpipe(destination?: WritableStream): this;
            unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
            wrap(oldStream: ReadableStream): this;
            [Symbol.asyncIterator](): NodeJS.AsyncIterator<string | Buffer>;
        }

        interface WritableStream extends EventEmitter {
            writable: boolean;
            write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean;
            write(str: string, encoding?: BufferEncoding, cb?: (err?: Error | null) => void): boolean;
            end(cb?: () => void): this;
            end(data: string | Uint8Array, cb?: () => void): this;
            end(str: string, encoding?: BufferEncoding, cb?: () => void): this;
        }

        interface ReadWriteStream extends ReadableStream, WritableStream {}

        interface RefCounted {
            ref(): this;
            unref(): this;
        }

        interface Dict<T> {
            [key: string]: T | undefined;
        }

        interface ReadOnlyDict<T> {
            readonly [key: string]: T | undefined;
        }

        /** An iterable iterator returned by the Node.js API. */
        // Default TReturn/TNext in v18 is `any`, for compatibility with the previously-used IterableIterator.
        interface Iterator<T, TReturn = any, TNext = any> extends IteratorObject<T, TReturn, TNext> {
            [Symbol.iterator](): NodeJS.Iterator<T, TReturn, TNext>;
        }

        /** An async iterable iterator returned by the Node.js API. */
        // Default TReturn/TNext in v18 is `any`, for compatibility with the previously-used AsyncIterableIterator.
        interface AsyncIterator<T, TReturn = any, TNext = any> extends AsyncIteratorObject<T, TReturn, TNext> {
            [Symbol.asyncIterator](): NodeJS.AsyncIterator<T, TReturn, TNext>;
        }
    }

    interface RequestInit extends _RequestInit {}

    function fetch(
        input: string | URL | Request,
        init?: RequestInit,
    ): Promise<Response>;

    interface Request extends _Request {}
    var Request: typeof globalThis extends {
        onmessage: any;
        Request: infer T;
    } ? T
        : typeof import("undici-types").Request;

    interface ResponseInit extends _ResponseInit {}

    interface Response extends _Response {}
    var Response: typeof globalThis extends {
        onmessage: any;
        Response: infer T;
    } ? T
        : typeof import("undici-types").Response;

    interface FormData extends _FormData {}
    var FormData: typeof globalThis extends {
        onmessage: any;
        FormData: infer T;
    } ? T
        : typeof import("undici-types").FormData;

    interface Headers extends _Headers {}
    var Headers: typeof globalThis extends {
        onmessage: any;
        Headers: infer T;
    } ? T
        : typeof import("undici-types").Headers;

    interface MessageEvent extends _MessageEvent {}
    /**
     * @since v15.0.0
     */
    var MessageEvent: typeof globalThis extends {
        onmessage: any;
        MessageEvent: infer T;
    } ? T
        : typeof import("undici-types").MessageEvent;
}
