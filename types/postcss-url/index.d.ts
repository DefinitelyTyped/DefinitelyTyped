/// <reference types="node" />

import { PluginCreator } from "postcss";

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
            pathname?: string | undefined;

            /**
             * Absolute path to asset.
             */
            absolutePath?: string | undefined;

            /**
             * Current relative path to asset.
             */
            relativePath?: string | undefined;

            /**
             * Querystring from URL.
             */
            search?: string | undefined;

            /**
             * Hash from URL.
             */
            hash?: string | undefined;
        },
        dir: {
            /**
             * PostCSS from option.
             */
            from?: string | undefined;

            /**
             * PostCSS to option.
             */
            to?: string | undefined;

            /**
             * File path.
             */
            file?: string | undefined;
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
        url?: "copy" | "inline" | "rebase" | CustomTransformFunction | undefined;

        /**
         * Specify the maximum file size to inline (in kilobytes).
         */
        maxSize?: number | undefined;

        /**
         * Do not warn when an SVG URL with a fragment is inlined.
         * PostCSS-URL does not support partial inlining.
         * The entire SVG file will be inlined.
         * By default a warning will be issued when this occurs.
         *
         * @default false
         */
        ignoreFragmentWarning?: boolean | undefined;

        /**
         * Reduce size of inlined svg (IE9+, Android 3+)
         *
         * @default false
         */
        optimizeSvgEncode?: boolean | undefined;

        /**
         * Determine wether a file should be inlined.
         */
        filter?: RegExp | CustomFilterFunction | string | undefined;

        /**
         * Specifies whether the URL's fragment identifer value, if present, will be added to the inlined data URI.
         *
         * @default false
         */
        includeUriFragment?: boolean | undefined;

        /**
         * The fallback method to use if the maximum size is exceeded or the URL contains a hash.
         */
        fallback?: CustomTransformFunction | undefined;

        /**
         * Specify the base path or list of base paths where to search images from.
         */
        basePath?: string | string[] | undefined;

        /**
         * The assets files will be copied in that destination.
         *
         * @default false
         */
        assetsPath?: boolean | string | undefined;

        /**
         * Rename the path of the files by a hash name.
         *
         * @default false
         */
        useHash?: boolean | undefined;

        /**
         * Hash options
         */
        hashOptions?:
            | {
                /**
                 * Hashing method or custom function.
                 */
                method?: "xxhash32" | "xxhash64" | CustomHashFunction | undefined;

                /**
                 * Shrink hast to certain length.
                 */
                shrink?: number | undefined;

                /**
                 * Append the original filename in resulting filename.
                 */
                append?: boolean | undefined;
            }
            | undefined;
    }

    type Url = PluginCreator<Options | Options[]>;
}

declare const url: url.Url;
export = url;
