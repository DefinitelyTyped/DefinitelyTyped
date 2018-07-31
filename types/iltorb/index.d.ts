// Type definitions for iltorb 2.0
// Project: https://github.com/MayhemYDG/iltorb
// Definitions by: Arturas Molcanovas <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

import { Transform } from 'stream';

export interface BrotliEncodeParams {
    disable_literal_context_modeling?: boolean;
    lgblock?: number;
    lgwin?: number;
    mode?: number;
    quality?: number;
    size_hint?: number;
}

export interface BrotliFlushable {
	flush(): void;
}

export type IltorbCallback = (err: Error | null | undefined, output: Buffer) => void;

export function compress(buffer: Buffer, options: BrotliEncodeParams, callback: IltorbCallback): void;
export function compress(buffer: Buffer, callback: IltorbCallback): void;

export function decompress(buffer: Buffer, callback: IltorbCallback): void;

export function compressSync(buffer: Buffer, options?: BrotliEncodeParams): Buffer;
export function decompressSync(buffer: Buffer): Buffer;

export function compressStream(options?: BrotliEncodeParams): Transform & BrotliFlushable;
export function decompressStream(): Transform;
