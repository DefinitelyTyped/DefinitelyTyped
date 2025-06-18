// Type definitions for lz4js 0.2.0
// Project: https://github.com/Benzinga/lz4js

declare function xxh32(seed: number, src: number | number[], index: number, len: number): number;

export { xxh32 as hash };
