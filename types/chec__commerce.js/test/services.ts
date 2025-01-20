import Commerce = require("@chec/commerce.js");

const commerce = new Commerce("{your_public_key}");

const token = "checkout_token_id";
const country = "US";

// $ExpectType Promise<LocaleListCountriesResponse>
commerce.services.localeListCountries();

// $ExpectType Promise<LocaleListCountriesResponse>
commerce.services.localeListShippingCountries(token);

// $ExpectType Promise<LocaleListSubdivisionsResponse>
commerce.services.localeListShippingSubdivisions(token, country);

// $ExpectType Promise<LocaleListSubdivisionsResponse>
commerce.services.localeListSubdivisions(country);
