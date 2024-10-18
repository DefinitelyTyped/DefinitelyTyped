export interface Country {
    readonly alpha2: string;
    readonly alpha3: string;
    readonly countryCallingCodes: readonly string[];
    readonly currencies: readonly string[];
    readonly emoji: string;
    readonly ioc: string;
    readonly languages: readonly string[];
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
    readonly regions: readonly string[];
    readonly countries: readonly Country[];
}

export interface Region {
    readonly name: string;
    readonly countries: readonly string[];
}

export const countries: {
    readonly [key: string]: Country;
} & {
    readonly all: readonly Country[];
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
    readonly all: readonly string[];
};

export const callingCountries: {
    readonly all: readonly Country[];
};

export const currencies: {
    readonly [key: string]: Currency;
} & {
    readonly all: readonly Currency[];
};

export const languages: {
    readonly all: readonly Language[];
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
    readonly countries: (query: any) => readonly Country[];
    readonly currencies: (query: any) => readonly Currency[];
    readonly languages: (query: any) => readonly Language[];
};
