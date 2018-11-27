// Type definitions for babel-minify-webpack-plugin 0.3.1
// Project: https://github.com/webpack-contrib/babel-minify-webpack-plugin
// Definitions by: Jip Sterk <https://github.com/JipSterk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Plugin, Options } from 'webpack';
import { TransformOptions, BabylonOptions } from 'babel-core';

export = BabelMinifyWebpackPlugin;

declare class BabelMinifyWebpackPlugin extends Plugin {
    constructor(options?: BabelMinifyWebpackPlugin.Options);
}

declare namespace BabelMinifyWebpackPlugin {
    interface Options {
        test?: RegExp;
        exclude?: RegExp;
        include?: RegExp;
        comments?: boolean
        sourceMaps?: boolean | "inline" | "both";
        parserOpts?: BabylonOptions;
        babel?: TransformOptions;
        minifyPreset?: TransformOptions;
    }
}
