// Type definitions for hard-source-webpack-plugin 1.0
// Project: https://github.com/mzgoddard/hard-source-webpack-plugin#readme
// Definitions by: woitechen <https://github.com/woitechen>
//                 Yama-Tomo <https://github.com/Yama-Tomo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as webpack from 'webpack';
import { ForkOptions, ChildProcess } from 'child_process';

declare class hard_source_webpack_plugin {
    constructor(options?: Options);
    apply(...args: any[]): void;
}

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

declare namespace hard_source_webpack_plugin {
    class ExcludeModulePlugin {
        constructor(options: ExcludeModulePlugin.Option | ExcludeModulePlugin.Option[])
        apply(compiler: webpack.Compiler): void;
    }

    namespace ExcludeModulePlugin {
        interface Option {
            test: TestElement;
            include?: TestElement;
            exclude?: TestElement;
        }

        type TestElement = RegExp | string | ((source: string) => boolean) | Option[];
    }

    class HardSourceLevelDbSerializerPlugin {
        apply(compiler: webpack.Compiler): void;
    }

    class LevelDbSerializerPlugin {
        apply(compiler: webpack.Compiler): void;
    }

    class SerializerAppend2Plugin {
        apply(compiler: webpack.Compiler): void;
    }

    class SerializerAppendPlugin {
        apply(compiler: webpack.Compiler): void;
    }

    class SerializerCacachePlugin {
        apply(compiler: webpack.Compiler): void;
    }

    class SerializerJsonPlugin {
        apply(compiler: webpack.Compiler): void;
    }

    class ParallelModulePlugin {
        constructor(options: ParallelModulePlugin.Options)
        apply(compiler: webpack.Compiler): void;
    }

    namespace ParallelModulePlugin {
        // NOTE: not using `Parameters` and `ReturnType` on purpose to compatibility. better of code this below.
        //     type forkFn = (...args: Parameters<typeof fork>) => ReturnType<typeof fork>
        // this code working on supported versions of `infer` keyword (version 2.8 higher.
        type forkFn = (modulePath: string, args?: ReadonlyArray<string>, options?: ForkOptions) => ChildProcess;
        interface Options {
            fork?: (fork: forkFn, compiler: webpack.Compiler, webpackBin: string) => void;
            numWorkers?: number | (() => number);
            minModules?: number;
        }
    }
}

export = hard_source_webpack_plugin;
