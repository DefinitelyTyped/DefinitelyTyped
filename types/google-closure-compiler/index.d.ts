/// <reference types="node" />

// Note: the types seen in the JSDoc are wrong:
//   https://github.com/ChadKillingsworth/closure-compiler-npm/issues/21
// Be careful to read the code when choosing types.

import * as child_process from "child_process";

// The "json_streams" compiler flag lets the compiler accept/produce
// arrays of JSON objects in this shape for input/output.
interface JSONStreamFile {
    path: string;
    src: string;
    srcmap?: string | undefined; // TODO(evan): pass through source maps.
}

interface Compiler {
    javaPath: string;
    logger: (...args: any[]) => void;
    spawnOptions: { [key: string]: string };

    run(callback?: (exitCode: number, stdout: string, stderr: string) => void): child_process.ChildProcess;

    getFullCommand(): string;
}

type CompileOption = string | boolean;
type CompileOptions = string[] | { [key: string]: CompileOption | CompileOption[] };
export var compiler: {
    new(opts: CompileOptions | string[], extraCommandArgs?: string[]): Compiler;

    JAR_PATH: string;
    COMPILER_PATH: string;
    CONTRIB_PATH: string;
};

interface GulpInitOptions {
    extraArguments?: string[];
}
type LogFunction = (message: string) => void;
interface GulpPluginOptions {
    streamMode?: string;
    logger?: LogFunction | { warn: LogFunction };
    pluginName?: string;
    requireStreamInput?: boolean;
    platform?: string | string[];
}
type Transform = import("stream").Transform;
interface CompilationStream extends Transform {
    platform: string;
    src(): this;
}
export function gulp(
    initOptions?: GulpInitOptions,
): (opts: CompileOptions, pluginOpts?: GulpPluginOptions) => CompilationStream;

// Creating PartialIGrunt as a sparse replica of import("grunt").IGrunt, because there's no reason to add the
// full grunt types package as a hard dependency of google-closure-compiler. The actual IGrunt will find its
// way into these type definitions when it is passed in as a generic parameter to the grunt() function below,
// and that will ensure that type-safety is maintained even in the face of a Grunt API change.
interface PartialIGrunt {
    registerMultiTask(
        taskName: string,
        taskDescription: string,
        taskFunction: (this: any, ...args: any[]) => void,
    ): void;
    file: {
        write(filepath: string, contents: string | Buffer): void;
    };
    log: {
        ok(msg: string): any;
        warn(msg: string): any;
    };
    fail: {
        warn(error: string): void;
    };
}
type GruntTaskFunction<IGrunt extends PartialIGrunt> = Parameters<IGrunt["registerMultiTask"]>[2];
type GruntPluginOptions = string[] | {
    platform?: string | string[];
    extraArguments?: string[];
    max_parallel_compilations?: number;
    /** @deprecated */
    compile_in_batches?: number;
};

export function grunt<IGrunt extends PartialIGrunt>(
    grunt: IGrunt,
    pluginOptions?: GruntPluginOptions,
): GruntTaskFunction<IGrunt>;
