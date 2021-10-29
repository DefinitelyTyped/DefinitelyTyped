// Type definitions for struct 0.0
// Project: https://github.com/xdenser/node-struct#readme
// Definitions by: Ben Allfree <https://github.com/benallfree>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

// tslint:disable-next-line:no-unnecessary-generics
export default function Factory<T>(): Struct<T>;

export type StructBaseTypes =
    | 'word8'
    | 'word8Sle'
    | 'word8Sbe'
    | 'word16Sle'
    | 'word16Sbe'
    | 'word16Ule'
    | 'word16Ube'
    | 'word32Sle'
    | 'word32Sbe'
    | 'word32Ule'
    | 'word32Ube'
    | 'word64Sle'
    | 'word64Sbe'
    | 'word64Ule'
    | 'word64Ube'
    | 'floatle'
    | 'floatbe'
    | 'doublele'
    | 'doublebe';

export type StructCharsTypes = 'chars' | 'charsnt';

export type StructArrayType = 'array';

export type StructTypes =
    | StructBaseTypes
    | StructCharsTypes
    | StructArrayType;

export class Struct<T = any> {
    word8<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word8Sle<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word8Sbe<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word16Sle<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word16Sbe<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word16Ule<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word16Ube<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word32Sle<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word32Sbe<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word32Ule<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word32Ube<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word64Sle<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word64Sbe<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word64Ule<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    word64Ube<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    floatle<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    floatbe<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    doublele<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    doublebe<N extends string>(name: N): Struct<T & { [K in N]: number }>;
    chars<N extends string>(name: N, length: number, encoding?: string): Struct<T & { [K in N]: string }>;
    charsnt<N extends string>(name: N, length: number, encoding?: string): Struct<T & { [K in N]: string }>;
    array<N extends string, T2>(
        name: N,
        length: number,
        ...args: Array<any>
    ): Struct<T & { [K in N]: T2 }>;
    struct<N extends string, T2>(name: N, struct: Struct<T2>): Struct<T & { [K in N]: T2 }>;
    get(fieldName: keyof T): T[typeof fieldName];
    set(fieldName: keyof T, value: T[typeof fieldName]): void;
    allocate(): Struct<T>;
    setBuffer(buffer: Buffer, buffLength?: number): void;
    buffer(): Buffer;
    fields: T;
}
