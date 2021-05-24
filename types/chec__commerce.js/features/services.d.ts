import Commerce = require('@chec/commerce.js');

type LocaleListCountriesResponse = {
  countries: { [name: string]: string };
  html: string;
}

type LocaleListSubdivisionsResponse = {
  subdivisions: { [name: string]: string };
  html: string;
}

export class Services {
  constructor(commerce: Commerce);

  localeListCountries(): Promise<LocaleListCountriesResponse>;
  localeListShippingCountries(token: string): Promise<LocaleListCountriesResponse>;
  localeListShippingSubdivisions(token: string, countryCode: string): Promise<LocaleListSubdivisionsResponse>;
  localeListSubdivisions(countryCode: string): Promise<LocaleListSubdivisionsResponse>;
}
