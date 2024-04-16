// Type definitions for lz4js 0.2.0
// Project: https://github.com/Benzinga/lz4js

export function compressBound(n: number): number;

export function decompressBound(src: Uint8Array | number[]): void;

export function compress(src: Uint8Array | number[], maxSize?: number): Uint8Array;

export function decompress(src: Uint8Array | number[], maxSize?: number): Uint8Array;

export function compressBlock(
    src: Uint8Array | number[],
    dst: Uint8Array | number[],
    sIndex: number,
    sLength: number,
    dIndex: number,
): number;

export function decompressBlock(
    src: Uint8Array | number[],
    dst: Uint8Array | number[],
    sIndex: number,
    sLength: number,
    dIndex: number,
): number;

export function compressFrame(src: Uint8Array | number[], dst: Uint8Array): number;

export function makeBuffer(size: number): number;
