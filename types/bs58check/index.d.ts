/// <reference types="node" />

declare const bs58check: {
    encode(buffer: Buffer | number[] | Uint8Array): string;
    decodeUnsafe(string: string): Buffer | undefined;
    decode(string: string): Buffer;
};

export = bs58check;
