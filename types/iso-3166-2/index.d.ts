// Type definitions for iso-3166-2 0.6
// Project: https://github.com/olahol/iso-3166-2.js
// Definitions by: Matt Rollins <https://github.com/sicilica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type InfoOrEmptyRecord<T> = T | {};

export namespace CountryInfo {
    interface Partial {
        name: string;
        sub: SubdivisionInfo.Map;
    }
    interface Full extends Partial {
        code: string;
    }

    interface Map {
        // full data if this country has been retrieved with country() at least once
        [code: string]: Full | Partial;
    }
}
export type CountryInfo = CountryInfo.Full;

export namespace SubdivisionInfo {
    interface Partial {
        type: string;
        name: string;
    }
    interface Full extends Partial {
        countryName: string;
        countryCode: string;
        code: string;
        regionCode: string;
    }

    interface Map {
        // full data if this subdivision has been retrieved with subdivision() at least once
        [code: string]: Full | Partial;
    }
}
export type SubdivisionInfo = SubdivisionInfo.Full;

export function subdivision(countryCodeOrFullSubdivisionCode: string, subdivisionCodeOrName?: string): InfoOrEmptyRecord<SubdivisionInfo>;

export function country(countryCodeOrName: string): InfoOrEmptyRecord<CountryInfo>;

export const data: CountryInfo.Map;

// map of alpha 3 codes to alpha 3 codes
export const codes: {
    [alpha3: string]: string
};
