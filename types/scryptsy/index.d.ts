// Type definitions for scryptsy 2.0
// Project: https://github.com/cryptocoinjs/scryptsy
// Definitions by: Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = scryptsy;

declare function scryptsy(key: Buffer | string, salt: Buffer | string, N: number, r: number, p: number, dkLen: number,
                          progressCallback?: (status: { current: number, total: number, percent: number }) => void): Buffer;

declare namespace scryptsy {
    const prototype: {};
}
