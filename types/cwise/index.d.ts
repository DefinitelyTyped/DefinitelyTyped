import { ArgType } from "cwise-compiler";
import { NdArray } from "ndarray";

declare function cwise(a: string | cwise.UserArgs): cwise.Return;

declare namespace cwise {
    type Arg = NdArray | ((row: number, col: number) => number) | number[] | any;
    type Return = (a: NdArray, ...b: Arg[]) => void;
    interface UserArgs {
        args: ArgType[];
        pre?(a: number, ...args: any[]): void;
        body(a: number, ...args: any[]): void;
        post?(a: number, ...args: any[]): void;
        funcName?: string | undefined;
        blockSize?: number | undefined;
        printCode?: boolean | undefined;
    }
}
export = cwise;
