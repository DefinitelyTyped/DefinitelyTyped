// Type definitions for hard-source-webpack-plugin 0.9
// Project: https://github.com/mzgoddard/hard-source-webpack-plugin#readme
// Definitions by: woitechen <https://github.com/woitechen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'hard-source-webpack-plugin' {
    import * as webpack from 'webpack';

    class hard_source_webpack_plugin {
        constructor(options?: Options);
    }

    namespace hard_source_webpack_plugin { }

    interface Options {
        cacheDirectory?: string;
        configHash?: (webpackConfig?: webpack.Configuration) => string;
        environmentHash?: {
            root: string;
            directories: string[];
            files: string[];
        }
        info?: {
            mode: 'none' | 'test';
            level: 'debug' | 'log' | 'info' | 'warn' | 'error';
        }
        cachePrune?: {
            maxAge: number;
            sizeThreshold: number;
        }
    }

    export = hard_source_webpack_plugin;
}
