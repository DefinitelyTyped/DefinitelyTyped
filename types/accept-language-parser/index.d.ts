// Type definitions for accept-language-parser 1.4
// Project: https://github.com/opentable/accept-language-parser
// Definitions by: Niklas Wulf <https://github.com/kampfgnom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// https://github.com/opentable/accept-language-parser/blob/v1.4.1/index.js

export function parse(acceptLanguage: string): Language[];
export function pick(supportedLanguages: string[], acceptLanguage: string | Language[]): Language | null;

export interface Language {
    code: string;
    script?: string | null;
    region?: string;
    quality: number;
}
