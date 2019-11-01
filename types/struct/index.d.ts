// Type definitions for struct 0.0
// Project: https://github.com/xdenser/node-struct#readme
// Definitions by: Ben Allfree <https://github.com/benallfree>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export default function Factory(): Struct;
export class Struct {
    word8(name: string): Struct;
    word8Sle(name: string): Struct;
    word8Sbe(name: string): Struct;
    word16Sle(name: string): Struct;
    word16Sbe(name: string): Struct;
    word16Ule(name: string): Struct;
    word16Ube(name: string): Struct;
    word32Sle(name: string): Struct;
    word32Sbe(name: string): Struct;
    word32Ule(name: string): Struct;
    word32Ube(name: string): Struct;
    word64Sle(name: string): Struct;
    word64Sbe(name: string): Struct;
    word64Ule(name: string): Struct;
    word64Ube(name: string): Struct;
    floatle(name: string): Struct;
    floatbe(name: string): Struct;
    doublele(name: string): Struct;
    doublebe(name: string): Struct;
    chars(name: string, length: number, encoding?: string): Struct;
    charsnt(name: string, length: number, encoding?: string): Struct;
    array(name: string, length: number, type?: string | Struct): Struct;
    struct(name: string, struct: Struct): Struct;
    get(fieldName: string): any;
    set(fieldName: string, value: any): void;
    allocate(): Struct;
    setBuffer(buffer: Buffer, buffLength?: number): void;
    buffer(): Buffer;
    fields: { [key: string]: any };
}
