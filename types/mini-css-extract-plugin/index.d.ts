// Type definitions for mini-css-extract-plugin 0.2
// Project: https://github.com/webpack-contrib/mini-css-extract-plugin
// Definitions by: JounQin <https://github.com/JounQin>
//                 Katsuya Hino <https://github.com/dobogo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

/**
 * Lightweight CSS extraction webpack plugin
 * This plugin extract CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
 * Configuration Detail: https://github.com/webpack-contrib/mini-css-extract-plugin#configuration
 */
declare class MiniCssExtractPlugin extends Plugin {
    /** webpack loader used always at the end of loaders list */
    static loader: string;

    constructor(options?: MiniCssExtractPlugin.PluginOptions);
}

declare namespace MiniCssExtractPlugin {
    interface PluginOptions {
        /**
         * Options similar to the same options in webpackOptions.output, both options are optional
         * May contain `[name]`, `[id]`, `hash` and `[chunkhash]`
         */
        filename?: string;
        chunkFilename?: string;
    }
}

export = MiniCssExtractPlugin;
