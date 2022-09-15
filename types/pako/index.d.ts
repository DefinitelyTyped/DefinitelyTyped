// Type definitions for pako 2.0
// Project: https://github.com/nodeca/pako
// Definitions by: Caleb Eggensperger <https://github.com/calebegg>
//                 Muhammet Öztürk <https://github.com/hlthi>
//                 Thibault Poisson <https://github.com/OrIOg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Pako;
export as namespace pako;

declare namespace Pako {
    enum constants {
        // FlushValues
        Z_NO_FLUSH = 0,
        Z_PARTIAL_FLUSH = 1,
        Z_SYNC_FLUSH = 2,
        Z_FULL_FLUSH = 3,
        Z_FINISH = 4,
        Z_BLOCK = 5,
        Z_TREES = 6,
        // StrategyValues
        Z_FILTERED = 1,
        Z_HUFFMAN_ONLY = 2,
        Z_RLE = 3,
        Z_FIXED = 4,
        Z_DEFAULT_STRATEGY = 0,
        // ReturnCodes
        Z_OK = 0,
        Z_STREAM_END = 1,
        Z_NEED_DICT = 2,
        Z_ERRNO = -1,
        Z_STREAM_ERROR = -2,
        Z_DATA_ERROR = -3,
        Z_BUF_ERROR = -5,
    }

    type FlushValues =
        | constants.Z_NO_FLUSH
        | constants.Z_PARTIAL_FLUSH
        | constants.Z_SYNC_FLUSH
        | constants.Z_FINISH
        | constants.Z_BLOCK
        | constants.Z_TREES;

    type StrategyValues =
        | constants.Z_FILTERED
        | constants.Z_HUFFMAN_ONLY
        | constants.Z_RLE
        | constants.Z_FIXED
        | constants.Z_DEFAULT_STRATEGY;

    type ReturnCodes =
        | constants.Z_OK
        | constants.Z_STREAM_END
        | constants.Z_NEED_DICT
        | constants.Z_ERRNO
        | constants.Z_STREAM_ERROR
        | constants.Z_DATA_ERROR
        | constants.Z_BUF_ERROR
        | constants.Z_DEFAULT_STRATEGY;

    interface DeflateOptions {
        level?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
        windowBits?: number | undefined;
        memLevel?: number | undefined;
        strategy?: StrategyValues | undefined;
        dictionary?: any;
        raw?: boolean | undefined;
        chunkSize?: number | undefined;
        gzip?: boolean | undefined;
        header?: Header | undefined;
    }

    interface DeflateFunctionOptions {
        level?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
        windowBits?: number | undefined;
        memLevel?: number | undefined;
        strategy?: StrategyValues | undefined;
        dictionary?: any;
        raw?: boolean | undefined;
    }

    interface InflateOptions {
        windowBits?: number | undefined;
        dictionary?: any;
        raw?: boolean | undefined;
        to?: 'string' | undefined;
        chunkSize?: number | undefined;
    }

    interface InflateFunctionOptions {
        windowBits?: number | undefined;
        raw?: boolean | undefined;
        to?: 'string' | undefined;
    }

    interface Header {
        text?: boolean | undefined;
        time?: number | undefined;
        os?: number | undefined;
        extra?: number[] | undefined;
        name?: string | undefined;
        comment?: string | undefined;
        hcrc?: boolean | undefined;
    }

    type Data = Uint8Array | ArrayBuffer;

    /**
     * Compress data with deflate algorithm and options.
     */
    function deflate(data: Data | string, options?: DeflateFunctionOptions): Uint8Array;

    /**
     * The same as deflate, but creates raw data, without wrapper (header and adler32 crc).
     */
    function deflateRaw(data: Data | string, options?: DeflateFunctionOptions): Uint8Array;

    /**
     * The same as deflate, but create gzip wrapper instead of deflate one.
     */
    function gzip(data: Data | string, options?: DeflateFunctionOptions): Uint8Array;

    /**
     * Decompress data with inflate/ungzip and options. Autodetect format via wrapper header
     * by default. That's why we don't provide separate ungzip method.
     */
    function inflate(data: Data, options: InflateFunctionOptions & { to: 'string' }): string;
    function inflate(data: Data, options?: InflateFunctionOptions): Uint8Array;

    /**
     * The same as inflate, but creates raw data, without wrapper (header and adler32 crc).
     */
    function inflateRaw(data: Data, options: InflateFunctionOptions & { to: 'string' }): string;
    function inflateRaw(data: Data, options?: InflateFunctionOptions): Uint8Array;

    /**
     * Just shortcut to inflate, because it autodetects format by header.content. Done for convenience.
     */
    function ungzip(data: Data, options: InflateFunctionOptions & { to: 'string' }): string;
    function ungzip(data: Data, options?: InflateFunctionOptions): Uint8Array;

    // https://github.com/nodeca/pako/blob/893381abcafa10fa2081ce60dae7d4d8e873a658/lib/deflate.js
    class Deflate {
        constructor(options?: DeflateOptions);
        err: ReturnCodes;
        msg: string;
        result: Uint8Array;
        onData(chunk: Data): void;
        onEnd(status: number): void;
        push(data: Data | string, mode?: FlushValues | boolean): boolean;
    }

    // https://github.com/nodeca/pako/blob/893381abcafa10fa2081ce60dae7d4d8e873a658/lib/inflate.js
    class Inflate {
        constructor(options?: InflateOptions);
        header?: Header | undefined;
        err: ReturnCodes;
        msg: string;
        result: Uint8Array | string;
        onData(chunk: Data): void;
        onEnd(status: number): void;
        push(data: Data, mode?: FlushValues | boolean): boolean;
    }
}
