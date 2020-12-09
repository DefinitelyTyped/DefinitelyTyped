// Type definitions for greek-utils 1.2
// Project: https://github.com/vbarzokas/greek-utils
// Definitions by: Dimitris Kirtsios <https://github.com/dimkirt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function sanitizeDiacritics(text: string, ignore?: string): string;

export function toGreek(text: string, ignore?: string): string;

export function toGreeklish(text: string, ignore?: string): string;

export function toPhoneticLatin(text: string, ignore?: string): string;

export function toTransliteratedLatin(text: string, ignore?: string): string;
