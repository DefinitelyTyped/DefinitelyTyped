import webpack = require("webpack");
import { MinifyOptions } from "uglify-js";
import { Compiler, Plugin } from "webpack";

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
        uglify?: boolean | MinifyOptions | undefined;
        /**
         * if true, will output sourcemap
         * @default false
         */
        sourceMap?: boolean | undefined;
        /**
         * it's useful when you want to inject to html-webpack-plugin manually
         * @default 'result'
         */
        name?: string | undefined;
        /**
         * if set, will be used as the public path of the script tag.
         * if set to false, will use relativePath.
         */
        publicPath?: string | boolean | undefined;
        /**
         * if set, will be used as the output directory of the file.
         */
        outputPath?: string | undefined;
        /**
         * if set, will be used as the output fileName
         * @default '[name].js'
         */
        fileName?: string | undefined;
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
        injectType?: "prepend" | "append" | "none" | undefined;
        /** if set, will be used as the extra attributes of the script tag. */
        attributes?: {
            [key: string]: any;
        } | undefined;
    }
}

export = ConcatPlugin;
