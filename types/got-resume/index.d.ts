import { Options } from "got";
import { ClientRequest, IncomingMessage } from "http";
import { PassThrough, Transform } from "stream";
import Promise = require("bluebird");

/**
 * Use [`got`](https://www.npmjs.com/package/got) to make an HTTP request with automatic retries for network errors.
 *
 * Designed for downloading large files. If transfer fails part-way through, will retry, resuming from point where
 * previous attempt finished, using HTTP range headers.
 *
 * @param url URL.
 * @param options Options object.
 *
 * @example
 * import gotResume = require('got-resume');
 * import fs from 'fs';
 *
 * const stream = gotResume('http://google.com/');
 * stream.pipe(fs.createWriteStream('foo.html'));
 *
 * stream.on('error', err => console.log('Failed!'));
 * stream.on('end', () => console.log('Finished!'));
 */
declare function gotResume(url: string, options?: gotResume.TransferOptions): gotResume.TransferStream;
declare function gotResume(options: gotResume.TransferOptionsWithUrl): gotResume.TransferStream;

declare namespace gotResume {
    /**
     * Fetch URL and stream to file.
     * Return Promise. Promise resolves/reject once request is complete
     * (successfully or unsuccessfully) and file is closed.
     *
     * Promise only resolves (or rejects in case of an error) once transfer is ended and output file is closed.
     *
     * Promise is a Bluebird v2 promise. Bluebird v2 is used due to its cancellation feature.
     *
     * @param path File path to write to.
     * @param url URL.
     * @param options Options object (as per stream method).
     *
     * @example
     * import gotResume = require('got-resume');
     *
     * gotResume.toFile('google.html', 'http://google.com/')
     *   .then(() => console.log('Finished!'))
     *   .catch(err => console.log('Failed!'));
     */
    function toFile(path: string, url: string, options?: ToFileOptions): Promise<void>;
    function toFile(path: string, options: ToFileOptionsWithUrl): Promise<void>;

    interface WithUrl {
        /**
         * Alternative way to provide URL.
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume({ url: 'http://google.com/' });
         */
        url: string;
    }

    interface TransferOptionsWithUrl extends TransferOptions, WithUrl {}

    interface TransferOptions {
        /**
         * Max number of attempts in a row yielding no data (i.e. failed connection, empty response) before aborting.
         *
         * Set to `0` for no limit.
         *
         * @default 10
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume('http://google.com/', { attempts: 0 });
         */
        attempts?: number | undefined;

        /**
         * Max number of total attempts before aborting.
         *
         * Set to `0` for no limit.
         *
         * @default 0
         */
        attemptsTotal?: number | undefined;

        /**
         * Function to determine wait in milliseconds before retry.
         *
         * If function returns `false`, the transfer is aborted. If using this mechanism,
         * `options.attempts` should be set to `0` so it does not interfere.
         *
         * If not provided, default backoff function starts with 1000ms and doubles each time:
         *
         * ```
         * (attempt) => return Math.pow(2, attempt - 1) * 1000
         * ```
         *
         * @param attempt Attempt number for current chunk (reset to zero when a new chunk is successfully received).
         * @param transfer The internal `Transfer` object.
         */
        backoff?(attempt: number, transfer: Transfer): number;

        /**
         * Length of response expected in bytes. If `undefined`, `length` will be determined
         * from HTTP `content-length` header.
         *
         * If server does not provide `content-length` header, and `options.length` is not set,
         * transfer will be considered complete when first successful response completes.
         *
         * If `options.length` is set, only that number of bytes will be fetched (i.e. file
         * will be truncated).
         */
        length?: number | undefined;

        /**
         * Number of bytes at start of resource to skip.
         *
         * NB Number of bytes to be streamed is `length - offset`. i.e. `length` is actually not
         * length of response, but end of range, e.g. `{offset: 5, length: 10}` will stream 5 bytes.
         *
         * @default 0
         */
        offset?: number | undefined;

        /**
         * Set to `true` if you require the length of the transfer to be retrieved at start of the
         * transfer.
         *
         * Explanation: By default `got` will use transfer encoding (e.g. gzip). This makes the
         * `content-length` HTTP header unreliable. Setting `options.needLength` disables encoding
         * so length should be retrieved accurately (if server provides it).
         *
         * @default false
         */
        needLength?: boolean | undefined;

