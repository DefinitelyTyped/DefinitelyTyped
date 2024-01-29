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
    compressed: boolean,
): Buffer;

export function encode(
    version: number,
    privateKey: Buffer,
    compressed: boolean,
): string;
