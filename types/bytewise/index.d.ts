/// <reference types= "node" />

interface Bytewise {
    encode: (value: any) => Buffer;
    decode: (value: Buffer) => any;
    [k: string]: any;
}

declare const bytewise: Bytewise;
export = bytewise;
