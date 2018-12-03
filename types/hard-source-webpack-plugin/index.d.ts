// Type definitions for hard-source-webpack-plugin 1.0
// Project: https://github.com/mzgoddard/hard-source-webpack-plugin#readme
// Definitions by: woitechen <https://github.com/woitechen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';

declare class hard_source_webpack_plugin {
    constructor(options?: Options);
    apply(...args: any[]): void;
}

declare namespace hard_source_webpack_plugin { }

interface Options {
    cacheDirectory?: string;
    configHash?: string | ((webpackConfig?: webpack.Configuration) => string);
    environmentHash?: {
        root: string;
        directories: string[];
        files: string[];
    };
    info?: {
        mode: 'none' | 'test';
        level: 'debug' | 'log' | 'info' | 'warn' | 'error';
    };
    cachePrune?: {
        maxAge: number;
        sizeThreshold: number;
    };
}

export = hard_source_webpack_plugin;
