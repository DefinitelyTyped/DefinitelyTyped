// Type definitions for dicer 0.2
// Project: https://github.com/mscdex/dicer
// Definitions by: Robin Goupil <https://github.com/GoupilRobin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />
import stream = require("stream");

export interface DicerConfig {
    /**
     * This is the boundary used to detect the beginning of a new part.
     */
    boundary?: string;

    /**
     * If true, preamble header parsing will be performed first.
     */
    headerFirst?: boolean;

    /**
     * The maximum number of header key=>value pairs to parse Default: 2000 (same as node's http).
     */
    maxHeaderPairs?: number;
}

/**
 * A very fast streaming multipart parser for node.js.
 * Dicer is a WritableStream
 *
 * Dicer (special) events:
 * - on('finish', ()) - Emitted when all parts have been parsed and the Dicer instance has been ended.
 * - on('part', (stream: PartStream)) - Emitted when a new part has been found.
 * - on('preamble', (stream: PartStream)) - Emitted for preamble if you should happen to need it (can usually be ignored).
 * - on('trailer', (data: Buffer)) - Emitted when trailing data was found after the terminating boundary (as with the preamble, this can usually be ignored too).
 */
export default class Dicer extends stream.Writable {
    /**
     * Creates and returns a new Dicer instance with the following valid config settings:
     *
     * @param config The configuration to use
     */
    constructor(config: DicerConfig);

    /**
     * Sets the boundary to use for parsing and performs some initialization needed for parsing.
     * You should only need to use this if you set headerFirst to true in the constructor and are parsing the boundary from the preamble header.
     *
     * @param boundary The boundary to use
     */
    setBoundary(boundary: string): void;

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "finish", listener: () => void): this; // tslint:disable-line unified-signatures
    addListener(event: "part", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "preamble", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "trailer", listener: (data: Buffer) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    addListener(event: "drain", listener: () => void): this; // tslint:disable-line unified-signatures
    addListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "pipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "unpipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "finish", listener: () => void): this; // tslint:disable-line unified-signatures
    on(event: "part", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    on(event: "preamble", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    on(event: "trailer", listener: (data: Buffer) => void): this; // tslint:disable-line unified-signatures
    on(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    on(event: "drain", listener: () => void): this; // tslint:disable-line unified-signatures
    on(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
    on(event: "pipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
    on(event: "unpipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "finish", listener: () => void): this; // tslint:disable-line unified-signatures
    once(event: "part", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    once(event: "preamble", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    once(event: "trailer", listener: (data: Buffer) => void): this; // tslint:disable-line unified-signatures
    once(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    once(event: "drain", listener: () => void): this; // tslint:disable-line unified-signatures
    once(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
    once(event: "pipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
    once(event: "unpipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "finish", listener: () => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "part", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "preamble", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "trailer", listener: (data: Buffer) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "drain", listener: () => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "pipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "unpipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "finish", listener: () => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "part", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "preamble", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "trailer", listener: (data: Buffer) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "drain", listener: () => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "pipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "unpipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: "finish", listener: () => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "part", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "preamble", listener: (stream: PartStream) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "trailer", listener: (data: Buffer) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "drain", listener: () => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "pipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "unpipe", listener: (src: stream.Readable) => void): this; // tslint:disable-line unified-signatures
}

/**
 * PartStream is a _ReadableStream_
 *
 * PartStream (special) events:
 * - on('header', (header: object)) - An object containing the header for this particular part. Each property value is an array of one or more string values.
 */
export interface PartStream extends stream.Readable {
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "header", listener: (header: object) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    addListener(event: "data", listener: (chunk: Buffer | string) => void): this; // tslint:disable-line unified-signatures
    addListener(event: "end", listener: () => void): this; // tslint:disable-line unified-signatures
    addListener(event: "readable", listener: () => void): this; // tslint:disable-line unified-signatures
    addListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "header", listener: (header: object) => void): this; // tslint:disable-line unified-signatures
    on(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    on(event: "data", listener: (chunk: Buffer | string) => void): this; // tslint:disable-line unified-signatures
    on(event: "end", listener: () => void): this; // tslint:disable-line unified-signatures
    on(event: "readable", listener: () => void): this; // tslint:disable-line unified-signatures
    on(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "header", listener: (header: object) => void): this; // tslint:disable-line unified-signatures
    once(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    once(event: "data", listener: (chunk: Buffer | string) => void): this; // tslint:disable-line unified-signatures
    once(event: "end", listener: () => void): this; // tslint:disable-line unified-signatures
    once(event: "readable", listener: () => void): this; // tslint:disable-line unified-signatures
    once(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "header", listener: (header: object) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "data", listener: (chunk: Buffer | string) => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "end", listener: () => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "readable", listener: () => void): this; // tslint:disable-line unified-signatures
    prependListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "header", listener: (header: object) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "data", listener: (chunk: Buffer | string) => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "end", listener: () => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "readable", listener: () => void): this; // tslint:disable-line unified-signatures
    prependOnceListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: "header", listener: (header: object) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "close", listener: () => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "data", listener: (chunk: Buffer | string) => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "end", listener: () => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "readable", listener: () => void): this; // tslint:disable-line unified-signatures
    removeListener(event: "error", listener: (err: Error) => void): this; // tslint:disable-line unified-signatures
}