        /**
         * Timeout in milliseconds.
         *
         * To disable timeouts, set to `null`.
         *
         * Timeout is for each chunk, not the whole tranfer. After a timeout, the transfer will
         * retry until max attempts are exhausted.
         *
         * `timeout` can also be an object specifying timeouts for different parts of the
         * request/response cycle individually. The timeouts will be set for all properties that
         * are provided, the ones that are omitted will remain `undefined`.
         *
         * All above timeout options are passed to [`got`](https://www.npmjs.com/package/got)
         * (see [here](https://www.npmjs.com/package/got#timeout)), except for `idle`. `idle` is
         * time to wait before aborting chunk if transfer stalls (no data received in specifie
         * time).
         *
         * @default 5000
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume({
         *   url: 'http://google.com/',
         *   timeout: {
         *     lookup: 1000,
         *     connect: 1000,
         *     secureConnect: 1000,
         *     socket: 1000,
         *     response: 1000,
         *     send: 1000,
         *     request: undefined,
         *     idle: 10000
         *   }
         * });
         */
        timeout?: number | TimeoutSpec | null | undefined;

        /**
         * An async function that is run before each chunk request. Request will commence once
         * returned promise resolves.
         *
         * Useful where some authentication requires being set up before the transfer HTTP request,
         * or where resource has a different URL each time (e.g. some file transfer services).
         *
         * @param transfer Then internal `Transfer` object. To set URL for next chunk, `pre` should
         * set `transfer.url`. To alter `got` options, `pre` should set `transfer.gotOptions`.
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume({
         *   url: 'http://google.com/',
         *   pre: (transfer) => {
         *     transfer.gotOptions.headers['user-agent'] = 'Stealth 2.0';
         *     return Promise.resolve();
         *   }
         * });
         */
        pre?(transfer: Transfer): globalThis.Promise<void>;

        /**
         * Transform stream through which download stream is passed before being returned.
         *
         * @example
         * import gotResume = require('got-resume');
         * import zlib from 'zlib';
         *
         * await gotResume.toFile(
         *   'google.html.gz',
         *   'http://google.com/',
         *   { transform: zlib.createGzip() }
         * );
         */
        transform?: Transform | undefined;

        /**
         * Function to receive logging information e.g. HTTP responses.
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume('http://google.com/', { log: console.log });
         */
        log?(...args: unknown[]): void;

        /**
         * Options to pass to `got`. See [got documentation](https://www.npmjs.com/package/got) for
         * details.
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume('http://google.com/', { got: { method: 'POST' } });
         */
        got?: Options | undefined;
    }

    interface TimeoutSpec {
        lookup?: number | undefined;
        connect?: number | undefined;
        secureConnect?: number | undefined;
        socket?: number | undefined;
        response?: number | undefined;
        send?: number | undefined;
        request?: number | undefined;
        idle?: number | undefined;
    }

    interface ToFileOptionsWithUrl extends ToFileOptions, WithUrl {}

    interface ToFileOptions extends TransferOptions {
        /**
         * Handler for `progress` event.
         */
        onProgress?(progress: Progress): void;

        /**
         * Handler for `response` event.
         */
        onResponse?(res: IncomingMessage): void;

        /**
         * Promise implementation to use.
         *
         * @default Bluebird v2
         */
        Promise?: any;
    }

