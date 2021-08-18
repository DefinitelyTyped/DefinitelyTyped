import localizedCountries = require("localized-countries");

localizedCountries("de").get("DE");
// => "Deutschland"

localizedCountries("en").get("US");
// => "United States"

localizedCountries("de").object()["DE"];
// => "Deutschland"

localizedCountries.languages; // $ExpectType string[]
