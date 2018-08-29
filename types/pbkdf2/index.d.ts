// Type definitions for pbkdf2 3.0
// Project: https://github.com/crypto-browserify/pbkdf2
// Definitions by: Timon Engelke <https://github.com/timonegk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => void): void;
export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => void): void;
export function pbkdf2Sync(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest?: string): Buffer;
