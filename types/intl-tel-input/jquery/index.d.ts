/// <reference types="jquery" />

interface JQuery {
    intlTelInput(): JQuery;
    /**
     * initialise the plugin with optional options.
     * @param options options that can be provided during initialization.
     */
    intlTelInput(options?: intlTelInput.Options): JQueryDeferred<any>;

    /**
     * Remove the plugin from the input, and unbind any event listeners.
     */
    intlTelInput(method: "destroy"): void;

    /**
     * Get the extension from the current number.
     * Requires the utilsScript option.
     * e.g. if the input value was "(702) 555-5555 ext. 1234", this would
     * return "1234".
     */
    intlTelInput(method: "getExtension"): string;

    /**
     * Get the current number in the given format (defaults to E.164 standard).
     * The different formats are available in the enum
     * intlTelInputUtils.numberFormat - taken from here.
     * Requires the utilsScript option.
     * Note that even if nationalMode is enabled, this can still return a full
     * international number.
     * @param numberFormat the format in which the number will be returned.
     */
    intlTelInput(method: "getNumber", numberFormat?: intlTelInputUtils.numberFormat): string;
    intlTelInput(method: string, numberFormat: intlTelInputUtils.numberFormat): string;

    /**
     * Get the type (fixed-line/mobile/toll-free etc) of the current number.
     * Requires the utilsScript option.
     * Returns an integer, which you can match against the various options in the
     * global enum intlTelInputUtils.numberType.
     * Note that in the US there's no way to differentiate between fixed-line and
     * mobile numbers, so instead it will return FIXED_LINE_OR_MOBILE.
     */
    intlTelInput(method: "getNumberType"): intlTelInputUtils.numberType;

    /**
     * Get the country data for the currently selected flag.
     */
    intlTelInput(method: "getSelectedCountryData"): intlTelInput.CountryData;

    /**
     * Get more information about a validation error.
     * Requires the utilsScript option.
     * Returns an integer, which you can match against the various options in the
     * global enum ValidationError
     */
    intlTelInput(method: "getValidationError"): intlTelInputUtils.validationError;

    /**
     * Validate the current number. Expects an internationally formatted number
     * (unless nationalMode is enabled). If validation fails, you can use
     * getValidationError to get more information.
     * Requires the utilsScript option.
     * Also see getNumberType if you want to make sure the user enters a certain
     * type of number e.g. a mobile number.
     */
    intlTelInput(method: "isValidNumber"): boolean;

    /**
     * Change the country selection (e.g. when the user is entering their address).
     * @param countryCode country code of the country to be set.
     */
    intlTelInput(method: "setCountry", countryCode: string): void;

    /**
     * Insert a number, and update the selected flag accordingly.
     * Note that by default, if nationalMode is enabled it will try to use
     * national formatting.
     * @param aNumber number to be set.
     */
    intlTelInput(method: "setNumber", aNumber: string): void;

    /**
     * Set the type of the placeholder number
     * @param type Placeholder number type to be set
     */
    intlTelInput(method: "setPlaceholderNumberType", type: intlTelInput.placeholderNumberType): void;
}
