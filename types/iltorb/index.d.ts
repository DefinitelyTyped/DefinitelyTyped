// Type definitions for iltorb 2.3
// Project: https://github.com/MayhemYDG/iltorb
// Definitions by: Arturas Molcanovas <https://github.com/Alorel>
//                 Francis Gulotta <https://github.com/reconbot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

import { Transform } from 'stream';

export type BrotliMode = 0 | 1 | 2;
export type BrotliCompressionQuality = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface BrotliEncodeParams {
    disable_literal_context_modeling?: boolean;
    lgblock?: number;
    lgwin?: number;
    /** @default 0 */
    mode?: BrotliMode;
    /** @default 11 */
    quality?: BrotliCompressionQuality;
    size_hint?: number;
}

export interface BrotliFlushable {
    flush(): void;
}

export type IltorbCallback = (err: Error | null | undefined, output: Buffer) => void;

export function compress(buffer: Buffer, options: BrotliEncodeParams, callback: IltorbCallback): void;
export function compress(buffer: Buffer, callback: IltorbCallback): void;
export function compress(buffer: Buffer, options?: BrotliEncodeParams): Promise<Buffer>;

export function decompress(buffer: Buffer, callback: IltorbCallback): void;
export function decompress(buffer: Buffer): Promise<Buffer>;

export function compressSync(buffer: Buffer, options?: BrotliEncodeParams): Buffer;
export function decompressSync(buffer: Buffer): Buffer;

export function compressStream(options?: BrotliEncodeParams): Transform & BrotliFlushable;
export function decompressStream(): Transform;
