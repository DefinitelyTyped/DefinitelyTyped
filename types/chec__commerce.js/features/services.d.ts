import Commerce = require('@chec/commerce.js');

export class Services {
  constructor(commerce: Commerce);

  localeListCountries(): Promise<any>;
  localeListShippingCountries(token: string): Promise<any>;
  localeListShippingSubdivisions(token: string, countryCode: string): Promise<any>;
  localeListSubdivisions(countryCode: string): Promise<any>;
}
