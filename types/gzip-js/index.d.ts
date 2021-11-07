// Type definitions for gzip-js 0.3
// Project: https://github.com/beatgammit/gzip-js
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export interface ZipOptions {
    level?: number | undefined;
    name?: string | undefined;
    timestamp?: number | undefined;
}
export function zip(data: string | number[] | Buffer | Uint8Array, opts?: ZipOptions): number[];
export function unzip(data: number[] | Buffer | Uint8Array): number[];
export const DEFAULT_LEVEL: number;
