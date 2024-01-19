/// <reference types="node" />

export type Algorithm = "arc4" | "rc4+" | "rc4a" | "vmpc"

type AlgoToClass<T extends Algorithm> = T extends "arc4"? Arc4 : T extends "rc4+"? Rc4p : T extends "rc4a"? Rc4a : T extends "vmpc"? Vmpc : never

export default function arc4<const T extends Algorithm>(
    algorithm: T,
    password: string | any[] | Buffer,
    lodash?: boolean
): AlgoToClass<T>

declare function normal<const T extends Algorithm>(
    algorithm: T,
    password: string | any[] | Buffer
): AlgoToClass<T>

declare function lodash<const T extends Algorithm>(
    algorithm: T,
    password: string | any[] | Buffer
): AlgoToClass<T>

declare class Arc4 {
    constructor(key: string | any[] | Buffer)
    change(key: string | any[] | Buffer): void
    codeString(str: string): string
    encodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    decodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    encodeArray(arr: any[]): any[]
    decodeArray(arr: any[]): any[]
    encodeBuffer(buf: Buffer): Buffer
    decodeBuffer(buf: Buffer): Buffer
    encode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
    decode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
}

declare class Rc4p {
    constructor(key: string | any[] | Buffer)
    change(key: string | any[] | Buffer): void
    codeString(str: string): string
    encodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    decodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    encodeArray(arr: any[]): any[]
    decodeArray(arr: any[]): any[]
    encodeBuffer(buf: Buffer): Buffer
    decodeBuffer(buf: Buffer): Buffer
    encode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
    decode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
}

declare class Rc4a {
    constructor(key: string | any[] | Buffer)
    change(key: string | any[] | Buffer): void
    codeString(str: string): string
    encodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    decodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    encodeArray(arr: any[]): any[]
    decodeArray(arr: any[]): any[]
    encodeBuffer(buf: Buffer): Buffer
    decodeBuffer(buf: Buffer): Buffer
    encode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
    decode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
}

declare class Vmpc {
    constructor(key: string | any[] | Buffer)
    change(key: string | any[] | Buffer): void
    codeString(str: string): string
    encodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    decodeString(str: string, input_encoding?: BufferEncoding, output_encoding?: BufferEncoding): string
    encodeArray(arr: any[]): any[]
    decodeArray(arr: any[]): any[]
    encodeBuffer(buf: Buffer): Buffer
    decodeBuffer(buf: Buffer): Buffer
    encode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
    decode(
        boh: string | any[] | Buffer,
        input_encoding?: BufferEncoding,
        output_encoding?: BufferEncoding
    ): string | any[] | Buffer
}

export {
    normal,
    lodash
}
