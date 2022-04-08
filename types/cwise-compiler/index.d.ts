// Type definitions for cwise-compiler 1.1
// Project: https://github.com/scijs/cwise-compiler
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CompiledRoutine } from 'cwise-parser';
import * as ndarray from 'ndarray';

declare namespace cwise_compiler {
    interface BlockIndice {
        blockIndices: number;
    }
    interface OffsetArg {
        offset: number[];
        array: number;
    }
    type ArgType = 'array' | 'offset' | 'shape' | 'scalar' | 'index' | BlockIndice | OffsetArg;
    interface UserArgs {
        args: ArgType[];
        pre: CompiledRoutine;
        body: CompiledRoutine;
        post: CompiledRoutine;
        debug: boolean;
        funcName: string;
        blockSize: number;
        printCode?: boolean;
    }
    interface Procedure {
        argTypes: ArgType[];
        shimArgs: string[];
        arrayArgs: number[];
        arrayBlockIndices: number[];
        scalarArgs: number[];
        offsetArgs: OffsetArg[];
        offsetArgIndex: number[];
        indexArgs: number[];
        shapeArgs: number[];
        funcName: string;
        pre: CompiledRoutine;
        body: CompiledRoutine;
        post: CompiledRoutine;
        debug: boolean;
        blockSize?: number;
    }
}

declare function cwise_compiler(user_args: cwise_compiler.UserArgs): (a: ndarray, b: ndarray, ...args: ndarray[]) => ndarray;

export = cwise_compiler;
