// Type definitions for css-minimizer-webpack-plugin 3.0
// Project: https://github.com/webpack-contrib/css-minimizer-webpack-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Compiler } from "webpack";
import { CssNanoOptions } from "cssnano";
import { ProcessOptions, SourceMapOptions } from "postcss";

declare class CssMinimizerPlugin {
    constructor(options?: CssMinimizerPlugin.Options);

    /**
     * Apply the plugin
     */
    apply(compiler: Compiler): void;

    static cssnanoMinify: CssMinimizerPlugin.MinifyFunc;
    static cssoMinify: CssMinimizerPlugin.MinifyFunc;
    static cleanCssMinify: CssMinimizerPlugin.MinifyFunc;
}

declare namespace CssMinimizerPlugin {
    interface Options {
        minimizerOptions?: MinimizerOptions | MinimizerOptions[] | undefined;
        /**
         * Test to match files against.
         */
        test?: string | RegExp | Array<string | RegExp> | undefined;
        /**
         * Files to include
         */
        include?: string | RegExp | Array<string | RegExp> | undefined;
        /**
         * Files to exclude.
         */
        exclude?: string | RegExp | Array<string | RegExp> | undefined;
        /**
         * Enable file caching.
         * @default 'node_modules/.cache/css-minimizer-webpack-plugin'
         */
        cache?: boolean | string | undefined;
        /**
         * Allows you to override default cache keys.
         */
        cacheKeys?: ((defaultCacheKeys: CacheKeys, file: string) => CacheKeys) | undefined;
        /**
         * Use multi-process parallel running to improve the build speed.
         * Default number of concurrent runs: os.cpus().length - 1.
         */
        parallel?: boolean | number | undefined;
        /**
         * Enable (and configure) source map support.
         * Use PostCss SourceMap options.
         * Default configuration when enabled: { inline: false }.
         */
        sourceMap?: boolean | SourceMapOptions | undefined;
        /**
         * Allows you to override default minify function.
         * By default plugin uses cssnano package. Useful for using and testing unpublished versions or forks.
         */
        minify?: MinifyFunc | MinifyFunc[] | undefined;
        /**
         * Allow to filter css-minimizer warnings (By default cssnano).
         * Return true to keep the warning, a falsy value (false/null/undefined) otherwise.
         */
        warningsFilter?: ((warning: string, file: string, source: string) => boolean | undefined | null) | undefined;
    }

    interface MinimizerOptions extends CssNanoOptions {
        processorOptions?: {
            from?: ProcessOptions["from"] | undefined;
            map?: ProcessOptions["map"] | undefined;
            parser?: ProcessOptions["parser"] | string | undefined;
            stringifier?: ProcessOptions["stringifier"] | string | undefined;
            syntax?: ProcessOptions["syntax"] | string | undefined;
            to?: ProcessOptions["to"] | undefined;
        } | undefined;
    }

    interface MinifyFunc {
        (data: any, inputMap: any, minimizerOptions: any): any;
    }

    /**
     * Default cache keys
     */
    interface DefaultCacheKeys {
        cssMinimizer: string;
        "css-minimizer-webpack-plugin": string;
        "css-minimizer-webpack-plugin-options": string;
        path: string;
        hash: string;
    }

    interface CacheKeys extends DefaultCacheKeys {
        [key: string]: string;
    }
}

export = CssMinimizerPlugin;
