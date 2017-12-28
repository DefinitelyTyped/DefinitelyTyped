// Type definitions for bech32 1.1
// Project: https://github.com/bitcoinjs/bech32
// Definitions by: Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function decode(str: string, LIMIT?: number): { prefix: string, words: number[] };

export function encode(prefix: string, words: number[], LIMIT?: number): string;

export function fromWords(words: number[]): number[];

export function toWords(bytes: Buffer): number[];
