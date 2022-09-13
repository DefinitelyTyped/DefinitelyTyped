// Type definitions for bs58check 2.1
// Project: https://github.com/bitcoinjs/bs58check
// Definitions by: Andrey Sakharov <https://github.com/muturgan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare const bs58check: {
    encode(buffer: Buffer | number[] | Uint8Array): string;
    decodeUnsafe(string: string): Buffer | undefined;
    decode(string: string): Buffer;
};

export = bs58check;
