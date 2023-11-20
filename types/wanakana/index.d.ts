export as namespace wanakana;

export type IMEModes = true | false | "toHiragana" | "toKatakana";

export interface WanakanaOptions {
    useObsoleteKana?: boolean | undefined;
    passRomaji?: boolean | undefined;
    upcaseKatakana?: boolean | undefined;
    IMEMode?: IMEModes | undefined;
    romanization?: "hepburn" | undefined;
    customKanaMapping?: Record<string, string> | undefined;
    customRomajiMapping?: Record<string, string> | undefined;
}

export interface StripOkuriganaOptions {
    leading?: boolean | undefined;
    matchKanji?: string | undefined;
}

export interface TokenizeOptions {
    compact?: boolean | undefined;
    detailed?: boolean | undefined;
}

export const VERSION: string;
export const TO_KANA_METHODS: Record<string, string>;
export const ROMANIZATIONS: Record<string, string>;

export function bind(el: HTMLInputElement | HTMLTextAreaElement, options?: WanakanaOptions): void;
export function unbind(el: HTMLInputElement | HTMLTextAreaElement): void;

export function isJapanese(input: string): boolean;
export function isKana(input: string): boolean;
export function isHiragana(input: string): boolean;
export function isKatakana(input: string): boolean;
export function isKanji(input: string): boolean;
export function isMixed(input: string, options?: { passKanji?: boolean | undefined }): boolean;
export function isRomaji(input: string): boolean;

export function toKana(input: string, options?: WanakanaOptions): string;
export function toHiragana(input: string, options?: WanakanaOptions): string;
export function toKatakana(input: string, options?: WanakanaOptions): string;
export function toRomaji(input: string, options?: WanakanaOptions): string;

export function stripOkurigana(input: string, options?: StripOkuriganaOptions): string;
export function tokenize(input: string, options?: TokenizeOptions): string[];
