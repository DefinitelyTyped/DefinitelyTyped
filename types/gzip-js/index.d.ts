// Type definitions for gzip-js 0.3
// Project: https://github.com/beatgammit/gzip-js
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ZipOptions {
    level?: number;
    name?: string;
    timestamp?: number;
}
export function zip(data: string, opts?: ZipOptions): number[];
export function unzip(data: number[] | Buffer | Uint8Array): number[];
export const DEFAULT_LEVEL: number;
