// Type definitions for uuid-1345 0.99
// Project: https://github.com/scravy/uuid-1345
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
///<reference path="../node/node" />
declare module "uuid-1345" {
    export interface UUID {
        version: string;
        variant: string;
        toString(): string;
        toBuffer(): Buffer;
    }

    type UuidTypes = string|Buffer|UUID;
    interface ASCIICallback {
        (error: string, result: string):void;
    }

    interface BinaryCallback {
        (error: string, result: Buffer):void;
    }

    interface ObjectCallback {
        (error: string, result: UUID):void;
    }

    export var namespace: {
        dns: UUID
        url: UUID,
        oid: UUID,
        x500: UUID
    };

    export function check(uuid:string|Buffer): {version?:number, variant: string, format: string};
    export function parse(uuid:string): Buffer;
    export function stringify(uuid:Buffer): string;

    export function v1():string;
    export function v1(options:{mac?:boolean}):string;
    export function v1(options:{encoding:'ascii', mac?:boolean}):string;
    export function v1(options:{encoding:'binary', mac?:boolean}):Buffer;
    export function v1(options:{encoding:'object', mac?:boolean}):UUID;
    export function v1(options:{mac?:boolean}, callback:ASCIICallback):void;
    export function v1(options:{encoding:'ascii', mac?:boolean}, callback:ASCIICallback):void;
    export function v1(options:{encoding:'binary', mac?:boolean}, callback:BinaryCallback):void;
    export function v1(options:{encoding:'object', mac?:boolean}, callback:ObjectCallback):void;
    export function v1(callback:ASCIICallback):void;

    export function v3(options:{namespace:UuidTypes, name: string}):string;
    export function v3(options:{encoding:'ascii', namespace:UuidTypes, name: string}):string;
    export function v3(options:{encoding:'binary', namespace:UuidTypes, name: string}):Buffer;
    export function v3(options:{encoding:'object', namespace:UuidTypes, name: string}):UUID;
    export function v3(options:{namespace:UuidTypes, name: string}, callback:ASCIICallback):void;
    export function v3(options:{encoding:'ascii', namespace:UuidTypes, name: string}, callback:ASCIICallback):void;
    export function v3(options:{encoding:'binary', namespace:UuidTypes, name: string}, callback:BinaryCallback):void;
    export function v3(options:{encoding:'object', namespace:UuidTypes, name: string}, callback:ObjectCallback):void;

    export function v4():string;
    export function v4(options:{encoding:'ascii'}):string;
    export function v4(options:{encoding:'binary'}):Buffer;
    export function v4(options:{encoding:'object'}):UUID;
    export function v4(options:{encoding:'ascii'}, callback:ASCIICallback):void;
    export function v4(options:{encoding:'binary'}, callback:BinaryCallback):void;
    export function v4(options:{encoding:'object'}, callback:ObjectCallback):void;
    export function v4(callback:ASCIICallback):void;

    export function v4fast():string;
    export function v4fast(options:{encoding:'ascii'}):string;
    export function v4fast(options:{encoding:'binary'}):Buffer;
    export function v4fast(options:{encoding:'object'}):UUID;
    export function v4fast(options:{encoding:'ascii'}, callback:ASCIICallback):void;
    export function v4fast(options:{encoding:'binary'}, callback:BinaryCallback):void;
    export function v4fast(options:{encoding:'object'}, callback:ObjectCallback):void;
    export function v4fast(callback:ASCIICallback):void;

    export function v5(options:{namespace:UuidTypes, name: string}):string;
    export function v5(options:{encoding:'ascii', namespace:UuidTypes, name: string}):string;
    export function v5(options:{encoding:'binary', namespace:UuidTypes, name: string}):Buffer;
    export function v5(options:{encoding:'object', namespace:UuidTypes, name: string}):UUID;
    export function v5(options:{namespace:UuidTypes, name: string}, callback:ASCIICallback):void;
    export function v5(options:{encoding:'ascii', namespace:UuidTypes, name: string}, callback:ASCIICallback):void;
    export function v5(options:{encoding:'binary', namespace:UuidTypes, name: string}, callback:BinaryCallback):void;
    export function v5(options:{encoding:'object', namespace:UuidTypes, name: string}, callback:ObjectCallback):void;
}
