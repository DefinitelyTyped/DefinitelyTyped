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
