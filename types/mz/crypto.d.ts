// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>, Ron Buckton <https://github.com/rbuckton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="node" />

import * as crypto from "crypto";
export * from "crypto";

export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest?: string): Promise<Buffer>;

export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
export function randomBytes(size: number): Promise<Buffer>;

export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
export function pseudoRandomBytes(size: number): Promise<Buffer>;