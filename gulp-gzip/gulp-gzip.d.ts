// Type definitions for gulp-gzip
// Project: https://github.com/jstuckey/gulp-gzip
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-gzip" {
    import zlib = require('zlib');

    namespace gzip {
        interface Gzip {
            (options?: Options): NodeJS.ReadWriteStream;
        }

        interface Options {
            /**
             * Appends .gz file extension if true.
             * @default true
             */
            append?: boolean;
            /**
             * Appends an arbitrary extension to the filename. Disables append and preExtension options.
             */
            extension?: string;
            /**
             * Appends an arbitrary pre-extension to the filename. Disables append and extension options.
             */
            preExtension?: string;
            /**
             * Minimum size required to compress a file.
             * @default false
             */
            threshold?: number|string|boolean;
            /**
             * Options object to pass through to zlib.Gzip.
             * See <a href='https://nodejs.org/api/zlib.html#zlib_options'>zlib</a> documentation for more information.
             */
            gzipOptions?: zlib.ZlibOptions;
        }
    }

    var gzip: gzip.Gzip;

    export = gzip;
}

