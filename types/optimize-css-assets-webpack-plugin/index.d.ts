// Type definitions for optimize-css-assets-webpack-plugin 5.0
// Project: https://github.com/nmfr/optimize-css-assets-webpack-plugin
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
//                 Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { WebpackPluginInstance as Plugin, Compiler } from 'webpack';

export = OptimizeCssAssetsPlugin;

declare namespace OptimizeCssAssetsPlugin {
    interface Options {
        /**
         * A regular expression that indicates the names of the assets that should
         * be optimized \ minimized. The regular expression provided is run against
         * the filenames of the files exported by the `ExtractTextPlugin` instances
         * in your configuration, not the filenames of your source CSS files
         *
         * @default /\.css$/g
         */
        assetNameRegExp?: RegExp | undefined;
        /**
         * The CSS processor used to optimize \ minimize the CSS. This should be a
         * function that follows `cssnano.process` interface (receives a CSS and
         * options parameters and returns a Promise).
         *
         * @default cssnano
         */
        cssProcessor?: {
            process: (css: string, options?: object) => PromiseLike<any>;
        } | undefined;
        /**
         * The options passed to the `cssProcessor`.
         *
         * @default {}
         */
        cssProcessorOptions?: object | undefined;
        /**
         * The plugin options passed to the `cssProcessor`.
         *
         * @default {}
         */
        cssProcessorPluginOptions?: object | undefined;
        /**
         * A boolean indicating if the plugin can print messages to the console.
         *
         * @default true
         */
        canPrint?: boolean | undefined;
    }
}

declare class OptimizeCssAssetsPlugin implements Plugin {
    constructor(options?: OptimizeCssAssetsPlugin.Options);
    apply(compiler: Compiler): void;
}
