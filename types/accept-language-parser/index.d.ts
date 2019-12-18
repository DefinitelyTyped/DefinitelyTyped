// Type definitions for accept-language-parser 1.5
// Project: https://github.com/opentable/accept-language-parser
// Definitions by: Niklas Wulf <https://github.com/kampfgnom>
//                 Wooram Jun <https://github.com/chatoo2412>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// https://github.com/opentable/accept-language-parser/blob/v1.5.0/index.js

export function parse(acceptLanguage: string): Language[];
export function pick<T extends string>(
    supportedLanguages: T[],
    acceptLanguage: string | Language[],
    options?: PickOptions
): T | null;

export interface Language {
    code: string;
    script?: string | null;
    region?: string;
    quality: number;
}

export interface PickOptions {
    loose?: boolean;
}
