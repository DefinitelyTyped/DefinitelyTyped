import * as country from "countryjs";

country.info("PT")!; // $ExpectType Country
country.info("Portugal"); // $ExpectType undefined
country.info("Portugal", "name")!; // $ExpectType Country

country.states("US")!; // $ExpectType string[]
country.states("United States"); // $ExpectType undefined
country.states("United States", "name")!; // $ExpectType string[]

country.provinces("US")!; // $ExpectType string[]
country.provinces("United States"); // $ExpectType undefined
country.provinces("United States", "name")!; // $ExpectType string[]

country.name("US")!; // $ExpectType string
country.name("USA"); // $ExpectType undefined
country.name("USA", "ISO3")!; // $ExpectType string

country.altSpellings("US")!; // $ExpectType string[]
country.altSpellings("USA"); // $ExpectType undefined
country.altSpellings("USA", "ISO3")!; // $ExpectType string[]

country.area("PT")!; // $ExpectType number
country.area("Portugal"); // $ExpectType undefined
country.area("Portugal", "name")!; // $ExpectType number

country.borders("PT")!; // $ExpectType string[]
country.borders("Portugal"); // $ExpectType undefined
country.borders("Portugal", "name")!; // $ExpectType string[]

country.callingCodes("PT")!; // $ExpectType string[]
country.callingCodes("Portugal"); // $ExpectType undefined
country.callingCodes("Portugal", "name")!; // $ExpectType string[]

country.capital("US")!; // $ExpectType string
country.capital("USA"); // $ExpectType undefined
country.capital("USA", "ISO3")!; // $ExpectType string

country.currencies("PT")!; // $ExpectType string[]
country.currencies("Portugal"); // $ExpectType undefined
country.currencies("Portugal", "name")!; // $ExpectType string[]

country.demonym("US")!; // $ExpectType string
country.demonym("USA"); // $ExpectType undefined
country.demonym("USA", "ISO3")!; // $ExpectType string

country.flag("US")!; // $ExpectType string
country.flag("USA"); // $ExpectType undefined
country.flag("USA", "ISO3")!; // $ExpectType string

country.ISOcodes("PT")!; // $ExpectType { alpha2: string; alpha3: string; }
country.ISOcodes("Portugal"); // $ExpectType undefined
country.ISOcodes("Portugal", "name")!; // $ExpectType { alpha2: string; alpha3: string; }

country.languages("PT")!; // $ExpectType string[]
country.languages("Portugal"); // $ExpectType undefined
country.languages("Portugal", "name")!; // $ExpectType string[]

country.latlng("PT")!; // $ExpectType number[]
country.latlng("Portugal"); // $ExpectType undefined
country.latlng("Portugal", "name")!; // $ExpectType number[]

country.nativeName("US")!; // $ExpectType string
country.nativeName("USA"); // $ExpectType undefined
country.nativeName("USA", "ISO3")!; // $ExpectType string

country.population("US")!; // $ExpectType number
country.population("USA"); // $ExpectType undefined
country.population("USA", "ISO3")!; // $ExpectType number

country.region("US")!; // $ExpectType string
country.region("USA"); // $ExpectType undefined
country.region("USA", "ISO3")!; // $ExpectType string

country.subregion("US")!; // $ExpectType string
country.subregion("USA"); // $ExpectType undefined
country.subregion("USA", "ISO3")!; // $ExpectType string

country.timezones("PT")!; // $ExpectType string[]
country.timezones("Portugal"); // $ExpectType undefined
country.timezones("Portugal", "name")!; // $ExpectType string[]

country.tld("PT")!; // $ExpectType string[]
country.tld("Portugal"); // $ExpectType undefined
country.tld("Portugal", "name")!; // $ExpectType string[]

country.translations("PT")!; // $ExpectType { de: string; es: string; fr: string; ja: string; it: string; }
country.translations("Portugal"); // $ExpectType undefined
country.translations("Portugal", "name")!; // $ExpectType { de: string; es: string; fr: string; ja: string; it: string; }

country.wiki("US")!; // $ExpectType string
country.wiki("USA"); // $ExpectType undefined
country.wiki("USA", "ISO3")!; // $ExpectType string

country.all(); // $ExpectType Country[]
