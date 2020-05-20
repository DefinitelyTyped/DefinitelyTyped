// Type definitions for cwise 1.0
// Project: https://github.com/scijs/cwise#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ArgType } from "cwise-compiler";
import * as ndarray from "ndarray";

declare function cwise(a: string | cwise.UserArgs): cwise.Return;

declare namespace cwise {
    type Arg = ndarray | ((row: number, col: number) => number) | number[] | any;
    type Return = (a: ndarray, ...b: Arg[]) => void;
    interface UserArgs {
        args: ArgType[];
        pre?(a: number, ...args: any[]): void;
        body(a: number, ...args: any[]): void;
        post?(a: number, ...args: any[]): void;
        funcName?: string;
        blockSize?: number;
        printCode?: boolean;
    }
}
export = cwise;
