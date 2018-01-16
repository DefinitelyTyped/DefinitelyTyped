// Type definitions for intl-tel-input
// Project: https://github.com/jackocnr/intl-tel-input
// Definitions by: Fidan Hakaj <https://github.com/fdnhkj>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace IntlTelInput {

  interface Plugin {
    /**
     * Get all of the plugin's country data - either to re-use elsewhere
     * e.g. to populate a country dropdown.
     */
    getCountryData(): CountryData[];
    /**
     * Load the utils.js script (included in the lib directory) to enable
     * formatting/validation etc.
     */
    loadUtils(path: string, utilsScriptDeferred?: boolean): void;

    /**
     * Remove the plugin from the input, and unbind any event listeners.
     */
    (method: 'destroy'): void;
    /**
     * Get the extension from the current number.
     * Requires the utilsScript option.
     * e.g. if the input value was "(702) 555-5555 ext. 1234", this would
     * return "1234".
     */
    (method: 'getExtension'): string;
    /**
     * Get the current number in the given format (defaults to E.164 standard).
     * The different formats are available in the enum
     * intlTelInputUtils.numberFormat - taken from here.
     * Requires the utilsScript option.
     * Note that even if nationalMode is enabled, this can still return a full
     * international number.
     */
    (method: 'getNumber'): string;
    /**
     * Get the type (fixed-line/mobile/toll-free etc) of the current number.
     * Requires the utilsScript option.
     * Returns an integer, which you can match against the various options in the
     * global enum intlTelInputUtils.numberType.
     * Note that in the US there's no way to differentiate between fixed-line and
     * mobile numbers, so instead it will return FIXED_LINE_OR_MOBILE.
     */
    (method: 'getNumberType'): intlTelInputUtils.numberType;
    /**
     * Get the country data for the currently selected flag.
     */
    (method: 'getSelectedCountryData'): IntlTelInput.CountryData;
    /**
     * Get more information about a validation error.
     * Requires the utilsScript option.
     * Returns an integer, which you can match against the various options in the
     * global enum intlTelInputUtils.validationError
     */
    (method: 'getValidationError'): intlTelInputUtils.validationError;
    /**
     * Validate the current number. Expects an internationally formatted number
     * (unless nationalMode is enabled). If validation fails, you can use
     * getValidationError to get more information.
     * Requires the utilsScript option.
     * Also see getNumberType if you want to make sure the user enters a certain
     * type of number e.g. a mobile number.
     */
    (method: 'isValidNumber'): boolean;
    (method: string): void;
    /**
     * Change the country selection (e.g. when the user is entering their address).
     * @param countryCode country code of the country to be set.
     */
    (method: 'setCountry', countryCode: string): void;
    /**
     * Insert a number, and update the selected flag accordingly.
     * Note that by default, if nationalMode is enabled it will try to use
     * national formatting.
     * @param aNumber number to be set.
     */
    (method: 'setNumber', aNumber: string): void;
    (method: string, value: string): void;

    /**
     * Get the current number in the given format (defaults to E.164 standard).
     * The different formats are available in the enum
     * intlTelInputUtils.numberFormat - taken from here.
     * Requires the utilsScript option.
     * Note that even if nationalMode is enabled, this can still return a full
     * international number.
     * @param numberFormat the format in which the number will be returned.
     */
    (method: 'getNumber', numberFormat: intlTelInputUtils.numberFormat): string;
    (method: string, numberFormat: intlTelInputUtils.numberFormat): string;

    /**
     * initialise the plugin with optional options.
     * @param options options that can be provided during initialization.
     */
    (options?: IntlTelInput.Options): JQueryDeferred<any>;
  }

  interface Options {
    /**
     * Whether or not to allow the dropdown. If disabled, there is no dropdown
     * arrow, and the selected flag is not clickable. Also we display the
     * selected flag on the right instead because it is just a marker of state.
     */
    allowDropdown?: boolean;
    /**
     * If there is just a dial code in the input: remove it on blur or submit,
     * and re-add it on focus. This is to prevent just a dial code getting
     * submitted with the form. Requires nationalMode to be set to false.
     */
    autoHideDialCode?: boolean;
    /**
     * Set the input's placeholder to an example number for the selected country.
     * You can specify the number type using the numberType option.
     * If there is already a placeholder attribute set on the input then that
     * will take precedence. Requires the utilsScript option.
     */
    autoPlaceholder?: boolean;
    /**
     * Change the placeholder generated by autoPlaceholder. Must return a string.
     */
    customPlaceholder?: (selectedCountryPlaceholder: string, selectedCountryData: CountryData) => string;
    /**
     * Specify the container for the country dropdown (use a jQuery selector
     * e.g. "body"). This is useful when the input is within a scrolling element,
     * or an element with overflow: hidden. Wherever you put the dropdown it
     * will automatically close on the window scroll event to prevent positioning
     * issues. If you want it to close when a different element is scrolled
     * (such as the input's parent), simply listen for the that scroll event,
     * and trigger $(window).scroll() e.g.
     */
    dropdownContainer?: string;
    /**
     * Don't display the countries you specify.
     */
    excludeCountries?: Array<string>;
    /**
     * Format the input value during initialisation.
     */
    formatOnInit?: boolean;
    /**
     * When setting initialCountry to "auto", you must use this option to
     * specify a custom function that looks up the user's location. Also note
     * that when instantiating the plugin, we now return a deferred object, so
     * you can use .done(callback) to know when initialisation requests like
     * this have completed.
     * Note that the callback must still be called in the event of an error.
     */
    geoIpLookup?: (callback: (countryCode: string) => void) => void;
    /**
     * Set the initial country selection by specifying it's country code.
     * You can also set it to "auto", which will lookup the user's country based
     * on their IP address (requires the geoIpLookup option).
     * Note that the "auto" option will not update the country selection if the
     * input already contains a number. If you leave initialCountry blank,
     * it will default to the first country in the list.
     */
    initialCountry?: string;
    /**
     * Allow users to enter national numbers (and not have to think about
     * international dial codes). Formatting, validation and placeholders still
     * work. Then you can use getNumber to extract a full international number.
     * This option now defaults to true, and it is recommended that you leave it
     * that way as it provides a better experience for the user.
     */
    nationalMode?: boolean;
    /**
     * Specify one of the keys from the global enum intlTelInputUtils.numberType
     *  e.g. "FIXED_LINE" to tell the plugin you're expecting that type of number.
     * Currently this is only used to set the placeholder to the right type of number.
     */
    numberType?: string;
    /**
     * Display only the countries you specify.
     */
    onlyCountries?: Array<string>;
    /**
     * Specify the countries to appear at the top of the list.
     */
    preferredCountries?: Array<string>;
    /**
     * Display the country dial code next to the selected flag so it's not part
     * of the typed number. Note that this will disable nationalMode because
     * technically we are dealing with international numbers, but with the
     * dial code separated.
     */
    separateDialCode?: boolean;
    /**
     * Enable formatting/validation etc. by specifying the path to the included
     * utils.js script, which is fetched only when the page has finished loading
     * (on window.load) to prevent blocking. When instantiating the plugin,
     * we return a deferred object, so you can use .done(callback) to know when
     * initialisation requests like this have finished. Note that if you're
     * lazy loading the plugin script itself (intlTelInput.js) this will not
     * work and you will need to use the loadUtils method instead.
     */
    utilsScript?: string;
  }

  interface CountryData {
    name: string;
    iso2: string;
    dialCode: string;
  }
}

declare namespace intlTelInputUtils {

    const enum numberFormat {
      E164 = 0,
      INTERNATIONAL = 1,
      NATIONAL = 2,
      RFC3966 = 3
    }

    const enum numberType {
      FIXED_LINE = 0,
      MOBILE = 1,
      FIXED_LINE_OR_MOBILE = 2,
      TOLL_FREE = 3,
      PREMIUM_RATE = 4,
      SHARED_COST = 5,
      VOIP = 6,
      PERSONAL_NUMBER = 7,
      PAGER = 8,
      UAN = 9,
      VOICEMAIL = 10,
      UNKNOWN = -1
    }

    const enum validationError {
      IS_POSSIBLE = 0,
      INVALID_COUNTRY_CODE = 1,
      TOO_SHORT = 2,
      TOO_LONG = 3,
      NOT_A_NUMBER = 4
    }
}

interface JQuery {
  intlTelInput: IntlTelInput.Plugin;
}
