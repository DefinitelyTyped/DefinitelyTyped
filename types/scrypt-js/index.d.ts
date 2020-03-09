// Type definitions for scrypt-js 2.0
// Project: https://github.com/ricmoo/scrypt-js
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
//                 Romain Delamare <https://github.com/alightgoesout>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types= "node" />

declare function scrypt(
    password: Buffer | ReadonlyArray<number> | Uint8Array,
    salt: Buffer | ReadonlyArray<number> | Uint8Array,
    N: number,
    r: number,
    p: number,
    dklen: number,
    callback: (
        error: Error | undefined | null,
        progress: number,
        key?: ReadonlyArray<number>,
    ) => void
): void;

export as namespace scrypt;
export = scrypt;
