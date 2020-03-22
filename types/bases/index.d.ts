// Type definitions for bases 0.2.1
// Project: https://github.com/aseemk/bases.js
// Definitions by: Hari Krishna <https://github.com/harikv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function toAlphabet(num: number, alphabet: string): string;

export function fromAlphabet(str: string, alphabet: string): number;

export function toBase(num: number, base: number): string;

export function fromBase(str: string, base: number): number;

export let KNOWN_ALPHABETS: any;

export let NUMERALS: string;

export let LETTERS_LOWERCASE: string;

export let LETTERS_UPPERCASE: string;
