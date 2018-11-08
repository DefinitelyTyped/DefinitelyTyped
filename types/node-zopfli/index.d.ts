// Type definitions for node-zopfli 2.0
// Project: https://github.com/pierreinglebert/node-zopfli
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Transform } from 'stream';

declare class Zopfli extends Transform {
    constructor(format?: Zopfli.Format, options?: Zopfli.Options);

    static createGzip(options?: Zopfli.Options): Zopfli;
    static createDeflate(options?: Zopfli.Options): Zopfli;
    static createZlib(options?: Zopfli.Options): Zopfli;

    static gzipSync(options?: Zopfli.Options): Buffer;
    static deflateSync(options?: Zopfli.Options): Buffer;
    static zlibSync(options?: Zopfli.Options): Buffer;

    static deflate(input: Buffer, options: Zopfli.Options, cb: (err: Error, out: Buffer) => void): void;
    static deflate(input: Buffer, cb: (err: Error, out: Buffer) => void): void;
    static deflate(input: Buffer, options?: Zopfli.Options): Promise<Buffer>;

    static gzip(input: Buffer, options: Zopfli.Options, cb: (err: Error, out: Buffer) => void): void;
    static gzip(input: Buffer, cb: (err: Error, out: Buffer) => void): void;
    static gzip(input: Buffer, options?: Zopfli.Options): Promise<Buffer>;

    static zlib(input: Buffer, options: Zopfli.Options, cb: (err: Error, out: Buffer) => void): void;
    static zlib(input: Buffer, cb: (err: Error, out: Buffer) => void): void;
    static zlib(input: Buffer, options?: Zopfli.Options): Promise<Buffer>;

    static compress(input: Buffer, format: Zopfli.Format, options: Zopfli.Options, cb: (err: Error, out: Buffer) => void): void;
    static compress(input: Buffer, format: Zopfli.Format, cb: (err: Error, out: Buffer) => void): void;
    static compress(input: Buffer, format: Zopfli.Format, options?: Zopfli.Options): Promise<Buffer>;
}

declare namespace Zopfli {
    type Format = 'deflate' | 'gzip' | 'zlib';

    interface Options {
        verbose?: boolean;
        verbose_more?: boolean;
        /**
         * Maximum amount of times to rerun forward and backward pass to optimize LZ77 compression cost.
         * Good values: 10, 15 for small files, 5 for files over several MB in size or it will be too slow.
         */
        numiterations?: number;
        /**
         * If true, splits the data in multiple deflate blocks with optimal choice for the block boundaries.
         * Block splitting gives better compression.
         */
        blocksplitting?: boolean;
        /**
         * If true, chooses the optimal block split points only after doing the iterative LZ77 compression.
         * If false, chooses the block split points first, then does iterative LZ77 on each individual block.
         * Depending on the file, either first or last gives the best compression.
         */
        blocksplittinglast?: boolean;
        /**
         * Maximum amount of blocks to split into (0 for unlimited,
         * but this can give extreme results that hurt compression on some files).
         */
        blocksplittingmax?: number;
    }
}

export = Zopfli;
