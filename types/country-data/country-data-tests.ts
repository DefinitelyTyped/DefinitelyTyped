import * as lib from 'country-data';

lib.callingCodes.all; // $ExpectType string[]
lib.callingCountries.all; // $ExpectType Country[]
lib.continents.africa; // $ExpectType Continent
lib.continents.africa.countries; // $ExpectType Country[]
lib.countries.all; // $ExpectType Country[]
lib.currencies.all; // $ExpectType Currency[]
lib.languages.all; // $ExpectType Language[]
lib.regions.antarctica; // $ExpectType Region
lib.regions.antarctica.countries; // $ExpectType string[]
lib.lookup.countries(""); // $ExpectType Country[]
lib.lookup.currencies(""); // $ExpectType Currency[]
lib.lookup.languages(""); // $ExpectType Language[]
