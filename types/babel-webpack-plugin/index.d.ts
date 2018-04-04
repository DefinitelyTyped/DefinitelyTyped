// Type definitions for babel-webpack-plugin 0.1
// Project: https://github.com/simlrh/babel-webpack-plugin
// Definitions by: Jed Fox <https://github.com/j-f1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';
import { TransformOptions } from 'babel-core';

export = BabelWebpackPlugin;

declare class BabelWebpackPlugin extends Plugin {
    constructor(options?: BabelWebpackPlugin.Options);
}

declare namespace BabelWebpackPlugin {
    type Matcher = RegExp | string | Array<RegExp | string>;
    interface Options extends TransformOptions {
        test?: Matcher;
        include?: Matcher;
        exclude?: Matcher;
    }
}
