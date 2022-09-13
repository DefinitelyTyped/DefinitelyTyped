// Type definitions for gulp-size 4.0
// Project: https://github.com/sindresorhus/gulp-size
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace size {
    interface Options {
        /**
         * Displays the size of every file instead of just the total size.
         *
         * @default false
         */
        showFiles?: boolean | undefined;

        /**
         * Displays the gzipped size.
         *
         * @default false
         */
        gzip?: boolean | undefined;

        /**
         * Give it a title so it's possible to distinguish the output of multiple instances logging at once.
         *
         * @default ''
         */
        title?: string | undefined;

        /**
         * Displays prettified size: 1337 B → 1.34 kB.
         *
         * @default true
         */
        pretty?: boolean | undefined;

        /**
         * Displays the total of all files.
         *
         * @default true
         */
        showTotal?: boolean | undefined;

        /**
         * Displays the brotli compressed size.
         *
         * @default false
         */
        brotli?: boolean | undefined;

        /**
         * Displays the uncompressed size.
         *
         * @default false
         */
        uncompressed?: boolean | undefined;
    }

    interface SizeStream extends NodeJS.ReadWriteStream {
        /**
         * The total size of all files in bytes.
         *
         * @example 12423000
         */
        size: number;

        /**
         * Prettified version of .size.
         *
         * @example 14 kB
         */
        prettySize: string;
    }
}

declare function size(options?: size.Options): size.SizeStream;

export = size;
