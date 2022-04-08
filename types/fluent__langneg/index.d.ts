// Type definitions for @fluent/langneg 0.3
// Project: http://projectfluent.org
// Definitions by: Mark Weaver <https://github.com/blushingpenguin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface StringMap {
    [id: string]: string;
}

export interface NegotiateLanguageOptions {
    strategy?: 'filtering' | 'matching' | 'lookup';
    defaultLocale?: string;
    likelySubtags?: StringMap;
}

export function negotiateLanguages(
    requestedLocales: ReadonlyArray<string>,
    availableLocales: ReadonlyArray<string>,
    options?: NegotiateLanguageOptions
): string[];

export function acceptedLanguages(
    acceptedLanguages: string
): string[];

export as namespace FluentLangNeg;
