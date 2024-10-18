/// <reference types="i18n-iso-countries-regions" />

/**
 * Test suite created by lovel8 <https://github.com/lovel8>
 * Created by using code examples from https://github.com/haykelmahfoudhi/i18n-iso-countries-regions
 */

/**
 * Use the provided functions to retrieve country and region information:
 */

/** Function: getAllCountriesName(language)
 *  Returns: an array of all countries with their ISO codes and localized names.
 */

getAllCountriesName("en");

/* Output: [
  { iso: 'AD', name: 'Andorra' },
  { iso: 'AE', name: 'United Arab Emirates' },
  { iso: 'AF', name: 'Afghanistan' },
  { iso: 'AG', name: 'Antigua and Barbuda' },
  // ...
]

/** Function: getAllCountriesCallingCode(language)
 *  Returns: an array of all countries with their ISO codes, localized names, and calling codes.
 */

getAllCountriesCallingCode("fr");

/* Output: [
  { iso: 'AD', name: 'Andorre', callingCode: '376' },
  { iso: 'AE', name: 'Émirats arabes unis', callingCode: '971' },
  { iso: 'AF', name: 'Afghanistan', callingCode: '93' },
  { iso: 'AG', name: 'Antigua-et-Barbuda', callingCode: '1' },
  { iso: 'AI', name: 'Anguilla', callingCode: '1' },
  // ...
]

/** Function: getCallingCodeByCountryCode(isoCode)
 *  Returns: the calling code for a given ISO country code.
 */

getCallingCodeByCountryCode("US");

/* Output: "1" (for United States)

/** Function: getCallingCodeByCountryName(countryName)
 *  Returns: the calling code for a given country name.
 */

getCallingCodeByCountryName("United States");

/* Output: "1"

/** Function: getRegionsByCountryCode(language, countryCode)
 *  Returns: an array of regions for a given ISO country code, with their ISO codes and localized names.
 */

getRegionsByCountryCode("fr", "TN");

/* Output:[
  { iso: '22', name: 'Gouvernorat de Zaghouan' },
  { iso: '11', name: 'Gouvernorat de Tunis' },
  { iso: '72', name: 'Gouvernorat de Tozeur' },
  { iso: '83', name: 'Gouvernorat de Tataouine' },
  { iso: '51', name: 'Gouvernorat de Sousse' },
  // ...
  ]

/** Function: getRegionsByCountryName(language, countryName)
 *  Returns: an array of regions for a given country name, with their ISO codes and localized names.
 */

getRegionsByCountryName("fr", "Andorre");

/* Output:[
  { iso: '06', name: 'Sant Julià de Lòria' },
  { iso: '05', name: 'Ordino' },
  { iso: '04', name: 'La Massana' },
  { iso: '03', name: 'Encamp' },
  { iso: '02', name: 'Canillo' },
  { iso: '07', name: 'Andorre-la-Vieille' },
  { iso: '08', name: 'Escaldes-Engordany' }
]

/**
 * Use the provided functions to retrieve country and region information:
 */

/** Function: getCountryInfoByCountryCode(language, countryCode)
 *  Returns: an object containing comprehensive information about a country for the specified ISO country code and language
 */

getCountryInfoByCountryCode("en", "US");

/* Output:
{
  iso: 'US',
  name: 'United States',
  callingCode: '1',
  regions: [
    { iso: 'CA', name: 'California' },
    { iso: 'NY', name: 'New York' },
    // ...
  ]
} */
