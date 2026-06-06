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
