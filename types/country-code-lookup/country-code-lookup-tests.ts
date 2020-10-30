import * as lookup from 'country-code-lookup';

const countryByFip = lookup.byFips('gm');
const countryByIso = lookup.byIso('de');
const countryByName = lookup.byCountry('Germany');
