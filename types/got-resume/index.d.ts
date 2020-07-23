// Type definitions for got-resume 1.4
// Project: https://github.com/overlookmotel/got-resume#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import { GotOptions } from 'got';
import { ClientRequest, IncomingMessage } from 'http';
import { PassThrough, Transform } from 'stream';

/**
 * Fetch URL with retries if failure.
 * Returns stream of transfer contents.
 *
 * @param url URL (optional).
 * @param options Options object.
 */
declare function gotResume(url: string, options?: gotResume.TransferOptions): gotResume.TransferStream;
declare function gotResume(options: gotResume.TransferOptions): gotResume.TransferStream;

declare namespace gotResume {
    interface TransferOptions {
        /** Number of attempts to make before failing (0 for no limit). */
        attempts?: number;
        /** Total number of attempts to make before failing (0 for no limit). */
        attemptsTotal?: number;
        /**
         * Function called with `backoff(attempt, transfer)` and should return milliseconds to wait
         * before next attempt.
         */
        backoff?(attempt: number, transfer: Transfer): number;
        /** Options to pass to `got` module. */
        got?: GotOptions<string | null>;
        /**
         * Length of transfer
         * (NB is actually range end - does not take into account options.offset).
         */
        length?: number;
        /** Function to call with logging information. */
        log?(...args: unknown[]): void;
        /** `true` to disable gzip encoding on first request in order to get length. */
        needLength?: boolean;
        /** Number of bytes at start of file to skip. */
        offset?: number;
        /**
         * Function to call before HTTP requests. Is passed `transfer` object, should set
         * `transfer.url` and `transfer.gotOptions` and return a promise.
         */
        pre?(transfer: Transfer): Promise<void>;
        /** Transform stream to pass result through. */
        transform?: Transform;
        /** URL (alternative way to provide). */
        url?: string;
    }

    interface TransferStream extends PassThrough {
        /** Cancel the stream. */
        cancel(): void;
        /** Parent `Transfer` object. */
        transfer: Transfer;
    }

    interface Progress {
        total: number;
        transferred: number;
    }

    interface ToFileOptions extends TransferOptions {
        /** Function called with progress. */
        onProgress?(progress: Progress): void;
        /** Function called with HTTP response. */
        onResponse?(res: any): void;
        /** Promise implementation to use (default: Bluebird v2). */
        Promise?: typeof Promise;
    }

    class CancelError extends globalThis.Error {
        name: 'GotResumeCancelError';
    }

    class Error extends globalThis.Error {
        name: 'GotResumeError';
    }

    class OptionsError extends globalThis.Error {
        name: 'GotResumeOptionsError';
    }

    class PreError extends globalThis.Error {
        name: 'GotResumePreError';
    }

    class TransferError extends globalThis.Error {
        name: 'GotResumeTransferError';
    }

    class Transfer {
        attempt: number;
        attemptNumber: number;
        cancelled: boolean;
        gotOptions: GotOptions<string | null>;
        /** Length of options passed to constructor. */
        log: (...args: unknown[]) => void;
        /** Options passed to constructor. */
        options: TransferOptions;
        /** Output stream. */
        stream: TransferStream;

        /** Error occurred during transfer. */
        err?: globalThis.Error;
        etag?: string;
        lastMod?: string;
        length?: number;
        position?: number;
        /** Promise returned from `options.pre`. */
        prePromise?: Promise<void>;
        /** `got` stream request. */
        req?: ClientRequest;
        /** `got` stream response. */
        res?: IncomingMessage;
        total?: number;
        /** Timeout. */
        waitTimer?: number;
        url?: string;

        constructor(options: TransferOptions);
        cancel(): void;
        failed(err: globalThis.Error, empty: boolean): void;
        fatal(): void;
        get(): void;
        start(): void;
    }

    /**
     * Fetch URL and stream to file.
     * Return Promise. Promise resolves/reject once request is complete
     * (successfully or unsuccessfully) and file is closed.
     *
     * @param path File path to write to.
     * @param url URL.
     * @param options Options object (as per stream method).
     */
    function toFile(path: string, options?: ToFileOptions): Promise<void>;
    function toFile(path: string, url?: string, options?: ToFileOptions): Promise<void>;
}

export = gotResume;
