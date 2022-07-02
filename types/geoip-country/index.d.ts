// Type definitions for geoip-country 4.0
// Project: https://github.com/sapics/geoip-country
// Definitions by: Jesse Chan <https://github.com/jesec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Lookup {
    /** [ <low bound of IP block>, <high bound of IP block> ] */
    range: [number, number];
    /** 2 letter ISO-3166-1 country code https://www.iban.com/country-codes */
    country: string;
}

export type CmpArgs = number | [number];
export type CmpResult = 1 | -1 | 0 | null;

export function cmp(a: CmpArgs, b: CmpArgs): null | Lookup;
export function lookup(ip: string | number): null | Lookup;
export function pretty(ip: string | number | Array<string | number>): string;
export function startWatchingDataUpdate(cb?: (err?: Error) => void): void;
export function stopWatchingDataUpdate(): void;
