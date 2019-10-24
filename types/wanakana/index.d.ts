// Type definitions for wanakana 4.0
// Project: https://github.com/WaniKani/WanaKana
// Definitions by: Ross Hendry <https://github.com/chooban>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
export type IMEModes = true|false|"toHiragana"|"toKatakana";

export interface WanakanaOptions {
    useObsoleteKana?: boolean;
    passRomaji?: boolean;
    upcaseKatakana?: boolean;
    IMEMode?: IMEModes;
    romanization?: "hepburn";
    customKanaMapping?: Record<string, string>;
    customRomajiMapping?: Record<string, string>;
}

export interface StripOkuriganaOptions {
    leading?: boolean;
    matchKanji?: string;
}

export interface TokenizeOptions {
    compact?: boolean;
    detailed?: boolean;
}

export function bind(el: HTMLElement, options?: WanakanaOptions): void;
export function unbind(el: HTMLElement): void;

export function isJapanese(input: string): boolean;
export function isKana(input: string): boolean;
export function isHiragana(input: string): boolean;
export function isKatakana(input: string): boolean;
export function isKanji(input: string): boolean;
export function isRomaji(input: string): boolean;

export function toKana(input: string, options?: WanakanaOptions): string;
export function toHiragana(input: string, options?: WanakanaOptions): string;
export function toKatakana(input: string, options?: WanakanaOptions): string;
export function toRomaji(input: string, options?: WanakanaOptions): string;

export function stripOkurigana(input: string, options?: StripOkuriganaOptions): string;
export function tokenize(input: string, options?: TokenizeOptions): string[];
