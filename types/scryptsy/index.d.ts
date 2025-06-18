/// <reference types="node" />

export = scryptsy;

declare function scryptsy(
    key: Buffer | string,
    salt: Buffer | string,
    N: number,
    r: number,
    p: number,
    dkLen: number,
    progressCallback?: (status: { current: number; total: number; percent: number }) => void,
): Buffer;

declare namespace scryptsy {
    const prototype: {};
}
