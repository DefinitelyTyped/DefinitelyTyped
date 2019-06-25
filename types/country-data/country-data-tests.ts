import * as lib from 'country-data';

lib.callingCodes.all; // $ExpectType ReadonlyArray<string>
lib.callingCountries.all; // $ExpectType ReadonlyArray<Country>
lib.continents.africa; // $ExpectType Continent
lib.continents.africa.countries; // $ExpectType ReadonlyArray<Country>
lib.countries.all; // $ExpectType ReadonlyArray<Country>
lib.currencies.all; // $ExpectType ReadonlyArray<Currency>
lib.languages.all; // $ExpectType ReadonlyArray<Language>
lib.regions.antarctica; // $ExpectType Region
lib.regions.antarctica.countries; // $ExpectType ReadonlyArray<string>
lib.lookup.countries(""); // $ExpectType ReadonlyArray<Country>
lib.lookup.currencies(""); // $ExpectType ReadonlyArray<Currency>
lib.lookup.languages(""); // $ExpectType ReadonlyArray<Language>
