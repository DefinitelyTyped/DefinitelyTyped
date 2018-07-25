// Type definitions for coinstring 2.3
// Project: https://github.com/cryptocoinjs/coinstring
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types= "node" />

export function createDecoder(version: number): (base58str: string, version?: number | Buffer) => Buffer;
export function createEncoder(version: number): (payload: Buffer | number[] | Uint8Array, version?: number | Buffer) => string;
export function createValidator(version: number): (base58str: string, version?: number | Buffer) => boolean;
export function decode(base58str: string, version?: number | Buffer): Buffer;
export function encode(payload: Buffer | number[] | Uint8Array, version?: number| Buffer): string;
export function isValid(base58str: string, version?: number | Buffer): boolean;
