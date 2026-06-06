import { CompiledRoutine } from "cwise-parser";
import { NdArray } from "ndarray";

declare namespace cwise_compiler {
    interface BlockIndice {
        blockIndices: number;
    }
    interface OffsetArg {
        offset: number[];
        array: number;
    }
    type ArgType = "array" | "offset" | "shape" | "scalar" | "index" | BlockIndice | OffsetArg;
    interface UserArgs {
        args: ArgType[];
        pre: CompiledRoutine;
        body: CompiledRoutine;
        post: CompiledRoutine;
        debug: boolean;
        funcName: string;
        blockSize: number;
        printCode?: boolean | undefined;
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
        blockSize?: number | undefined;
    }
}

declare function cwise_compiler(
    user_args: cwise_compiler.UserArgs,
): (a: NdArray, b: NdArray, ...args: NdArray[]) => NdArray;

export = cwise_compiler;
