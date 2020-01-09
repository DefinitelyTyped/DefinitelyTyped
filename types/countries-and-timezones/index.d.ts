// Type definitions for countries-and-timezones 2.0
// Project: https://github.com/manuelmhtr/countries-and-timezones#readme
// Definitions by: David Bird <https://github.com/zero51>
//                 Piotr Okoński <https://github.com/pokonski>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Erik Dalén <https://github.com/dalen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Country {
	id: string;
	name: string;
	timezones: ReadonlyArray<string>;
}

export interface Timezone {
	name: string;
	utcOffset: number;
	utcOffsetStr: string;
	dstOffset: number;
	dstOffsetStr: string;
	aliasOf: string | null;
	country: string | null;
}

export function getCountry(id: string): Country | null;
export function getTimezone(name: string): Timezone | null;
export function getAllCountries(): { [id: string]: Country };
export function getAllTimezones(): { [name: string]: Timezone };
export function getCountryForTimezone(name: string): Country | null;
export function getTimezonesForCountry(id: string): Timezone[];
