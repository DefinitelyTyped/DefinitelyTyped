// Type definitions for country-list-js 3.1
// Project: https://github.com/i-rocky/country-list-js
// Definitions by: Digory Doolittle <https://github.com/digorydoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

export interface Province {
    name: string;
    alias: string[] | null;
    region?: string;
    short?: string;
}

export interface CountryCode {
    iso2: string;
    iso3: string;
}

export interface Currency {
    code: string;
    decimal: string;
    symbol: string;
}

export interface Country {
    name: string;
    region: string;
    capital: string;
    continent: string;
    dialing_code: string;
    code: CountryCode;
    currency: Currency;
    provinces: Province[];
}

export interface CountriesMap {
    [key: string]: Country;
}

export interface Cache {
    capital?: CountriesMap;
    currency?: CountriesMap;
    iso3?: CountriesMap;
    name?: CountriesMap;
    province?: CountriesMap;
}

export type CountryRecordMember =
    | 'name'
    | 'region'
    | 'capital'
    | 'continent'
    | 'dialing_code'
    | 'code'
    | 'currency'
    | 'provinces';

export function names(): string[];

export function continents(): string[];

export function capitals(): string[];

/**
 * Note that this function does not filter the results. Thus, you may get lots of undefined entries.
 */
export function ls(member: CountryRecordMember): Array<string | undefined>;

export function findByIso2(iso2: string): Country | undefined;

export function findByIso3(iso3: string): Country | undefined;

export function findByName(name: string): Country | undefined;

export function findByCapital(capital: string): Country | undefined;

export function findByCurrency(currency: string): Country | undefined;

export function findByPhoneNbr(phone: string): Country | undefined;

export function findByProvince(province: string): Country | undefined;

export const all: CountriesMap;

export const cache: Cache;
