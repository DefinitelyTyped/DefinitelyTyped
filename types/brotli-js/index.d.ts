// Type definitions for brotli-js 1.0.2
// Project: https://github.com/ganruip/brotli-js

export function compressArray(buffer: ArrayBuffer, level: number): number[];

export function decompressArray(buffer: number[]): number[];

export as namespace brotli;
