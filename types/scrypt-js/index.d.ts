// Type definitions for scrypt-js 2.0
// Project: https://github.com/ricmoo/scrypt-js
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types= "node" />

declare function scrypt(
    password: Buffer,
    salt: Buffer,
    N: number,
    r: number,
    p: number,
    dklen: number,
    callback: (
        error: Error | undefined | null,
        progress: number,
        key?: string,
    ) => void
): void;

export = scrypt;
