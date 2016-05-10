// Type definitions for assert
// Project: https://github.com/defunctzombie/commonjs-assert
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definitions for commonjs-assert match that of node.js' assert module,
// but commonjs-assert is intended to be used as an independent module,
// for instance when making a stand-alone site or app that doesn't have
// access to node modules. For that reason, these definitions define a
// "assert" module. This will conflict with node.d.ts and other assert
// modules such as "power-assert", but a project should realistically
// only be using one of these at a time.

declare function assert(value:any, message?:string):void;
declare namespace assert {
    export class AssertionError implements Error {
        name:string;
        message:string;
        actual:any;
        expected:any;
        operator:string;
        generatedMessage:boolean;

        constructor(options?:{message?: string; actual?: any; expected?: any; operator?: string; stackStartFunction?: Function});
    }

    export function fail(actual?:any, expected?:any, message?:string, operator?:string):void;

    export function ok(value:any, message?:string):void;

    export function equal(actual:any, expected:any, message?:string):void;

    export function notEqual(actual:any, expected:any, message?:string):void;

    export function deepEqual(actual:any, expected:any, message?:string):void;

    export function notDeepEqual(acutal:any, expected:any, message?:string):void;

    export function strictEqual(actual:any, expected:any, message?:string):void;

    export function notStrictEqual(actual:any, expected:any, message?:string):void;

    export var throws:{
        (block:Function, message?:string): void;
        (block:Function, error:Function, message?:string): void;
        (block:Function, error:RegExp, message?:string): void;
        (block:Function, error:(err:any) => boolean, message?:string): void;
    };

    export var doesNotThrow:{
        (block:Function, message?:string): void;
        (block:Function, error:Function, message?:string): void;
        (block:Function, error:RegExp, message?:string): void;
        (block:Function, error:(err:any) => boolean, message?:string): void;
    };

    export function ifError(value:any):void;
}

declare module "assert" {
    export = assert;
}
