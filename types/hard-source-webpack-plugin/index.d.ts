import { ChildProcess, ForkOptions } from "child_process";
import * as webpack from "webpack";

declare class hard_source_webpack_plugin {
    constructor(options?: Options);
    apply(...args: any[]): void;
}

interface Options {
    cacheDirectory?: string | undefined;
    configHash?: string | ((webpackConfig?: webpack.Configuration) => string) | undefined;
    environmentHash?: {
        root: string;
        directories: string[];
        files: string[];
    } | undefined;
    info?: {
        mode: "none" | "test";
        level: "debug" | "log" | "info" | "warn" | "error";
    } | undefined;
    cachePrune?: {
        maxAge: number;
        sizeThreshold: number;
    } | undefined;
}

declare namespace hard_source_webpack_plugin {
    class ExcludeModulePlugin {
        constructor(options: ExcludeModulePlugin.Option | ExcludeModulePlugin.Option[]);
        apply(compiler: webpack.Compiler): void;
    }

    namespace ExcludeModulePlugin {
        interface Option {
            test: TestElement;
            include?: TestElement | undefined;
            exclude?: TestElement | undefined;
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
        constructor(options: ParallelModulePlugin.Options);
        apply(compiler: webpack.Compiler): void;
    }

    namespace ParallelModulePlugin {
        // NOTE: not using `Parameters` and `ReturnType` on purpose to compatibility. better of code this below.
        //     type forkFn = (...args: Parameters<typeof fork>) => ReturnType<typeof fork>
        // this code working on supported versions of `infer` keyword (version 2.8 higher.
        type forkFn = (modulePath: string, args?: ReadonlyArray<string>, options?: ForkOptions) => ChildProcess;
        interface Options {
            fork?: ((fork: forkFn, compiler: webpack.Compiler, webpackBin: string) => void) | undefined;
            numWorkers?: number | (() => number) | undefined;
            minModules?: number | undefined;
        }
    }
}

export = hard_source_webpack_plugin;
