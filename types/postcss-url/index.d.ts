// Type definitions for postcss-url 8.0
// Project: https://github.com/postcss/postcss-url
// Definitions by: Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { Plugin } from 'postcss';

declare namespace url {
    type CustomTransformFunction = (
        asset: {
            /**
             * Original URL.
             */
            url: string;

            /**
             * URL pathname.
             */
            pathname?: string;

            /**
             * Absolute path to asset.
             */
            absolutePath?: string;

            /**
             * Current relative path to asset.
             */
            relativePath?: string;

            /**
             * Querystring from URL.
             */
            search?: string;

            /**
             * Hash from URL.
             */
            hash?: string;
        },
        dir: {
            /**
             * PostCSS from option.
             */
            from?: string;

            /**
             * PostCSS to option.
             */
            to?: string;

            /**
             * File path.
             */
            file?: string;
        },
    ) => string;
    type CustomHashFunction = (file: Buffer) => string;
    type CustomFilterFunction = (file: string) => boolean;

    interface Options {
        /**
         * URL rewriting mechanism.
         *
         * @default 'rebase'
         */
        url?: 'copy' | 'inline' | 'rebase' | CustomTransformFunction;

        /**
         * Specify the maximum file size to inline (in kilobytes).
         */
        maxSize?: number;

        /**
         * Do not warn when an SVG URL with a fragment is inlined.
         * PostCSS-URL does not support partial inlining.
         * The entire SVG file will be inlined.
         * By default a warning will be issued when this occurs.
         *
         * @default false
         */
        ignoreFragmentWarning?: boolean;

        /**
         * Reduce size of inlined svg (IE9+, Android 3+)
         *
         * @default false
         */
        optimizeSvgEncode?: boolean;

        /**
         * Determine wether a file should be inlined.
         */
        filter?: RegExp | CustomFilterFunction | string;

        /**
         * Specifies whether the URL's fragment identifer value, if present, will be added to the inlined data URI.
         *
         * @default false
         */
        includeUriFragment?: boolean;

        /**
         * The fallback method to use if the maximum size is exceeded or the URL contains a hash.
         */
        fallback?: CustomTransformFunction;

        /**
         * Specify the base path or list of base paths where to search images from.
         */
        basePath?: string | string[];

        /**
         * The assets files will be copied in that destination.
         *
         * @default false
         */
        assetsPath?: boolean | string;

        /**
         * Rename the path of the files by a hash name.
         *
         * @default false
         */
        useHash?: boolean;

        /**
         * Hash options
         */
        hashOptions?: {
            /**
             * Hashing method or custom function.
             */
            method?: 'xxhash32' | 'xxhash64' | CustomHashFunction;

            /**
             * Shrink hast to certain length.
             */
            shrink?: number;

            /**
             * Append the original filename in resulting filename.
             */
            append?: boolean;
        };
    }

    type Url = Plugin<Options | Options[]>;
}

declare const url: url.Url;
export = url;
