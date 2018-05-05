// Type definitions for sw-precache-webpack-plugin 0.11
// Project: https://github.com/goldhand/sw-precache-webpack-plugin#readme
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Options as SwPrecacheOptions } from 'sw-precache';
import { Plugin } from 'webpack';

declare namespace SWPrecacheWebpackPlugin {
    interface Options extends SwPrecacheOptions {
        filename?: string;
        filepath?: string;
        staticFileGlobsIgnorePatterns?: RegExp[];
        mergeStaticsConfig?: boolean;
        minify?: boolean;
    }
}

declare class SWPrecacheWebpackPlugin extends Plugin {
    constructor(options?: SWPrecacheWebpackPlugin.Options);
}

export = SWPrecacheWebpackPlugin;
