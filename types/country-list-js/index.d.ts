export interface Province {
    name: string;
    alias: string[] | null;
    region?: string | undefined;
    short?: string | undefined;
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
    capital?: CountriesMap | undefined;
    currency?: CountriesMap | undefined;
    iso3?: CountriesMap | undefined;
    name?: CountriesMap | undefined;
    province?: CountriesMap | undefined;
}

export type CountryRecordMember =
    | "name"
    | "region"
    | "capital"
    | "continent"
    | "dialing_code"
    | "code"
    | "currency"
    | "provinces";

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
