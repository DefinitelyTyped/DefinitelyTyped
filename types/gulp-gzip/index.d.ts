/// <reference types="node" />

import zlib = require("zlib");

declare namespace gzip {
    interface Gzip {
        (options?: Options): NodeJS.ReadWriteStream;
    }

    interface Options {
        /**
         * Appends .gz file extension if true.
         * @default true
         */
        append?: boolean | undefined;
        /**
         * Appends an arbitrary extension to the filename. Disables append and preExtension options.
         */
        extension?: string | undefined;
        /**
         * Appends an arbitrary pre-extension to the filename. Disables append and extension options.
         */
        preExtension?: string | undefined;
        /**
         * Minimum size required to compress a file.
         * @default false
         */
        threshold?: number | string | boolean | undefined;
        /**
         * Options object to pass through to zlib.Gzip.
         * See <a href='https://nodejs.org/api/zlib.html#zlib_options'>zlib</a> documentation for more information.
         */
        gzipOptions?: zlib.ZlibOptions | undefined;
    }
}

declare var gzip: gzip.Gzip;

export = gzip;