    type TransferStream = {
        /**
         * Calling `.cancel()` will abort the transfer and cause the stream to emit an `error`
         * event with a `CancelError`.
         *
         * If the transfer is complete before `.cancel()` is called, no `error` event will be
         * emitted.
         *
         * If `options.pre` function is supplied and `.cancel()` is called while `options.pre` is
         * running, `.cancel()` method on the promise returned by `options.pre` will be called if
         * it exists. Otherwise the transfer will abort once the promise resolves.
         */
        cancel(): void;

        /**
         * Parent `Transfer` object.
         */
        transfer: Transfer;

        /**
         * Emitted with a `TransferError` on stream when transfer fails and has exhausted retries.
         */
        addListener(
            event: "error",
            listener: (error: TransferError | CancelError | globalThis.Error) => any,
        ): TransferStream;
        /**
         * Emitted when transfer completes.
         *
         * **NB** Is also emitted after error event if transfer fails.
         */
        addListener(event: "end", listener: () => any): TransferStream;
        /**
         * Emitted when data received.
         */
        addListener(event: "progress", listener: (progress: Progress) => any): TransferStream;
        /**
         * Emitted when first HTTP request made to server.
         *
         * **NB** Not emitted again for each retry HTTP request. You cannot abort the transfer
         * with `request.abort()` as the request may be finished if a retry has happened.
         *
         * Useful for e.g. determining length of transfer.
         *
         * @example
         * import gotResume = require('got-resume');
         *
         * const stream = gotResume('http://google.com/');
         * stream.on('response', res => console.log('Length: ', stream.transfer.length));
         */
        addListener(event: "response", listener: (res: IncomingMessage) => any): TransferStream;

        on(event: "error", listener: (error: TransferError | CancelError | globalThis.Error) => any): TransferStream;
        on(event: "end", listener: () => any): TransferStream;
        on(event: "progress", listener: (progress: Progress) => any): TransferStream;
        on(event: "response", listener: (res: IncomingMessage) => any): TransferStream;

        once(event: "error", listener: (error: TransferError | CancelError | globalThis.Error) => any): TransferStream;
        once(event: "end", listener: () => any): TransferStream;
        once(event: "progress", listener: (progress: Progress) => any): TransferStream;
        once(event: "response", listener: (res: IncomingMessage) => any): TransferStream;

        prependListener(
            event: "error",
            listener: (error: TransferError | CancelError | globalThis.Error) => any,
        ): TransferStream;
        prependListener(event: "end", listener: () => any): TransferStream;
        prependListener(event: "progress", listener: (progress: Progress) => any): TransferStream;
        prependListener(event: "response", listener: (res: IncomingMessage) => any): TransferStream;

        prependOnceListener(
            event: "error",
            listener: (error: TransferError | CancelError | globalThis.Error) => any,
        ): TransferStream;
        prependOnceListener(event: "end", listener: () => any): TransferStream;
        prependOnceListener(event: "progress", listener: (progress: Progress) => any): TransferStream;
        prependOnceListener(event: "response", listener: (res: IncomingMessage) => any): TransferStream;

        removeListener(
            event: "error",
            listener: (error: TransferError | CancelError | globalThis.Error) => any,
        ): TransferStream;
        removeListener(event: "end", listener: () => any): TransferStream;
        removeListener(event: "progress", listener: (progress: Progress) => any): TransferStream;
        removeListener(event: "response", listener: (res: IncomingMessage) => any): TransferStream;

        off(event: "error", listener: (error: TransferError | CancelError | globalThis.Error) => any): TransferStream;
        off(event: "end", listener: () => any): TransferStream;
        off(event: "progress", listener: (progress: Progress) => any): TransferStream;
        off(event: "response", listener: (res: IncomingMessage) => any): TransferStream;
    } & PassThrough;

    interface Progress {
        total: number;
        transferred: number;
    }

    class Error extends globalThis.Error {
        name: "GotResumeError";
    }

    class OptionsError extends globalThis.Error {
        name: "GotResumeOptionsError";
    }

    class TransferError extends globalThis.Error {
        name: "GotResumeTransferError";
    }

    class CancelError extends globalThis.Error {
        name: "GotResumeCancelError";
    }

    class PreError extends globalThis.Error {
        name: "GotResumePreError";
    }

    class Transfer {
        /** Options passed to constructor. */
        options: ToFileOptions & Partial<WithUrl>;
        url?: string | undefined;
        /** Length of options passed to constructor. */
        length?: number | undefined;
        log: (...args: unknown[]) => void;
        gotOptions: Options;
        idleTimeout?: number | undefined;

        attempt: number;
        attemptTotal: number;
        position?: number | undefined;
        total?: number | undefined;
        cancelled: boolean;
        requestEventFired: boolean;
        /** `got` stream request. */
        req?: ClientRequest | undefined;
        /** `got` stream response. */
        res?: IncomingMessage | undefined;
        /** Error occurred during transfer. */
        err?: globalThis.Error | undefined;
        lastMod?: string | undefined;
        etag?: string | undefined;
        /** Promise returned from `options.pre`. */
        prePromise?: Promise<void> | undefined;
        /** Timeout. */
        waitTimer?: number | undefined;
        /** Output stream. */
        stream: TransferStream;

        constructor(options: ToFileOptions);
        start(): void;
        get(): void;
        failed(err: globalThis.Error, empty: boolean): void;
        fatal(): void;
        cancel(): void;
    }
}

export = gotResume;
