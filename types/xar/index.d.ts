// Type definitions for xar 1.1
// Project: https://github.com/finnp/xar
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Readable as ReadableStream } from 'stream';

export interface TOCHeader {
    cksumAlg: number;
    size: number;
    tocLengthCompressed: number;
    tocLengthUncompressed: number;
    version: number;
}

export type Compression = 'none' | 'gzip';

export interface PackOptions {
    compression?: Compression;
}

export type ExtractCallback = (error: Error | null, file: Record<string, any>, content?: string) => void;

export type GetTOCCallback = (
    error: Error | null,
    xmlBuffer: Buffer,
    json: Record<string, any>,
    header: TOCHeader,
) => void;

export function extract(data: Buffer, cb: ExtractCallback): void;
export const unpack: typeof extract;

export function pack(dir: string, opts?: PackOptions): ReadableStream;
export const create: typeof pack;

export function getToc(data: Buffer, cb: GetTOCCallback): void;
