// Type definitions for webpack-concat-plugin 3.0
// Project: https://github.com/hxlniada/webpack-concat-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import webpack = require('webpack');
import { Compiler, Plugin } from 'webpack';
import { MinifyOptions } from 'uglify-js';

/**
 * A plugin to help webpack concat js and inject into html
 */
declare class ConcatPlugin extends Plugin {
    constructor(options?: ConcatPlugin.Options);
    ensureTrailingSlash(str: string): string;
    getFileName(file: string | { [file: string]: string }, filePath?: string): string;
    hashFile(files: string | { [file: string]: string }): string;
    getRelativePathAsync(context: string): Promise<string>;
    resolveReadFiles(compiler: Compiler): void;
    resolveConcatAndUglify(compilation: webpack.compilation.Compilation, files: string[]): void;
}

declare namespace ConcatPlugin {
    interface Options {
        /**
         * if true the output file will be uglified
         * or set uglifyjs options to customize the output
         * @default false
         */
        uglify?: boolean | MinifyOptions;
        /**
         * if true, will output sourcemap
         * @default false
         */
        sourceMap?: boolean;
        /**
         * it's useful when you want to inject to html-webpack-plugin manually
         * @default 'result'
         */
        name?: string;
        /**
         * if set, will be used as the public path of the script tag.
         * if set to false, will use relativePath.
         */
        publicPath?: string | boolean;
        /**
         * if set, will be used as the output directory of the file.
         */
        outputPath?: string;
        /**
         * if set, will be used as the output fileName
         * @default '[name].js'
         */
        fileName?: string;
        /**
         * supported path patterns:
         * - normal path
         * - npm packages
         * - glob
         */
        filesToConcat: Array<string | string[]>;
        /**
         * how to auto inject to html-webpack-plugin
         * (only if html-webpack-plugin set inject option not to be false)
         * @default 'prepend'
         */
        injectType?: 'prepend' | 'append' | 'none';
        /** if set, will be used as the extra attributes of the script tag. */
        attributes?: {
            [key: string]: any;
        };
    }
}

export = ConcatPlugin;
