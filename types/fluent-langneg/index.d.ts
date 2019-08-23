// Type definitions for fluent-langneg 0.1
// Project: http://projectfluent.io, https://projectfluent.org
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LanguageNegotiationOptions {
    strategy?: 'filtering' | 'matching' | 'lookup';
    defaultLocale?: string;
}

export function negotiateLanguages(requestedLocales: ReadonlyArray<string>, availableLocales: ReadonlyArray<string>, options?: LanguageNegotiationOptions): string[];
