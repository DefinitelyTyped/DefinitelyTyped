/// <reference types="node"/>

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export default function Factory<T>(): Struct<T>;

export type StructBaseTypes =
    | "word8"
    | "word8Sle"
    | "word8Sbe"
    | "word16Sle"
    | "word16Sbe"
    | "word16Ule"
    | "word16Ube"
    | "word32Sle"
    | "word32Sbe"
    | "word32Ule"
    | "word32Ube"
    | "word64Sle"
    | "word64Sbe"
    | "word64Ule"
    | "word64Ube"
    | "floatle"
    | "floatbe"
    | "doublele"
    | "doublebe";

export type StructCharsTypes = "chars" | "charsnt";

export type StructArrayType = "array";

export type StructTypes =
    | StructBaseTypes
    | StructCharsTypes
    | StructArrayType;

export class Struct<T = any> {
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
    array(
        name: string,
        length: number,
        type: StructTypes | Struct,
        ...args: Array<(string | number | Struct)>
    ): Struct<T>;
    struct(name: string, struct: Struct): Struct<T>;
    get(fieldName: string): any;
    set(fieldName: string, value: any): void;
    allocate(): Struct<T>;
    setBuffer(buffer: Buffer, buffLength?: number): void;
    buffer(): Buffer;
    fields: T;
}
