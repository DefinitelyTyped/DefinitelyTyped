// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/crypto.d.ts

import { BinaryLike } from "crypto";
export * from "crypto";

export function pbkdf2(
    password: BinaryLike,
    salt: BinaryLike,
    iterations: number,
    keylen: number,
    digest: string,
    callback: (err: Error | null, derivedKey: Buffer) => any
): void;
export function pbkdf2(
    password: BinaryLike,
    salt: BinaryLike,
    iterations: number,
    keylen: number,
    digest: string
): Promise<Buffer>;

export function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
export function randomBytes(size: number): Promise<Buffer>;

export function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
export function pseudoRandomBytes(size: number): Promise<Buffer>;
