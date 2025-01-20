/// <reference types="node" />

declare const bs58grscheck: {
    encode(buffer: Buffer | number[] | Uint8Array): string;
    decodeUnsafe(string: string): Buffer | undefined;
    decode(string: string): Buffer;
};

export = bs58grscheck;
