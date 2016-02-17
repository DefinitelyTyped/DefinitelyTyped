// Type definitions for assert and power-assert
// Project: https://github.com/Jxck/assert
// Project: https://github.com/twada/power-assert
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// copy from assert external module in node.d.ts

declare function assert(value:any, message?:string):void;
declare module assert {
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

// duplicate to node.d.ts
// declare module "assert" {
//     export = assert;
// }

// move to power-assert.d.ts. do not use this definition file.
declare module "power-assert" {
    export = assert;
}
