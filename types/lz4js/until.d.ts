// Type definitions for lz4js 0.2.0
// Project: https://github.com/Benzinga/lz4js

export function imul(a: number, b: number): number;

export function hashU32(a: number): number;

export function hashU64(b: number, n: number): number;

export function readU32(b: number, n: number): number;

export function writeU32(b: number, n: number, x: number): void;
