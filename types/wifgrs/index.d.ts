// Type definitions for wif 2.0
// Project: https://github.com/Groestlcoin/wifgrs
// Definitions by: Gruve-p <https://github.com/gruve-p>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export interface WIFReturn {
    readonly version: number;
    readonly privateKey: Buffer;
    readonly compressed: boolean;
}

export function decodeRaw(buffer: Buffer, version?: number): WIFReturn;
export function decode(string: string, version?: number): WIFReturn;

export function encodeRaw(
    version: number,
    privateKey: Buffer,
    compressed: boolean
): Buffer;

export function encode(
    version: number,
    privateKey: Buffer,
    compressed: boolean
): string;
