// Type definitions for language-name-map 0.3
// Project: https://github.com/dejurin/language-name-map
// Definitions by: Hakan Güçlü <https://github.com/CreatorX64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function getLangNameFromCode(langCode: string): { name: string; native: string; dir: 'ltr' | 'rtl' } | undefined;

export function getLangCodeList(): string[];

export const languageNameMap: { [key: string]: { name: string; native: string; dir: 0 | 1 } };
