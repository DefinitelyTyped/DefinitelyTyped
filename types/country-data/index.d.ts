// Type definitions for country-data 0.0
// Project: https://github.com/OpenBookPrices/country-data
// Definitions by: Logan Dam <https://github.com/biltongza>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Country {
    alpha2: string;
    alpha3: string;
    countryCallingCodes: string[];
    currencies: string[];
    emoji: string;
    ioc: string;
    languages: string[];
    name: string;
    status: string;
}

export interface Currency {
    code: string;
    decimals: number;
    name: string;
    number: number;
}

export interface Language {
    alpha2: string;
    alpha3: string;
    bibliographic: string;
    name: string;
}

export interface Continent {
    name: string;
    regions: string[];
    countries: Country[];
}

export interface Region {
    name: string;
    countries: string[];
}

export const countries: {
    all: Country[];
};

export const continents: {
    africa: Continent;
    antarctica: Continent;
    asia: Continent;
    europe: Continent;
    northAmerica: Continent;
    oceania: Continent;
    southAmerica: Continent;
};

export const callingCodes: {
    all: string[];
};

export const callingCountries: {
    all: Country[];
};

export const currencies: {
    all: Currency[];
};

export const languages: {
    all: Language[];
};

export const regions: {
    centralAsia: Region;
    southernAsia: Region;
    southeastAsia: Region;
    eastAsia: Region;
    westernAsia: Region;
    centralAfrica: Region;
    northAfrica: Region;
    southernAfrica: Region;
    eastAfrica: Region;
    westAfrica: Region;
    centralAmerica: Region;
    northernAmerica: Region;
    caribbean: Region;
    southAmerica: Region;
    antarctica: Region;
    northernEurope: Region;
    southernEurope: Region;
    easternEurope: Region;
    westernEurope: Region;
    australia: Region;
    melanesia: Region;
    micronesia: Region;
    polynesia: Region;
};

export const lookup: {
    countries: (query: any) => Country[];
    currencies: (query: any) => Currency[];
    languages: (query: any) => Language[];
};
