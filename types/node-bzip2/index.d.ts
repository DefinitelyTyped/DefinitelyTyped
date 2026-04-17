/// <reference types="node" />
export interface CompressOptions {
    /** Compression level from 1 (fastest) to 9 (best). Default is 9. */
    level?: number;
    /** Buffering behavior, e.g., 'auto'. */
    buffering?: "auto" | string;
}

export interface DecompressOptions {
    /** Use less memory during decompression at the cost of speed. */
    small?: boolean;
}

export function compress(input: string | Buffer | Uint8Array, options?: CompressOptions): Buffer;

export function decompress(input: Buffer | Uint8Array, options?: DecompressOptions): Buffer;

export function compressAsync(input: string | Buffer | Uint8Array, options?: CompressOptions): Promise<Buffer>;

export function decompressAsync(input: Buffer | Uint8Array, options?: DecompressOptions): Promise<Buffer>;
