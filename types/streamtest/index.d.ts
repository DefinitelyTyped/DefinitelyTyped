/// <reference types="node" />
import { PassThrough, Readable, ReadableOptions, Writable, WritableOptions } from "stream";

export type Chunk = string | Buffer | Uint8Array;

export type NonNull = {} | undefined;

/** Allowed version names for streamtest */
export type VersionName = "v1" | "v2";

/**
 * List of supported versions (currently v1 and v2). v1 should be used for
 * Node < 0.10 streams.
 */
export const versions: VersionName[];

/** v1 methods (Node version < 0.10) */
export const v1: typeof v2;

/** v2 methods (Node version >= 0.10) */
export namespace v2 {
    /**
     * Create a readable stream streaming 'chunks' each after 'timeout'
     * milliseconds and then end. Useful for testing buffer based streams.
     * @param chunks The input chunks for the readable stream
     * @param timeout The timeout (in milliseconds) used to space chunks.
     * Defaults to 0.
     * @returns A new readable stream
     */
    function fromChunks(chunks: Chunk[], timeout?: number): Readable;
    /**
     * Create a readable stream streaming 'objects' each after 'timeout'
     * milliseconds and then end. Useful for testing objectMode based streams.
     * @param chunks The input objects for the readable stream
     * @param timeout The timeout (in milliseconds) used to space chunks.
     * Defaults to 0.
     * @returns A new readable stream
     */
    function fromObjects(objects: NonNull[], timeout?: number): Readable;
    /**
     * Create a readable stream streaming 'chunks' each after 'timeout'
     * milliseconds, emit 'err,' and then end. Useful for testing buffer based
     * streams.
     * @param err The error to emit
     * @param chunks The input objects for the readable stream
     * @param timeout The timeout (in milliseconds) used to space chunks.
     * Defaults to 0.
     * @returns A new readable stream
     */
    function fromErroredChunks(err: Error, chunks: Chunk[], timeout?: number): Readable;
    /**
     * Create a readable stream streaming 'objects' each after 'timeout'
     * milliseconds, emit 'err,' and then end. Useful for testing objectMode
     * based streams.
     * @param err The error to emit
     * @param chunks The input objects for the readable stream
     * @param timeout The timeout (in milliseconds) used to space chunks.
     * Defaults to 0.
     * @returns A new readable stream
     */
    function fromErroredObjects(err: Error, objects: NonNull[], timeout?: number): Readable;
    /**
     * Create a writable stream collecting written chunks and call the passed
     * callback function when it finishes.
     * @param cb The callback function. Takes an error as its first argument and
     * an array of chunks as its second
     * @returns A new writable stream
     */
    function toChunks(cb: (err: Error, chunks: Chunk[]) => any): Writable;
    /**
     * Create a writable stream collecting written chunks and call the passed
     * callback function when it finishes.
     * @param cb The callback function. Takes an error as its first argument and
     * an array of objects as its second
     * @returns A new writable stream
     */
    function toObjects(cb: (err: Error, objects: NonNull[]) => any): Writable;
    /**
     * Create a writable stream collecting written chunks and call the passed
     * callback function when it finishes.
     * @param cb The callback function. Takes an error as its first argument and
     * an string as its second
     * @returns A new writable stream
     */
    function toText(cb: (err: Error, text: string) => any): Writable;
    /**
     * Create a new readable stream
     * @param options The options used to create the stream
     * @returns A new readable stream
     */
    function readable(options?: ReadableOptions): Readable;
    /**
     * Create a new writable stream
     * @param options The options used to create the stream
     * @returns A new writable stream
     */
    function writable(options?: WritableOptions): Writable;
    /**
     * Create a synchronous PassThrough stream
     * @returns A PassThrough stream
     */
    function syncReadableChunks(): PassThrough;
    /**
     * Create a synchronous PassThrough stream in object mode
     * @returns A PassThrough stream
     */
    function syncReadableObjects(): PassThrough;
    /**
     * Write chunks to a stream synchronously
     * @param stream The stream to write to
     * @param chunks The chunks to write
     */
    function syncWrite(stream: Writable, chunks: Chunk[]): void;
    /**
     * Write chunks to a stream synchronously and emit an error when done
     * @param stream The stream to write to
     * @param err The error to emit
     * @param chunks The chunks to write
     */
    function syncError(stream: Writable, err: Error, chunks: Chunk[]): void;
}
