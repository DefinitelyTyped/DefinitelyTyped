// Type definitions for accept 3.1
// Project: https://github.com/hapijs/accept#readme
// Definitions by: feinoujc <https://github.com/feinoujc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export function charset(charsetHeader?: string, preferences?: string[]): string;
export function charsets(charsetHeader?: string): string[];
export function encoding(encodingHeader?: string, preferences?: string[]): string;
export function encodings(encodingHeader?: string): string[];
export function language(languageHeader?: string, preferences?: string[]): string;
export function languages(languageHeader?: string): string[];
export function mediaType(mediaTypeHeader?: string, preferences?: string[]): string;
export function mediaTypes(mediaTypeHeader?: string): string[];
export function parseAll(
    headers: Record<string, string | string[] | undefined>
): {
    charsets: string[];
    encodings: string[];
    languages: string[];
    mediaTypes: string[];
};
