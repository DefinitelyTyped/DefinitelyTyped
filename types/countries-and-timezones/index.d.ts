// Type definitions for countries-and-timezones 1.0
// Project: https://github.com/manuelmhtr/countries-and-timezones#readme
// Definitions by: David Bird <https://github.com/zero51>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Country {
	id: string;
	name: string;
	timezones: string[];
}

export interface Timezone {
	name: string;
	utcOffset: number;
	offsetStr: string;
	countries: string[];
}

export function getAllCountries(): Country[];

export function getAllTimezones(): Timezone[];

export function getCountriesForTimezone(timezoneId: string): Country[];

export function getTimezonesForCountry(countryId: string): Timezone[];
