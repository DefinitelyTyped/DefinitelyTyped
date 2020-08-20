// Type definitions for html-beautify-webpack-plugin 1.0
// Project: https://github.com/SeeYouLater/html-beautify-webpack-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Plugin } from 'webpack';
import { CoreBeautifyOptions, CSSBeautifyOptions, HTMLBeautifyOptions, JSBeautifyOptions } from 'js-beautify';

/**
 * Beautifier for output of HtmlWebpackPlugin
 */
declare class HtmlBeautifyPlugin extends Plugin {
    options: HtmlBeautifyPlugin.Options;
    constructor(options?: HtmlBeautifyPlugin.Options, replace?: string[]);
}

declare namespace HtmlBeautifyPlugin {
    interface Options {
        /**
         * js-beautify's options as object to beautify the output.
         */
        config?: HtmlBeautifyConfig;
        /**
         * Optional array of items to replace in destination file
         * @default []
         */
        replace?: string[] | ReplaceConfig[];
    }

    interface HtmlBeautifyConfig extends CoreBeautifyOptions {
        html?: HTMLBeautifyOptions;
        js?: JSBeautifyOptions;
        css?: CSSBeautifyOptions;
    }

    interface ReplaceConfig {
        test: string | RegExp;
        with?: string;
    }
}

export = HtmlBeautifyPlugin;
