// Type definitions for snappy 6.0
// Project: https://github.com/kesla/node-snappy
// Definitions by: Francis Gulotta <https://github.com/reconbot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

export interface SnappyDecompressOpts {
    asBuffer: boolean;
}

export type bufferCallback = (err: Error | null, data: Buffer) => void;
export type bufferOrStringCallback = (err: Error | null, data: Buffer|string) => void;
export type booleanCallback = (err: Error | null, data: boolean) => void;

export function compress(buffer: Buffer|string, callback: bufferCallback): void;
export function compressSync(buffer: Buffer|string): Buffer;

export function uncompress(buffer: Buffer, callback: bufferCallback): void;
export function uncompress(buffer: Buffer, options: SnappyDecompressOpts, callback: bufferOrStringCallback): void;
export function uncompressSync(buffer: Buffer): Buffer;
export function uncompressSync(buffer: Buffer, options: SnappyDecompressOpts): Buffer|string;

export function isValidCompressed(buffer: Buffer, callback: booleanCallback): void;
export function isValidCompressedSync(buffer: Buffer): boolean;
