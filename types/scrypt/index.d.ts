// Type definitions for scrypt 6.0
// Project: https://github.com/barrysteyn/node-scrypt
// Definitions by: WhiteAbeLincoln <https://github.com/WhiteAbeLincoln>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Params {
  N: number;
  r: number;
  p: number;
}

export function params(maxtime: number, maxmem?: number, maxmemfrac?: number): Promise<Params>;
export function params(maxtime: number, cb: (err: Error | null, obj: Params) => void): void;
export function params(maxtime: number, maxmem: number, cb: (err: Error | null, obj: Params) => void): void;
export function params(maxtime: number, maxmem: number, maxmemfrac: number, cb: (err: Error | null, obj: Params) => void): void;
export function paramsSync(maxtime: number, maxmem?: number, maxmemfrac?: number): Params;

export function kdf(key: string | Buffer, paramsObject: Params): Promise<Buffer>;
export function kdf(key: string | Buffer, paramsObject: Params, cb: (err: Error | null, obj: Buffer) => void): void;
export function kdfSync(key: string | Buffer, paramsObject: Params): Buffer;

export function verifyKdf(kdf: Buffer, key: string | Buffer): Promise<boolean>;
export function verifyKdf(kdf: Buffer, key: string | Buffer, cb: (err: Error | null, obj: boolean) => void): void;
export function verifyKdfSync(kdf: Buffer, key: string | Buffer): boolean;

export function hash(key: string | Buffer, params: Params, outputLength: number, salt: string | Buffer): Promise<Buffer>;
export function hash(key: string | Buffer, params: Params, outputLength: number, salt: string | Buffer, cb: (err: Error | null, obj: Buffer) => void): void;
export function hashSync(key: string | Buffer, params: Params, outputLength: number, salt: string | Buffer): Buffer;
