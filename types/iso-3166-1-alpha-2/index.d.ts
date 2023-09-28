// Type definitions for iso-3166-1-alpha-2 1.0
// Project: https://github.com/georgzoeller/iso-3166-1-alpha-2
// Definitions by: Justus Dietrich <https://github.com/Justus-D>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function getCountry(code: string): string | undefined;
export function getCode(country: string): string | null;
export function getCountries(): string[];
export function getCodes(): string[];
export function getData(): { [code: string]: string | undefined };
