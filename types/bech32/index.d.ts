// Type definitions for bech32 1.1
// Project: https://github.com/bitcoinjs/bech32
// Definitions by: Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function decode(str: string, LIMIT?: number): { prefix: string, words: Buffer };

export function encode(prefix: string, words: Buffer, LIMIT?: number): string;

export function fromWords(words: Buffer): Buffer;

export function toWords(bytes: Buffer): Buffer;
