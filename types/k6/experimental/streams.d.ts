/**
 * This module provides an experimental implementation of the Streams API
 * for k6.
 *
 * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/
 */

/**
 * The ReadableStream object provides the API for creating and managing readable
 * streams of raw data, bit by bit, as soon as it is available, without needing to generate a buffer, string, or blob.
 */
export class ReadableStream {
    /**
     * The ReadableStream constructor returns a newly created ReadableStream object.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestream/
     *
     * @param underlyingSource - defines the source of data for the stream.
     * @param queuingStrategy - defines the queuing strategy to adopt for the stream.
     */
    constructor(underlyingSource?: UnderlyingSource, queuingStrategy?: QueuingStrategy);

    /**
     * Closes the stream and signals a reason for the closure.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestream/cancel/
     *
     * Used when you’ve completely finished with the stream and don’t need any more data from it,
     * even if chunks are enqueued waiting to be read.
     *
     * That data is lost after cancel is called, and the stream is not readable anymore.
     * To close the stream without getting rid of enqueued chunks, use `ReadableStreamDefaultController.close()`.
     *
     * It returns a promise that is resolved with `undefined` when the stream is canceled.
     *
     * @param reason - the reason for canceling the stream.
     */
    cancel(reason: any): Promise<void>;

    /**
     * Creates a reader and locks the stream to it.
     * While the stream is locked, no other reader can be acquired until this one is released.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestream/getreader/
     */
    getReader(): ReadableStreamDefaultReader;
}

/**
 * The object that defines the source of data for the stream.
 */
export interface UnderlyingSource {
    /**
     * Called when the stream is created.
     * It can be used to perform any setup tasks.
     * The content of this method is to be defined by the user.
     */
    start?: (controller: ReadableStreamDefaultController) => void | Promise<void>;

    /**
     * Called repeatedly to fetch and queue data into the stream,
     * until it reaches its high watermark.
     * If `pull()` returns a promise, it won’t be called again until the promise is resolved.
     */
    pull?: (controller: ReadableStreamDefaultController) => void | Promise<void>;

    /**
     * Called when the stream is canceled.
     * It can be used to release access to the stream source and perform any cleanup tasks.
     * The reason parameter passed to this method is an optional human-readable value
     * that represents the reason for canceling the stream.
     */
    cancel?: (reason?: any) => void | Promise<void>;

    /**
     * Specifies the type of the underlying source.
     * It can currently only receive the value 'default' which is its default value.
     */
    type?: "default";
}

/**
 * The object that allows the user to control a ReadableStream’s state and internal queue.
 * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestreamdefaultcontroller/
 */
export interface ReadableStreamDefaultController {
    /**
     * Closes the associated stream.
     * Readers can still read any previously enqueued chunks from the stream.
     * Once those chunks are read, the stream closes, and no more data is available.
     */
    close: () => void;

    /**
     * Enqueues a chunk of data into the associated stream.
     */
    enqueue: (chunk: any) => void;

    /**
     * Makes any future interactions with the associated stream to error.
     */
    error: (reason: any) => void;
}

/**
 * The object that defines the queuing strategy to adopt for the stream.
 *
 * Although the user can define a custom queueing strategy, the default behavior and recommended way
 * to use the `ReadableStream` is to use a `CountQueuingStrategy` object.
 */
export interface QueuingStrategy {
    /**
     * Represents the maximum number of chunks that the stream can hold in its internal queue.
     * The default value is 1.
     */
    highWaterMark?: number;

    /**
     * Returns the size of the chunk passed as an argument.
     * The default value is a function that returns 1.
     */
    size?(chunk: any): number;
}

/**
 * The CountQueuingStrategy object is the default QueuingStrategy for ReadableStream.
 * It counts the number of chunks in the queue.
 */
export class CountQueuingStrategy {
    /**
     * The CountQueuingStrategy constructor returns a newly created CountQueuingStrategy object.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestream/countqueuingstrategy/
     *
     * @param options - an object with optional property `highWaterMark` that determines
     * the maximum number of chunks that the queue can contain.
     */
    constructor(options?: { highWaterMark?: number });

    /**
     * Represents the maximum number of chunks that the stream can hold in its internal queue.
     * The default value is 1.
     */
    readonly highWaterMark: number;

    /**
     * Returns the size of the chunk passed as an argument.
     * The default value is a function that returns 1.
     */
    size(chunk: any): number;
}

/**
 * The object used to read stream data.
 * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestreamdefaultreader/
 */
export class ReadableStreamDefaultReader {
    /**
     * The ReadableStreamDefaultReader constructor returns a newly created ReadableStreamDefaultReader object.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestreamdefaultreader/
     *
     * @param stream - defines the stream the reader will own.
     */
    constructor(stream: ReadableStream);

    /**
     * Closes the reader and signals a reason for the closure.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestreamdefaultreader/cancel/
     *
     * Used when you’ve completely finished with the stream and don’t need any more data from it,
     * even if chunks are enqueued waiting to be read.
     * That data is lost after cancel is called, and the stream is not readable anymore.
     * To close the stream without getting rid of enqueued chunks, use `ReadableStreamDefaultController.close()`.
     *
     * It returns a promise that is resolved with `undefined` when the stream is canceled.
     *
     * @param reason - the reason for canceling the stream.
     */
    cancel(reason: any): Promise<void>;

    /**
     * Returns a promise providing access to the next chunk in the stream’s internal queue.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestreamdefaultreader/read/
     *
     * - If the stream is closed and no more data is available, the promise resolves with an object of the form:
     *   `{ done: true, value: undefined }`.
     * - If the stream is errored, the promise rejects with the error that caused the stream to error.
     */
    read(): Promise<{ done: false; value: any } | { done: true; value: undefined }>;

    /**
     * Releases the reader’s lock on the stream.
     * https://grafana.com/docs/k6/latest/javascript-api/k6-experimental/streams/readablestreamdefaultreader/releaselock/
     *
     * If the associated stream is errored as the lock is released, the reader will be errored as well.
     * This method is useful when done with the stream and want to release the lock on it.
     *
     * If the reader’s lock is released as pending read operations are still in progress,
     * the reader’s `ReadableStreamDefaultReader.read()` calls are immediately rejected with a `TypeError`.
     */
    readonly releaseLock: () => void;
}
