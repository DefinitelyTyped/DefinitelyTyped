/// <reference types="node" />
import { Transform } from "stream";

/**
 * Asynchronous encoding.
 *
 * The stream can encode any data piped to it. It will emit a `data` event on each encoded chunk,
 * which can be saved into an output stream.
 *
 * @param options LZ4 encoder stream options
 *
 * @example
 * import * as fs from 'fs';
 * import * as lz4 from 'lz4';
 *
 * const encoder = lz4.createEncoderStream();
 *
 * const input = fs.createReadStream('test');
 * const output = fs.createWriteStream('test.lz4');
 *
 * input.pipe(encoder).pipe(output);
 */
export const createEncoderStream: EncoderConstructor;

/**
 * Synchronous encoding.
 *
 * Read the data into memory and feed it to this function to encode to an LZ4 buffer.
 *
 * @param input Data to encode
 * @param options LZ4 encoder stream options
 *
 * @example
 * import * as fs from 'fs';
 * import * as lz4 from 'lz4';
 *
 * const input = fs.readFileSync('test');
 * const output = lz4.encode(input);
 *
 * fs.writeFileSync('test.lz4', output);
 */
export function encode(input: Buffer, options?: EncoderOptions): Buffer;

/**
 * Asynchronous decoding.
 *
 * The stream can decode any data piped to it. It will emit a `data` event on each decoded
 * sequence, which can be saved into an output stream.
 *
 * @param options LZ4 decoder stream options
 *
 * @example
 * import * as fs from 'fs';
 * import * as lz4 from 'lz4';
 *
 * const decoder = lz4.createDecoderStream();
 *
 * const input = fs.createReadStream('test.lz4');
 * const output = fs.createWriteStream('test');
 *
 * input.pipe(decoder).pipe(output);
 */
export const createDecoderStream: DecoderConstructor;

/**
 * Synchronous decoding.
 *
 * Read the data into memory and feed it to this function to produce decoded LZ4 buffer.
 *
 * @param input Data to decode
 * @param options LZ4 decoder stream options
 *
 * @example
 * import * as fs from 'fs';
 * import * as lz4 from 'lz4';
 *
 * const input = fs.readFileSync('test.lz4');
 * const output = lz4.decode(input);
 *
 * fs.writeFileSync('test', output);
 */
export function decode(input: Buffer, options?: DecoderOptions): Buffer;

/**
 * Decode an LZ4 block.
 *
 * @param input data block to decode
 * @param output decoded data block
 * @param startIdx input buffer start index (default=0)
 * @param endIdx input buffer end index (default=startIdx + input.length)
 * @returns >=0: uncompressed size, <0: error at offset
 */
export function decodeBlock(input: Buffer, output: Buffer, startIdx?: number, endIdx?: number): number;

/**
 * Determine maximum size for a compressed block given it's uncompressed size.
 * This is required to size the buffer for a block encoded data.
 *
 * @param inputSize Size of the input, 0 if too large.
 * @returns The maximum size of a lz4 block, given it's uncompressed size.
 */
export function encodeBound(inputSize: number): number;

/**
 * Encode a block of data to a compressed LZ4 block.
 *
 * @param input data block to encode
 * @param output encoded data block
 * @param startIdx output buffer start index (default=0)
 * @param endIdx output buffer end index (default=startIdx + output.length)
 * @returns >0: compressed size, =0: not compressible
 */
export function encodeBlock(input: Buffer, output: Buffer, startIdx?: number, endIdx?: number): number;

/**
 * Encode a block of data to a compressed LZ4 block with high compression.
 *
 * **Note**: This function is not available as pure Javascript, it falls back to `encodeBlock` instead.
 *
 * @param input data block to encode with high compression
 * @param output encoded data block
 * @param compressionLevel compression level (3-12, default 9)
 * @returns >0: compressed size, =0: not compressible
 */
export function encodeBlockHC(input: Buffer, output: Buffer, compressionLevel?: number): number;

/**
 * LZ4 encoder stream options.
 */
export interface EncoderOptions {
    /**
     * Chunk size to use.
     * @default 4Mb
     */
    blockMaxSize?: number | undefined;
    /**
     * Use high compression.
     * @default false
     */
    highCompression?: boolean | undefined;
    /**
     * @default true
     */
    blockIndependence?: boolean | undefined;
    /**
     * Add compressed blocks checksum.
     * @default false
     */
    blockChecksum?: boolean | undefined;
    /**
     * Add full LZ4 stream size.
     * @default false
     */
    streamSize?: boolean | undefined;
    /**
     * Add full LZ4 stream checksum.
     * @default true
     */
    streamChecksum?: boolean | undefined;
    /**
     * Use dictionary.
     * @default false
     */
    dict?: boolean | undefined;
    /**
     * Dictionary id.
     * @default 0
     */
    dictId?: number | undefined;
}

export interface EncoderConstructor {
    (options?: EncoderOptions): Encoder;
    new(options?: EncoderOptions): Encoder;
}

export interface Encoder extends Transform {
    addListener(event: "data", listener: (chunk: Buffer) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on(event: "data", listener: (chunk: Buffer) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "data", listener: (chunk: Buffer) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "data", listener: (chunk: Buffer) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "data", listener: (chunk: Buffer) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "data", listener: (chunk: Buffer) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    off(event: "data", listener: (chunk: Buffer) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
}

/**
 * LZ4 decoder stream options.
 */
export interface DecoderOptions {
    /**
     * Use JS LZ4 implementation instead of the native one.
     * @default false
     */
    useJS?: boolean;
}

export interface DecoderConstructor {
    (options?: DecoderOptions): Decoder;
    new(options?: DecoderOptions): Decoder;
}

export interface Decoder extends Transform {
    addListener(event: "data", listener: (chunk: Buffer) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on(event: "data", listener: (chunk: Buffer) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "data", listener: (chunk: Buffer) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "data", listener: (chunk: Buffer) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "data", listener: (chunk: Buffer) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "data", listener: (chunk: Buffer) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    off(event: "data", listener: (chunk: Buffer) => void): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;
}
