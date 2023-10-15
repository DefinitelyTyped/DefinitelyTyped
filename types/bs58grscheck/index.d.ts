// Type definitions for bs58grscheck 2.1
// Project: https://github.com/Groestlcoin/bs58grscheck
// Definitions by: Gruve-p <https://github.com/gruve-p>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare const bs58grscheck: {
    encode(buffer: Buffer | number[] | Uint8Array): string;
    decodeUnsafe(string: string): Buffer | undefined;
    decode(string: string): Buffer;
};

export = bs58grscheck;
