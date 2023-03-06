declare module 'buffer' {
    import { BinaryLike } from 'node:crypto';
    export const INSPECT_MAX_BYTES: number;
    export const kMaxLength: number;
    export const kStringMaxLength: number;
    export const constants: {
        MAX_LENGTH: number;
        MAX_STRING_LENGTH: number;
    };
    const BuffType: typeof Buffer;

    export type TranscodeEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary";

    export function transcode(source: Uint8Array, fromEnc: TranscodeEncoding, toEnc: TranscodeEncoding): Buffer;

    export const SlowBuffer: {
        /** @deprecated since v6.0.0, use `Buffer.allocUnsafeSlow()` */
        new(size: number): Buffer;
        prototype: Buffer;
    };
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
     * A [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) encapsulates immutable, raw data that can be safely shared across
     * multiple worker threads.
     * @since v14.18.0
     * @experimental
     */
    export class Blob {
        /**
         * The total size of the `Blob` in bytes.
         * @since v14.18.0
         */
        readonly size: number;
        /**
         * The content-type of the `Blob`.
         * @since v14.18.0
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
        constructor(sources: Array<BinaryLike | Blob>, options?: BlobOptions);
        /**
         * Returns a promise that fulfills with an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing a copy of
         * the `Blob` data.
         * @since v14.18.0
         */
        arrayBuffer(): Promise<ArrayBuffer>;
        /**
         * Creates and returns a new `Blob` containing a subset of this `Blob` objects
         * data. The original `Blob` is not altered.
         * @since v14.18.0
         * @param start The starting index.
         * @param end The ending index.
         * @param type The content-type for the new `Blob`
         */
        slice(start?: number, end?: number, type?: string): Blob;
        /**
         * Returns a promise that fulfills with the contents of the `Blob` decoded as a
         * UTF-8 string.
         * @since v14.18.0
         */
        text(): Promise<string>;
    }

    export { BuffType as Buffer };
}
declare module 'node:buffer' {
    export * from 'buffer';
}
