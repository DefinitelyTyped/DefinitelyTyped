declare module 'buffer' {
    import { BinaryLike } from 'crypto';

    export const INSPECT_MAX_BYTES: number;
    export const kMaxLength: number;
    export const kStringMaxLength: number;
    export const constants: {
        MAX_LENGTH: number;
        MAX_STRING_LENGTH: number;
    };

    export type TranscodeEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary";

    export function transcode(source: Uint8Array, fromEnc: TranscodeEncoding, toEnc: TranscodeEncoding): Buffer;

    export const SlowBuffer: {
        /** @deprecated since v6.0.0, use `Buffer.allocUnsafeSlow()` */
        new(size: number): Buffer;
        prototype: Buffer;
    };

    export { Buffer };

    /**
     * @experimental
     */
    export interface BlobOptions {
        /**
         * @default 'utf8'
         */
        encoding?: BufferEncoding | undefined;

        /**
         * The Blob content-type. The intent is for `type` to convey
         * the MIME media type of the data, however no validation of the type format
         * is performed.
         */
        type?: string | undefined;
    }

    /**
     * @experimental
     */
    export class Blob {
        /**
         * Returns a promise that fulfills with an {ArrayBuffer} containing a copy of the `Blob` data.
         */
        readonly size: number;

        /**
         * The content-type of the `Blob`.
         */
        readonly type: string;

        /**
         * Creates a new `Blob` object containing a concatenation of the given sources.
         *
         * {ArrayBuffer}, {TypedArray}, {DataView}, and {Buffer} sources are copied into
         * the 'Blob' and can therefore be safely modified after the 'Blob' is created.
         *
         * String sources are also copied into the `Blob`.
         */
        constructor(sources: Array<(BinaryLike | Blob)>, options?: BlobOptions);

        arrayBuffer(): Promise<ArrayBuffer>;

        /**
         * @param start The starting index.
         * @param end The ending index.
         * @param type The content-type for the new `Blob`
         */
        slice(start?: number, end?: number, type?: string): Blob;

        /**
         * Returns a promise that resolves the contents of the `Blob` decoded as a UTF-8 string.
         */
        text(): Promise<string>;
    }

    export import atob = globalThis.atob;
    export import btoa = globalThis.btoa;

    global {
        // Buffer class
        type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex";

        type WithImplicitCoercion<T> = T | { valueOf(): T };

        /**
         * Raw data is stored in instances of the Buffer class.
         * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
         * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
         */
        interface BufferConstructor {
            /**
             * Allocates a new buffer containing the given {str}.
             *
             * @param str String to store in buffer.
             * @param encoding encoding to use, optional.  Default is 'utf8'
             * @deprecated since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.
             */
            new(str: string, encoding?: BufferEncoding): Buffer;
            /**
             * Allocates a new buffer of {size} octets.
             *
             * @param size count of octets to allocate.
             * @deprecated since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).
             */
            new(size: number): Buffer;
            /**
             * Allocates a new buffer containing the given {array} of octets.
             *
             * @param array The octets to store.
             * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
             */
            new(array: Uint8Array): Buffer;
            /**
             * Produces a Buffer backed by the same allocated memory as
             * the given {ArrayBuffer}/{SharedArrayBuffer}.
             *
             *
             * @param arrayBuffer The ArrayBuffer with which to share memory.
             * @deprecated since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.
             */
            new(arrayBuffer: ArrayBuffer | SharedArrayBuffer): Buffer;
            /**
             * Allocates a new buffer containing the given {array} of octets.
             *
             * @param array The octets to store.
             * @deprecated since v10.0.0 - Use `Buffer.from(array)` instead.
             */
            new(array: ReadonlyArray<any>): Buffer;
            /**
             * Copies the passed {buffer} data onto a new {Buffer} instance.
             *
             * @param buffer The buffer to copy.
             * @deprecated since v10.0.0 - Use `Buffer.from(buffer)` instead.
             */
            new(buffer: Buffer): Buffer;
            /**
             * When passed a reference to the .buffer property of a TypedArray instance,
             * the newly created Buffer will share the same allocated memory as the TypedArray.
             * The optional {byteOffset} and {length} arguments specify a memory range
             * within the {arrayBuffer} that will be shared by the Buffer.
             *
             * @param arrayBuffer The .buffer property of any TypedArray or a new ArrayBuffer()
             */
            from(arrayBuffer: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>, byteOffset?: number, length?: number): Buffer;
            /**
             * Creates a new Buffer using the passed {data}
             * @param data data to create a new Buffer
             */
            from(data: Uint8Array | ReadonlyArray<number>): Buffer;
            from(data: WithImplicitCoercion<Uint8Array | ReadonlyArray<number> | string>): Buffer;
            /**
             * Creates a new Buffer containing the given JavaScript string {str}.
             * If provided, the {encoding} parameter identifies the character encoding.
             * If not provided, {encoding} defaults to 'utf8'.
             */
            from(str: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: 'string'): string }, encoding?: BufferEncoding): Buffer;
            /**
             * Creates a new Buffer using the passed {data}
             * @param values to create a new Buffer
             */
            of(...items: number[]): Buffer;
            /**
             * Returns true if {obj} is a Buffer
             *
             * @param obj object to test.
             */
            isBuffer(obj: any): obj is Buffer;
            /**
             * Returns true if {encoding} is a valid encoding argument.
             * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
             *
             * @param encoding string to test.
             */
            isEncoding(encoding: string): encoding is BufferEncoding;
            /**
             * Gives the actual byte length of a string. encoding defaults to 'utf8'.
             * This is not the same as String.prototype.length since that returns the number of characters in a string.
             *
             * @param string string to test.
             * @param encoding encoding used to evaluate (defaults to 'utf8')
             */
            byteLength(
                string: string | NodeJS.ArrayBufferView | ArrayBuffer | SharedArrayBuffer,
                encoding?: BufferEncoding
            ): number;
            /**
             * Returns a buffer which is the result of concatenating all the buffers in the list together.
             *
             * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
             * If the list has exactly one item, then the first item of the list is returned.
             * If the list has more than one item, then a new Buffer is created.
             *
             * @param list An array of Buffer objects to concatenate
             * @param totalLength Total length of the buffers when concatenated.
             *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
             */
            concat(list: ReadonlyArray<Uint8Array>, totalLength?: number): Buffer;
            /**
             * The same as buf1.compare(buf2).
             */
            compare(buf1: Uint8Array, buf2: Uint8Array): number;
            /**
             * Allocates a new buffer of {size} octets.
             *
             * @param size count of octets to allocate.
             * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
             *    If parameter is omitted, buffer will be filled with zeros.
             * @param encoding encoding used for call to buf.fill while initalizing
             */
            alloc(size: number, fill?: string | Buffer | number, encoding?: BufferEncoding): Buffer;
            /**
             * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
             * of the newly created Buffer are unknown and may contain sensitive data.
             *
             * @param size count of octets to allocate
             */
            allocUnsafe(size: number): Buffer;
            /**
             * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
             * of the newly created Buffer are unknown and may contain sensitive data.
             *
             * @param size count of octets to allocate
             */
            allocUnsafeSlow(size: number): Buffer;
            /**
             * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
             */
            poolSize: number;
        }

        interface Buffer extends Uint8Array {
            write(string: string, encoding?: BufferEncoding): number;
            write(string: string, offset: number, encoding?: BufferEncoding): number;
            write(string: string, offset: number, length: number, encoding?: BufferEncoding): number;
            toString(encoding?: BufferEncoding, start?: number, end?: number): string;
            toJSON(): { type: 'Buffer'; data: number[] };
            equals(otherBuffer: Uint8Array): boolean;
            compare(
                otherBuffer: Uint8Array,
                targetStart?: number,
                targetEnd?: number,
                sourceStart?: number,
                sourceEnd?: number
            ): number;
            copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
            /**
             * Returns a new `Buffer` that references **the same memory as the original**, but offset and cropped by the start and end indices.
             *
             * This method is incompatible with `Uint8Array#slice()`, which returns a copy of the original memory.
             *
             * @param begin Where the new `Buffer` will start. Default: `0`.
             * @param end Where the new `Buffer` will end (not inclusive). Default: `buf.length`.
             */
            slice(begin?: number, end?: number): Buffer;
            /**
             * Returns a new `Buffer` that references **the same memory as the original**, but offset and cropped by the start and end indices.
             *
             * This method is compatible with `Uint8Array#subarray()`.
             *
             * @param begin Where the new `Buffer` will start. Default: `0`.
             * @param end Where the new `Buffer` will end (not inclusive). Default: `buf.length`.
             */
            subarray(begin?: number, end?: number): Buffer;
            writeBigInt64BE(value: bigint, offset?: number): number;
            writeBigInt64LE(value: bigint, offset?: number): number;
            writeBigUInt64BE(value: bigint, offset?: number): number;
            writeBigUInt64LE(value: bigint, offset?: number): number;
            writeUIntLE(value: number, offset: number, byteLength: number): number;
            writeUIntBE(value: number, offset: number, byteLength: number): number;
            writeIntLE(value: number, offset: number, byteLength: number): number;
            writeIntBE(value: number, offset: number, byteLength: number): number;
            readBigUInt64BE(offset?: number): bigint;
            readBigUInt64LE(offset?: number): bigint;
            readBigInt64BE(offset?: number): bigint;
            readBigInt64LE(offset?: number): bigint;
            readUIntLE(offset: number, byteLength: number): number;
            readUIntBE(offset: number, byteLength: number): number;
            readIntLE(offset: number, byteLength: number): number;
            readIntBE(offset: number, byteLength: number): number;
            readUInt8(offset?: number): number;
            readUInt16LE(offset?: number): number;
            readUInt16BE(offset?: number): number;
            readUInt32LE(offset?: number): number;
            readUInt32BE(offset?: number): number;
            readInt8(offset?: number): number;
            readInt16LE(offset?: number): number;
            readInt16BE(offset?: number): number;
            readInt32LE(offset?: number): number;
            readInt32BE(offset?: number): number;
            readFloatLE(offset?: number): number;
            readFloatBE(offset?: number): number;
            readDoubleLE(offset?: number): number;
            readDoubleBE(offset?: number): number;
            reverse(): this;
            swap16(): Buffer;
            swap32(): Buffer;
            swap64(): Buffer;
            writeUInt8(value: number, offset?: number): number;
            writeUInt16LE(value: number, offset?: number): number;
            writeUInt16BE(value: number, offset?: number): number;
            writeUInt32LE(value: number, offset?: number): number;
            writeUInt32BE(value: number, offset?: number): number;
            writeInt8(value: number, offset?: number): number;
            writeInt16LE(value: number, offset?: number): number;
            writeInt16BE(value: number, offset?: number): number;
            writeInt32LE(value: number, offset?: number): number;
            writeInt32BE(value: number, offset?: number): number;
            writeFloatLE(value: number, offset?: number): number;
            writeFloatBE(value: number, offset?: number): number;
            writeDoubleLE(value: number, offset?: number): number;
            writeDoubleBE(value: number, offset?: number): number;

            fill(value: string | Uint8Array | number, offset?: number, end?: number, encoding?: BufferEncoding): this;

            indexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
            lastIndexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: BufferEncoding): number;
            entries(): IterableIterator<[number, number]>;
            includes(value: string | number | Buffer, byteOffset?: number, encoding?: BufferEncoding): boolean;
            keys(): IterableIterator<number>;
            values(): IterableIterator<number>;
        }
        var Buffer: BufferConstructor;

        /**
         * Decodes a string of Base64-encoded data into bytes, and encodes those bytes into a string using Latin-1 (ISO-8859-1).
         *
         * This function is only provided for compatibility with legacy web platform APIs
         * and should never be used in new code, because they use strings to represent
         * binary data and predate the introduction of typed arrays in JavaScript.
         * For code running using Node.js APIs, converting between base64-encoded strings
         * and binary data should be performed using `Buffer.from(str, 'base64')` and
         * `buf.toString('base64')`.
         *
         * @deprecated dom compatibility
         */
        function atob(input: string): string;

        /**
         * Decodes a string into bytes using Latin-1 (ISO-8859), and encodes those bytes into a string using Base64.
         *
         * This function is only provided for compatibility with legacy web platform APIs
         * and should never be used in new code, because they use strings to represent
         * binary data and predate the introduction of typed arrays in JavaScript.
         * For code running using Node.js APIs, converting between base64-encoded strings
         * and binary data should be performed using `Buffer.from(str, 'base64')` and
         * `buf.toString('base64')`.
         *
         * @deprecated dom compatibility
         */
        function btoa(input: string): string;
    }
}

declare module 'node:buffer' {
    export * from 'buffer';
}
