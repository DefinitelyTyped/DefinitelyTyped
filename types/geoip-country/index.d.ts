export interface Lookup {
    /** [ <low bound of IP block>, <high bound of IP block> ] */
    range: [number, number];
    /** 2 letter ISO-3166-1 country code https://www.iban.com/country-codes */
    country: string;
    /** Full country name */
    name?: string;
    /** Native country name */
    native?: string;
    /** Full capital name */
    capital?: string;
    continent?: "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
    continent_name?: "Africa" | "Antarctica" | "Asia" | "Europe" | "North America" | "Oceania" | "South America";
    /** ISO 639-1 2 letter language codes */
    languages?: string[];
    /** ISO 4217 currency codes */
    currency?: string[];
    /** Phone number prefixes */
    phone?: string[];
}

export type CmpArgs = number | [number];
export type CmpResult = 1 | -1 | 0 | null;

export function cmp(a: CmpArgs, b: CmpArgs): null | Lookup;
/**
 * @param ip ipv4, ipv6 or "dual stack" IP (e.g. `"::ffff:8.8.8.8"`)
 *
 * @returns null for local IPs and unknown IP ranges, otherwise an object with country info
 */
export function lookup(ip: string | number): null | Lookup;
export function pretty(ip: string | number | Array<string | number>): string;
export function startWatchingDataUpdate(cb?: (err?: Error) => void): void;
export function stopWatchingDataUpdate(): void;
