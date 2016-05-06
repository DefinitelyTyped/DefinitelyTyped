// Type definitions for google-closure-compiler
// Project: https://github.com/chadkillingsworth/closure-compiler-npm
// Definitions by: Evan Martin <http://neugierig.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

// Note: the types seen in the JSDoc are wrong:
//   https://github.com/ChadKillingsworth/closure-compiler-npm/issues/21
// Be careful to read the code when choosing types.

declare module 'google-closure-compiler' {
    import * as child_process from 'child_process';

    // The "json_streams" compiler flag lets the compiler accept/produce
    // arrays of JSON objects in this shape for input/output.
    interface JSONStreamFile {
        path: string;
        src: string;
        srcmap?: string;  // TODO(evan): pass through source maps.
    }

    interface Compiler {
        javaPath: string;
        logger: (...args: any[]) => void;
        spawnOptions: {[key:string]: string};

        run(callback?: (exitCode: number, stdout: string, stderr: string) => void):
        child_process.ChildProcess;
        
        getFullCommand(): string;
    }
    type CompileOption = string | boolean;
    type CompileOptions = string[] | {[key: string]: (CompileOption|CompileOption[])};
    var compiler: {
        new (opts: (CompileOptions|string[]),
             extraCommandArgs?: string[]): Compiler;

        JAR_PATH: string;
        COMPILER_PATH: string;
        CONTRIB_PATH: string;
    };
}
