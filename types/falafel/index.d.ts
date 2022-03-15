// Type definitions for falafel 2.2
// Project: https://github.com/substack/node-falafel
// Definitions by: Przemysław Struciński <https://github.com/delprzemo>
//                 leumasme <https://github.com/leumasme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
/// <reference types="node" />
interface OptionsObject {
    parser: any;
    [key: number]: any;
    [key: string]: any;
}
interface FullOptionsObject extends OptionsObject {
    src: string;
}
type WalkerFunction = (nodeOrChild: any, nodeOrNull: any) => void;
interface Result {
    chunks: any[];
    toString: () => string;
    inspect: () => string;
}
declare function falafel(src: string | Buffer | FullOptionsObject, fn: WalkerFunction): Result;
declare function falafel(src: string | Buffer, opts: OptionsObject, fn: WalkerFunction): Result;
export = falafel;
