// Type definitions for lzma-native 4.0
// Project: https://github.com/addaleax/lzma-native
// Definitions by: Evan Cameron <https://github.com/leshow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node" />

import { Stream } from "stream";
export interface LzmaOptions {
    synchronous?: boolean;
    bufsize?: number;
    memlimit?: number;
    check?: Check;
    preset?: Preset;
    flags?:
        | "TELL_NO_CHECK"
        | "TELL_UNSUPPORTED_CHECK"
        | "TELL_ANY_CHECK"
        | "CONCATENATED";
    threads?: number;
    blockSize?: number;
    timeout?: number;
}

export type Check =
    | "CHECK_CRC32"
    | "CHECK_CRC64"
    | "CHECK_NONE"
    | "CHECK_SHA256";

export type Coders =
    | "easyEncoder"
    | "aloneDecoder"
    | "rawEncoder"
    | "autoDecoder"
    | "aloneEncoder"
    | "streamEncoder"
    | "streamDecoder";

export type Preset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface FileOptions {
    fileSize: number;
    memlimit?: number;
    read: (
        count: number,
        offset: number,
        cb: (err: any, buffer: Buffer) => void
    ) => void;
}

export interface StreamInfo {
    streamPadding: number;
    memlimit: number;
    streams: number;
    blocks: number;
    fileSize: number;
    uncompressedSize: number;
    checks: number;
}

export function createStream(
    coder: Coders,
    options?: LzmaOptions
): JSLzmaStream;

export function createCompressor(options?: LzmaOptions): JSLzmaStream;
export function createDecompressor(options?: LzmaOptions): JSLzmaStream;
export function crc32(
    input: string,
    encoding?: string,
    previous?: number
): string;
export function isXZ(buf: Buffer | string): boolean;
export function versionString(): string;
export function versionNumber(): number;
export function checkSize(check: Check): number;
export function easyDecoderMemusage(preset: Preset): number;
export function easyEncoderMemusage(preset: Preset): number;
export function rawDecoderMemusage(preset: Preset): number;
export function rawEncoderMemusage(preset: Preset): number;

export function Compressor(
    preset?: Preset,
    options?: LzmaOptions
): JSLzmaStream;
export function Decompressor(options?: LzmaOptions): JSLzmaStream;

export function parseFileIndex(
    options: FileOptions,
    callback?: (err: any, info?: StreamInfo) => void
): void;
export function parseFileIndexFD(
    fileDescriptor: number,
    callback?: (err: any, info?: StreamInfo) => void
): void;

export function compress(
    buf: Buffer | string,
    options?: LzmaOptions | Preset,
    on_finish?: (result: Buffer) => void
): void;
export function decompress(
    buf: Buffer | string,
    options?: LzmaOptions | Preset,
    on_finish?: (result: Buffer) => void
): void;
export function LZMA(): {
    compress(
        buf: Buffer | string,
        mode: Preset,
        on_finish: (result: Buffer) => void,
        on_progress?: (progress: number) => void
    ): void;
    decompress(
        buf: Buffer | string,
        on_finish: (result: Buffer) => void,
        on_progress?: (progress: number) => void
    ): void;
};

export class JSLzmaStream extends Stream.Transform {
    constructor(nativeStream: Stream, options: LzmaOptions);
    bufsize(): number;
    bufsize(size: number): void;
    totalInt(): number;
    totalOut(): number;
    cleanUp(): void;
}
