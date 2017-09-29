// Type definitions for country-select-js 1.0
// Project: https://github.com/mrmarkfrench/country-select-js
// Definitions by: Humberto Rocha <https://github.com/humrochagf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace CountrySelectJs {
  interface Options {
    /**
     * Set the default country by it's country code. Otherwise it will just be
     * the first country in the list.
     */
    defaultCountry?: string;

    /**
     * Display only the countries you specify. Takes an array of country codes.
     */
    onlyCountries?: string[];

    /**
     * Specify the countries to appear at the top of the list. Defaults to
     * ["us", "gb"]
     */
    preferredCountries?: string[];

    /**
     * Set the dropdown's width to be the same as the input. This is
     * automatically enabled for small screens.
     */
    responsiveDropdown?: boolean;
  }

  interface CountryData {
    name: string;
    iso2: string;
  }
}

interface JQuery {
  /**
   * Remove the plugin from the input, and unbind any event listeners.
   */
  countrySelect(method: 'destroy'): void;

  /**
   * Get the country data for the currently selected flag.
   */
  countrySelect(method: 'getSelectedCountryData'): CountrySelectJs.CountryData;

  countrySelect(method: string, value: string): void;

  /**
   * initialize the plugin with optional options.
   */
  countrySelect(options?: CountrySelectJs.Options): JQueryDeferred<any>;
}
