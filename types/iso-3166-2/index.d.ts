// Type definitions for iso-3166-2 0.6
// Project: https://github.com/olahol/iso-3166-2.js
// Definitions by: Matt Rollins <https://github.com/sicilica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace CountryInfo {
    interface Partial {
        name: string;
        sub: {
            // full data for any subdivision that has been referenced with subdivision()
            [code: string]: SubdivisionInfo.Partial | SubdivisionInfo.Full
        };
    }
    type Full = Partial & {
        code: string;
    };
}
export type CountryInfo = CountryInfo.Full;

export namespace SubdivisionInfo {
    interface Partial {
        type: string;    // could be enumerated, but there are over 100 different values right now
        name: string;
    }
    type Full = Partial & {
        countryName: string;
        countryCode: string;
        code: string;
        regionCode: string;
    };
}
export type SubdivisionInfo = SubdivisionInfo.Full;

// retrieve a subdivision
export function subdivision(code: string): SubdivisionInfo|{};
export function subdivision(countryCode: string, subdivisionCode: string): SubdivisionInfo|{};
export function subdivision(countryCode: string, subdivisionName: string): SubdivisionInfo|{};

// retrieve a country
export function country(countryCode: string): CountryInfo|{};
export function country(countryName: string): CountryInfo|{};

// the raw ISO 3166-2 data
export const data: {
    // full data for any country that has been referenced with country()
    [countryCode: string]: CountryInfo.Partial | CountryInfo.Full
};

// map of alpha 3 codes to alpha 3 codes
export const codes: {
    [alpha3: string]: string
};
