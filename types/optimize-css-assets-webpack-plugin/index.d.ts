// Type definitions for optimize-css-assets-webpack-plugin 5.0
// Project: http://github.com/nmfr/optimize-css-assets-webpack-plugin
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
//                 Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

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
        assetNameRegExp?: RegExp;
        /**
         * The CSS processor used to optimize \ minimize the CSS. This should be a
         * function that follows `cssnano.process` interface (receives a CSS and
         * options parameters and returns a Promise).
         *
         * @default cssnano
         */
        cssProcessor?: {
            process: (css: string, options?: object) => PromiseLike<any>;
        };
        /**
         * The options passed to the `cssProcessor`.
         *
         * @default {}
         */
        cssProcessorOptions?: object;
        /**
         * The plugin options passed to the `cssProcessor`.
         *
         * @default {}
         */
        cssProcessorPluginOptions?: object;
        /**
         * A boolean indicating if the plugin can print messages to the console.
         *
         * @default true
         */
        canPrint?: boolean;
    }
}

declare class OptimizeCssAssetsPlugin extends Plugin {
    constructor(options?: OptimizeCssAssetsPlugin.Options);
}
