// Type definitions for mini-css-extract-plugin 2.3
// Project: https://github.com/webpack-contrib/mini-css-extract-plugin
// Definitions by: JounQin <https://github.com/JounQin>
//                 Katsuya Hino <https://github.com/dobogo>
//                 Spencer Miskoviak <https://github.com/skovy>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />
import { Configuration, Compiler } from 'webpack';

/**
 * Lightweight CSS extraction webpack plugin.
 *
 * This plugin extracts CSS into separate files. It creates a CSS file per JS file which
 * contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
 *
 * Configuration Detail: https://github.com/webpack-contrib/mini-css-extract-plugin#configuration
 */
declare class MiniCssExtractPlugin {
    /**
     * Webpack loader always used at the end of loaders list (ie. array index zero).
     */
    static loader: string;

    constructor(options?: MiniCssExtractPlugin.PluginOptions);

    /**
     * Apply the plugin
     */
    apply(compiler: Compiler): void;
}

declare namespace MiniCssExtractPlugin {
    interface PluginOptions {
        /**
         * This option determines the name of each output CSS file.
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#filename
         * @default '[name].css'
         */
        filename?: Required<Configuration>['output']['filename'] | undefined;
        /**
         * This option determines the name of non-entry chunk files.
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#chunkfilename
         */
        chunkFilename?: Required<Configuration>['output']['chunkFilename'] | undefined;
        /**
         * Enable the experimental importModule approach instead of using child compilers. This uses less memory and is faster.
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#experimentaluseimportmodule
         * @default false
         */
        experimentalUseImportModule?: boolean | undefined;
        /**
         * Remove Order Warnings.
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#ignoreorder
         * @default false
         */
        ignoreOrder?: boolean | undefined;
        /**
         * Inserts `<link>` at the given position.
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#insert
         * @default document.head.appendChild(linkTag)
         */
        insert?: string | ((linkTag: any) => void) | undefined;
        /**
         * Adds custom attributes to tag.
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#attributes
         * @default {}
         */
        attributes?: Record<string, string> | undefined;
        /**
         * This option allows loading asynchronous chunks with a custom link type
         * @link https://github.com/webpack-contrib/mini-css-extract-plugin#linktype
         * @default 'text/css'
         */
        linkType?: string | false | 'text/css' | undefined;
        /**
         * Allows to enable/disable the runtime generation.
         * CSS will be still extracted and can be used for a custom loading methods.
         * For example, you can use [assets-webpack-plugin](https://github.com/ztoben/assets-webpack-plugin) to retreive them then use your own runtime code to download assets when needed.
         * @default true
         */
        runtime?: boolean | undefined;
    }
    interface LoaderOptions {
        /**
         * Overrides [`output.publicPath`](https://webpack.js.org/configuration/output/#outputpublicpath).
         * @default output.publicPath
         */
        publicPath?: string | ((resourcePath: string, context: string) => string) | undefined;
        /**
         * If false, the plugin will extract the CSS but **will not** emit the file
         * @default true
         */
        emit?: boolean | undefined;
        /**
         * By default, `mini-css-extract-plugin` generates JS modules that use the ES modules syntax.
         * There are some cases in which using ES modules is beneficial,
         * like in the case of module concatenation and tree shaking.
         * @default true
         */
        esModule?: boolean | undefined;

        /**
         * Layer of the css execution
         */
        layer?: string | undefined;
    }
}

export = MiniCssExtractPlugin;
