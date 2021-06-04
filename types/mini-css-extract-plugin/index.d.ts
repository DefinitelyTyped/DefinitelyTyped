// Type definitions for mini-css-extract-plugin 1.4
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
         * Works like [`output.filename`](https://webpack.js.org/configuration/output/#outputfilename).
         */
        filename?: Required<Configuration>['output']['filename'];
        /**
         * Works like [`output.chunkFilename`](https://webpack.js.org/configuration/output/#outputchunkfilename).
         */
        chunkFilename?: Required<Configuration>['output']['chunkFilename'];
        /**
         * For projects where CSS ordering has been mitigated through consistent
         * use of scoping or naming conventions, the CSS order warnings can be
         * disabled by setting this flag to true for the plugin.
         */
        ignoreOrder?: boolean;
        /**
         * Specify where to insert the link tag.
         *
         * A string value specifies a DOM query for a parent element to attach to.
         *
         * A function allows to override default behavior for non-entry CSS chunks.
         * This code will run in the browser alongside your application. It is recommend
         * to only use ECMA 5 features and syntax. The function won't have access to the
         * scope of the webpack configuration module.
         *
         * @default function() { document.head.appendChild(linkTag); }
         */
        insert?: string | ((linkTag: any) => void);
        /**
         * Specify additional html attributes to add to the link tag.
         *
         * Note: These are only applied to dynamically loaded css chunks. To modify link
         * attributes for entry CSS chunks, please use html-webpack-plugin.
         */
        attributes?: Record<string, string>;
        /**
         * This option allows loading asynchronous chunks with a custom link type, such as
         * `<link type="text/css" ...>`.
         *
         * `false` disables the link `type` attribute.
         *
         * @default 'text/css'
         */
        linkType?: string | false | 'text/css';

        /**
         * Use an experimental webpack API to execute modules instead of child compilers
         * @default false
         */
        experimentalUseImportModule?: boolean;
    }
    interface LoaderOptions {
        /**
         * Overrides [`output.publicPath`](https://webpack.js.org/configuration/output/#outputpublicpath).
         * @default output.publicPath
         */
        publicPath?: string | ((resourcePath: string, context: string) => string);
        /**
         * If false, the plugin will extract the CSS but **will not** emit the file
         * @default true
         */
        emit?: boolean;
        /**
         * By default, `mini-css-extract-plugin` generates JS modules that use the ES modules syntax.
         * There are some cases in which using ES modules is beneficial,
         * like in the case of module concatenation and tree shaking.
         * @default true
         */
        esModule?: boolean;

        /**
         * Layer of the css execution
         */
        layer?: string;

        modules?: {
            /**
             * Enables/disables ES modules named export for locals.
             *
             * Names of locals are converted to camelCase. It is not allowed to use
             * JavaScript reserved words in CSS class names. Options `esModule` and
             * `modules.namedExport` in css-loader and MiniCssExtractPlugin.loader
             * must be enabled.
             *
             * @default false
             */
            namedExport?: boolean;
        };
    }
}

export = MiniCssExtractPlugin;
