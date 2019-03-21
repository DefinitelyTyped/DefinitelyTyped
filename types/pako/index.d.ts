// Type definitions for pako 1.0
// Project: https://github.com/nodeca/pako
// Definitions by: Denis Cappellin <https://github.com/cappellin>
//                 Caleb Eggensperger <https://github.com/calebegg>
//                 Muhammet Öztürk <https://github.com/hlthi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum FlushValues {
    Z_NO_FLUSH = 0,
    Z_PARTIAL_FLUSH = 1,
    Z_SYNC_FLUSH = 2,
    Z_FULL_FLUSH = 3,
    Z_FINISH = 4,
    Z_BLOCK = 5,
    Z_TREES = 6,
}

export enum StrategyValues {
    Z_FILTERED = 1,
    Z_HUFFMAN_ONLY = 2,
    Z_RLE = 3,
    Z_FIXED = 4,
    Z_DEFAULT_STRATEGY = 0,
}

export enum ReturnCodes {
    Z_OK = 0,
    Z_STREAM_END = 1,
    Z_NEED_DICT = 2,
    Z_ERRNO = -1,
    Z_STREAM_ERROR = -2,
    Z_DATA_ERROR = -3,
    Z_BUF_ERROR = -5,
}

export interface DeflateOptions {
    level?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    windowBits?: number;
    memLevel?: number;
    strategy?: StrategyValues;
    dictionary?: any;
    raw?: boolean;
    to?: 'string';
    chunkSize?: number;
    gzip?: boolean;
    header?: Header;
}

export interface DeflateFunctionOptions {
    level?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    windowBits?: number;
    memLevel?: number;
    strategy?: StrategyValues;
    dictionary?: any;
    raw?: boolean;
    to?: 'string';
}

export interface InflateOptions {
    windowBits?: number;
    dictionary?: any;
    raw?: boolean;
    to?: 'string';
    chunkSize?: number;
}

export interface InflateFunctionOptions {
    windowBits?: number;
    raw?: boolean;
    to?: 'string';
}

export interface Header {
    text?: boolean;
    time?: number;
    os?: number;
    extra?: number[];
    name?: string;
    comment?: string;
    hcrc?: boolean;
}

export type Data = Uint8Array | number[] | string;

/**
 * Compress data with deflate algorithm and options.
 */
export function deflate(data: Data, options: DeflateFunctionOptions & { to: 'string' }): string;
export function deflate(data: Data, options?: DeflateFunctionOptions): Uint8Array;

/**
 * The same as deflate, but creates raw data, without wrapper (header and adler32 crc).
 */
export function deflateRaw(data: Data, options: DeflateFunctionOptions & { to: 'string' }): string;
export function deflateRaw(data: Data, options?: DeflateFunctionOptions): Uint8Array;

/**
 * The same as deflate, but create gzip wrapper instead of deflate one.
 */
export function gzip(data: Data, options: DeflateFunctionOptions & { to: 'string' }): string;
export function gzip(data: Data, options?: DeflateFunctionOptions): Uint8Array;

/**
 * Decompress data with inflate/ungzip and options. Autodetect format via wrapper header
 * by default. That's why we don't provide separate ungzip method.
 */
export function inflate(data: Data, options: InflateFunctionOptions & { to: 'string' }): string;
export function inflate(data: Data, options?: InflateFunctionOptions): Uint8Array;

/**
 * The same as inflate, but creates raw data, without wrapper (header and adler32 crc).
 */
export function inflateRaw(data: Data, options: InflateFunctionOptions & { to: 'string' }): string;
export function inflateRaw(data: Data, options?: InflateFunctionOptions): Uint8Array;

/**
 * Just shortcut to inflate, because it autodetects format by header.content. Done for convenience.
 */
export function ungzip(data: Data, options: InflateFunctionOptions & { to: 'string' }): string;
export function ungzip(data: Data, options?: InflateFunctionOptions): Uint8Array;

export class Deflate {
    constructor(options?: DeflateOptions);
    err: ReturnCodes;
    msg: string;
    result: Uint8Array | number[];
    onData(chunk: Data): void;
    onEnd(status: number): void;
    push(data: Data | ArrayBuffer, mode?: FlushValues | boolean): boolean;
}

export class Inflate {
    constructor(options?: InflateOptions);
    err: ReturnCodes;
    msg: string;
    result: Data;
    onData(chunk: Data): void;
    onEnd(status: number): void;
    push(data: Data | ArrayBuffer, mode?: FlushValues | boolean): boolean;
}
