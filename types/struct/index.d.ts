// Type definitions for struct 0.0
// Project: https://github.com/xdenser/node-struct#readme
// Definitions by: Ben Allfree <https://github.com/benallfree>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

// tslint:disable-next-line:no-unnecessary-generics
export default function Factory<T>(): Struct<T>;

export class Struct<T> {
    word8(name: string): Struct<T>;
    word8Sle(name: string): Struct<T>;
    word8Sbe(name: string): Struct<T>;
    word16Sle(name: string): Struct<T>;
    word16Sbe(name: string): Struct<T>;
    word16Ule(name: string): Struct<T>;
    word16Ube(name: string): Struct<T>;
    word32Sle(name: string): Struct<T>;
    word32Sbe(name: string): Struct<T>;
    word32Ule(name: string): Struct<T>;
    word32Ube(name: string): Struct<T>;
    word64Sle(name: string): Struct<T>;
    word64Sbe(name: string): Struct<T>;
    word64Ule(name: string): Struct<T>;
    word64Ube(name: string): Struct<T>;
    floatle(name: string): Struct<T>;
    floatbe(name: string): Struct<T>;
    doublele(name: string): Struct<T>;
    doublebe(name: string): Struct<T>;
    chars(name: string, length: number, encoding?: string): Struct<T>;
    charsnt(name: string, length: number, encoding?: string): Struct<T>;
    array(name: string, length: number, type?: string | Struct<T>): Struct<T>;
    struct(name: string, struct: Struct<T>): Struct<T>;
    get(fieldName: string): any;
    set(fieldName: string, value: any): void;
    allocate(): Struct<T>;
    setBuffer(buffer: Buffer, buffLength?: number): void;
    buffer(): Buffer;
    fields: T;
}
