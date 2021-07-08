// Type definitions for pako 1.0
// Project: https://github.com/nodeca/pako
// Definitions by: Denis Cappellin <https://github.com/cappellin>
//                 Caleb Eggensperger <https://github.com/calebegg>
//                 Muhammet Öztürk <https://github.com/hlthi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Pako;
export as namespace pako;

declare namespace Pako {
    enum FlushValues {
        Z_NO_FLUSH = 0,
        Z_PARTIAL_FLUSH = 1,
        Z_SYNC_FLUSH = 2,
        Z_FULL_FLUSH = 3,
        Z_FINISH = 4,
        Z_BLOCK = 5,
        Z_TREES = 6,
    }

    enum StrategyValues {
        Z_FILTERED = 1,
        Z_HUFFMAN_ONLY = 2,
        Z_RLE = 3,
        Z_FIXED = 4,
        Z_DEFAULT_STRATEGY = 0,
    }

    enum ReturnCodes {
        Z_OK = 0,
        Z_STREAM_END = 1,
        Z_NEED_DICT = 2,
        Z_ERRNO = -1,
        Z_STREAM_ERROR = -2,
        Z_DATA_ERROR = -3,
        Z_BUF_ERROR = -5,
    }

    interface DeflateOptions {
        level?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
        windowBits?: number | undefined;
        memLevel?: number | undefined;
        strategy?: StrategyValues | undefined;
        dictionary?: any;
        raw?: boolean | undefined;
        to?: 'string' | undefined;
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
        to?: 'string' | undefined;
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

    type Data = Uint8Array | number[] | string;

    /**
     * Compress data with deflate algorithm and options.
     */
    function deflate(data: Data, options: DeflateFunctionOptions & { to: 'string' }): string;
    function deflate(data: Data, options?: DeflateFunctionOptions): Uint8Array;

    /**
     * The same as deflate, but creates raw data, without wrapper (header and adler32 crc).
     */
    function deflateRaw(data: Data, options: DeflateFunctionOptions & { to: 'string' }): string;
    function deflateRaw(data: Data, options?: DeflateFunctionOptions): Uint8Array;

    /**
     * The same as deflate, but create gzip wrapper instead of deflate one.
     */
    function gzip(data: Data, options: DeflateFunctionOptions & { to: 'string' }): string;
    function gzip(data: Data, options?: DeflateFunctionOptions): Uint8Array;

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
        result: Uint8Array | number[];
        onData(chunk: Data): void;
        onEnd(status: number): void;
        push(data: Data | ArrayBuffer, mode?: FlushValues | boolean): boolean;
    }

    // https://github.com/nodeca/pako/blob/893381abcafa10fa2081ce60dae7d4d8e873a658/lib/inflate.js
    class Inflate {
        constructor(options?: InflateOptions);
        header?: Header | undefined;
        err: ReturnCodes;
        msg: string;
        result: Data;
        onData(chunk: Data): void;
        onEnd(status: number): void;
        push(data: Data | ArrayBuffer, mode?: FlushValues | boolean): boolean;
    }
}
