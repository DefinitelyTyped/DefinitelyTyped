// Type definitions for country-data 0.0
// Project: https://github.com/OpenBookPrices/country-data
// Definitions by: Logan Dam <https://github.com/biltongza>
//                 Mike MacCana <https://github.com/mikemaccana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export interface Country {
    readonly alpha2: string;
    readonly alpha3: string;
    readonly countryCallingCodes: ReadonlyArray<string>;
    readonly currencies: ReadonlyArray<string>;
    readonly emoji: string;
    readonly ioc: string;
    readonly languages: ReadonlyArray<string>;
    readonly name: string;
    readonly status: string;
}

export interface Currency {
    readonly code: string;
    readonly decimals: number;
    readonly name: string;
    readonly symbol: string;
    readonly number: number;
}

export interface Language {
    readonly alpha2: string;
    readonly alpha3: string;
    readonly bibliographic: string;
    readonly name: string;
}

export interface Continent {
    readonly name: string;
    readonly regions: ReadonlyArray<string>;
    readonly countries: ReadonlyArray<Country>;
}

export interface Region {
    readonly name: string;
    readonly countries: ReadonlyArray<string>;
}

export const countries: {
    readonly [key: string]: Country;
} & {
    readonly all: ReadonlyArray<Country>;
};

export const continents: {
    readonly africa: Continent;
    readonly antarctica: Continent;
    readonly asia: Continent;
    readonly europe: Continent;
    readonly northAmerica: Continent;
    readonly oceania: Continent;
    readonly southAmerica: Continent;
};

export const callingCodes: {
    readonly all: ReadonlyArray<string>;
};

export const callingCountries: {
    readonly all: ReadonlyArray<Country>;
};

export const currencies: {
    readonly [key: string]: Currency;
} & {
    readonly all: ReadonlyArray<Currency>;
};

export const languages: {
    readonly all: ReadonlyArray<Language>;
};

export const regions: {
    readonly centralAsia: Region;
    readonly southernAsia: Region;
    readonly southeastAsia: Region;
    readonly eastAsia: Region;
    readonly westernAsia: Region;
    readonly centralAfrica: Region;
    readonly northAfrica: Region;
    readonly southernAfrica: Region;
    readonly eastAfrica: Region;
    readonly westAfrica: Region;
    readonly centralAmerica: Region;
    readonly northernAmerica: Region;
    readonly caribbean: Region;
    readonly southAmerica: Region;
    readonly antarctica: Region;
    readonly northernEurope: Region;
    readonly southernEurope: Region;
    readonly easternEurope: Region;
    readonly westernEurope: Region;
    readonly australia: Region;
    readonly melanesia: Region;
    readonly micronesia: Region;
    readonly polynesia: Region;
};

export const lookup: {
    readonly countries: (query: any) => ReadonlyArray<Country>;
    readonly currencies: (query: any) => ReadonlyArray<Currency>;
    readonly languages: (query: any) => ReadonlyArray<Language>;
};
