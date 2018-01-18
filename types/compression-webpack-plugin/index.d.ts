// Type definitions for compression-webpack-plugin 0.4
// Project: https://github.com/webpack-contrib/compression-webpack-plugin
// Definitions by: Anton Kandybo <https://github.com/dublicator>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

export = CompressionPlugin;

declare class CompressionPlugin extends Plugin {
    constructor(options?: CompressionPlugin.Options);
}

declare namespace CompressionPlugin {
    interface Options {
        asset?: string;
        algorithm?: string;
        cache?: boolean | string;
        test?: RegExp | RegExp[];
        regExp?: RegExp | RegExp[];
        threshold?: number;
        minRatio?: number;

        // zopfli options
        verbose?: boolean;
        verbose_more?: boolean;
        numiterations?: number;
        blocksplitting?: boolean;
        blocksplittinglast?: boolean;
        blocksplittingmax?: number;

        // zlib options
        level?: number;
        flush?: number;
        chunkSize?: number;
        windowBits?: number;
        memLevel?: number;
        strategy?: number;
        dictionary?: any;
    }
}
