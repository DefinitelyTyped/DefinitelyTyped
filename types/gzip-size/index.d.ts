// Type definitions for gzip-size 4.1
// Project: https://github.com/sindresorhus/gzip-size
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Jimi van der Woning <https://github.com/jimivdw>
//                 Andre Wiggins <https://github.com/andrewiggins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';
import * as zlib from 'zlib';

interface GzipSizeStream extends stream.PassThrough {
    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "gzip-size", listener: (size: number) => void): this;

    /**
     * Contains the gzip size of the stream after it is finished.
     * Since this happens asynchronously, it is recommended you use
     * the `.on("gzip-size", size => console.log(size))` method instead
     */
    gzipSize?: number;
}

/**
 * Returns a Promise for the size.
 * @param input A string or Buffer to determine the gzip size of
 * @param options Any zlib option
 */
declare function gzipSize(input: string | Buffer, options?: zlib.ZlibOptions): Promise<number>;

declare namespace gzipSize {
    /**
     * Returns the size synchronously
     * @param input A string or Buffer to determine the gzip size of
     * @param options Any zlib option
     */
    function sync(input: string | Buffer, options?: zlib.ZlibOptions): number;

    /**
     * Returns a stream.PassThrough. The stream emits a gzip-size event and has a gzipSize property.
     * @param options Any zlib option
     */
    function stream(options?: zlib.ZlibOptions): GzipSizeStream;

    /**
     * Returns a Promise for the size of the file.
     * @param path The path to the file
     * @param options Any zlib option
     */
    function file(path: string, options?: zlib.ZlibOptions): Promise<number>;
}

export = gzipSize;
