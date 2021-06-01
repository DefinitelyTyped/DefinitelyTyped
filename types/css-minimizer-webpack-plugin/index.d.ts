// Type definitions for css-minimizer-webpack-plugin 1.3
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
}

declare namespace CssMinimizerPlugin {
    interface Options {
        minimizerOptions?: CssNanoOptions & {
            processorOptions?: {
                from?: ProcessOptions["from"];
                map?: ProcessOptions["map"];
                parser?: ProcessOptions["parser"] | string;
                stringifier?: ProcessOptions["stringifier"] | string;
                syntax?: ProcessOptions["syntax"] | string;
                to?: ProcessOptions["to"];
            };
        };
        /**
         * Test to match files against.
         */
        test?: string | RegExp | Array<string | RegExp>;
        /**
         * Files to include
         */
        include?: string | RegExp | Array<string | RegExp>;
        /**
         * Files to exclude.
         */
        exclude?: string | RegExp | Array<string | RegExp>;
        /**
         * Enable file caching.
         * @default 'node_modules/.cache/css-minimizer-webpack-plugin'
         */
        cache?: boolean | string;
        /**
         * Allows you to override default cache keys.
         */
        cacheKeys?: (defaultCacheKeys: CacheKeys, file: string) => CacheKeys;
        /**
         * Use multi-process parallel running to improve the build speed.
         * Default number of concurrent runs: os.cpus().length - 1.
         */
        parallel?: boolean | number;
        /**
         * Enable (and configure) source map support.
         * Use PostCss SourceMap options.
         * Default configuration when enabled: { inline: false }.
         */
        sourceMap?: boolean | SourceMapOptions;
        /**
         * Allows you to override default minify function.
         * By default plugin uses cssnano package. Useful for using and testing unpublished versions or forks.
         */
        minify?: (data: any, inputMap: any, minimizerOptions: any) => any;
        /**
         * Allow to filter css-minimizer warnings (By default cssnano).
         * Return true to keep the warning, a falsy value (false/null/undefined) otherwise.
         */
        warningsFilter?: (warning: string, file: string, source: string) => boolean | undefined | null;
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
