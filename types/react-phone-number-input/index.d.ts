// Type definitions for react-phone-number-input 3.0
// Project: https://github.com/AdrienEtienne/react-phone-number-input
// Definitions by: Peter Yang <https://github.com/PeterYangIO>
//                 Adrien Etienne <https://github.com/AdrienEtienne>
//                 Jonathan Fleckenstein <https://github.com/fleck>
//                 James Lismore <https://github.com/jlismore>
//                 Dragoș Străinu <https://github.com/strdr4605>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import * as React from 'react';

/**
 * Formats value as a "local" phone number
 * @example formatPhoneNumber('+12133734253') === '(213) 373-4253'
 */
export function formatPhoneNumber(value: string): string;

/**
 * Formats value as an "international" phone number
 * @example formatPhoneNumberIntl('+12133734253') === '+1 213 373 4253'
 */
export function formatPhoneNumberIntl(value?: string): string;

/**
 * Checks if the phone number is "possible". Only checks the phone number length,
 * doesn't check the number digits against any regular expressions like isValidPhoneNumber() does
 */
export function isPossiblePhoneNumber(value: string): boolean;

/**
 * Validates a phone number value
 */
export function isValidPhoneNumber(value?: string): boolean;

export function parsePhoneNumber(input: string): PhoneNumber | undefined;

/**
 * @see https://github.com/catamphetamine/libphonenumber-js#phonenumber
 */
export interface PhoneNumber {
    number: string;
    countryCallingCode: string;
    nationalNumber: string;
    country?: string;
    ext?: string;
    carrierCode?: string;
}

/**
 * This is simply an alias for getCountryCallingCode() from libphonenumber-js
 * @example getCountryCallingCode('US') === '1'
 */
export function getCountryCallingCode(country: string): string;

export interface FlagsMap {
    [countryCode: string]: React.Component<object, object>;
}

export interface CountrySelectComponentProps {
    className?: string;
    disabled?: boolean;
    name?: string;
    onBlur?: () => void;
    onChange?: (value?: string) => void;
    onFocus?: () => void;
    /**
     * The list of all selectable countries (including "International")
     */
    options?: Array<{ value?: string; label: string; icon: React.Component }>;
    tabIndex?: number | string;
    /**
     * The currently selected country code
     */
    value?: string;
}

export interface PhoneInputProps extends Omit<React.InputHTMLAttributes<string>, 'onChange'> {
    // Required props
    onChange: (value: string) => void;
    /**
     * The phone number (in E.164 format).
     * Examples: `undefined`, `"+12"`, `"+12133734253"`.
     */
    value: string;
    // Optional props

    /**
     * Set to false to remove the "International" option from country <select/>.
     */
    addInternationalOption?: boolean;
    /**
     * If specified, only these countries will be available for selection.
     * @example ["RU", "UA", "KZ"]
     */
    countries?: string[];

    /**
     * If country is specified then the phone number can only be input in "national"
     * (not "international") format, and will be parsed as a phone number belonging
     * to the country. Example: country="US"
     */
    country?: string;

    /**
     * Can be used to place some countries on top of the list of country <select/> options.
     *  - "|" — inserts a separator.
     *  - "..." — means "the rest of the countries" (can be omitted, in which case it will
     * automatically be added at the end).
     *
     * @example
     * ["US", "CA", "AU", "|", "..."]
     */
    countryOptionsOrder?: string[];
    countrySelectComponent?: React.ComponentType<CountrySelectComponentProps>;
    /**
     * Country <select/> component props. Along with the usual DOM properties such as aria-label
     * and tabIndex, some custom properties are supported, such as arrowComponent and unicodeFlags.
     */
    countrySelectProps?: number;
    /**
     * A two-letter country code for formatting `value`
     * when a user inputs a national phone number (example: `(213) 373-4253`).
     * The user can still input a phone number in international format.
     * Example: "US".
     * `country` and `defaultCountry` properties are mutually exclusive.
     */
    defaultCountry?: string;
    /**
     * Set to true to disable both the phone number <input/> and the country <select/>
     */
    disabled?: boolean;
    displayInitialValueAsLocalNumber?: boolean;
    error?: string;
    flagComponent?: React.ComponentType<{ country: string; flagsPath: string; flags: FlagsMap }>;
    flags?: FlagsMap;
    /**
     * A URL template of a country flag, where "{XX}" is a two-letter country code in upper case,
     * or where "{xx}" is a two-letter country code in lower case. By default it points to
     * country-flag-icons github pages website. I imagine someone might want to download those
     * country flag icons and host them on their own servers instead (all flags are available in
     * the country-flag-icons library). There's a catch though: new countries may be added in future,
     * so when hosting country flag icons on your own server one should check the CHANGELOG.md every
     * time before updating this library, otherwise there's a possibility that some new country flag
     * would be missing.
     */
    flagUrl?: string;
    /**
     * Phone number <input/> component.
     *
     * Receives properties:
     *  - value: string — The formatted value.
     *  - onChange(event: Event) — Updates the formatted value from event.target.value.
     *  - onFocus() — Is used to toggle the --focus CSS class.
     *  - onBlur() — Is used to toggle the --focus CSS class.
     *  - Other properties like type="tel" or autoComplete="tel" that should be passed through to the DOM <input/>.
     *
     * Must also either use React.forwardRef() to "forward" ref to the <input/> or implement .focus() method.
     */
    inputComponent?: React.ForwardRefExoticComponent<
        React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<any>
    >;

    /**
     * If country is specified and international property is true then the phone number can only be input
     * in "international" format for that country, but without "country calling code" part.
     * For example, if country is "US" and international property is not passed then the phone number can
     * only be input in the "national" format for US ((213) 373-4253). But if country is "US" and
     * international property is true then the phone number will be input in the "international" format
     * for US (213 373 4253) without "country calling code" part (+1). This could be used for implementing
     * phone number input components that show "country calling code" part before the input field and then
     * the user can fill in the rest of their phone number in the input field.
     */
    international?: boolean;

    /**
     * If `country` property is passed along with `international={true}` property
     * then the phone number will be input in "international" format for that `country`
     * (without "country calling code").
     * For example, if `country="US"` property is passed to "without country select" input
     * then the phone number will be input in the "national" format for `US` (`(213) 373-4253`).
     * But if both `country="US"` and `international={true}` properties are passed then
     * the phone number will be input in the "international" format for `US` (`213 373 4253`)
     * (without "country calling code" `+1`).
     */
    internationalIcon?: React.ComponentType<object>;
    inputClassName?: string;
    labels?: { [key: string]: string };
    /**
     * If set to true the phone number input will get trimmed if it exceeds the maximum length for the country.
     */
    limitMaxLength?: boolean;
    metadata?: object;
    /**
     * Phone number <input/> component additional props.
     */
    numberInputProps?: object;
    /**
     * Is called every time the selected country changes: either programmatically or when user selects it manually from the list.
     */
    onCountryChange?: (countryCode?: string) => void;
    showCountrySelect?: boolean;
    /**
     * By default, the caret position is being "intelligently" managed
     * while a user inputs a phone number.
     * This "smart" caret behavior can be turned off
     * by passing `smartCaret={false}` property.
     * This is just an "escape hatch" for any possible caret position issues.
     * @default true
     */
    smartCaret?: boolean;
    /**
     * When `defaultCountry` is defined and the initial `value` corresponds to `defaultCountry`,
     * then the `value` will be formatted as a national phone number by default.
     * To format the initial `value` of `defaultCountry` as an international number instead
     * set `useNationalFormatForDefaultCountryValue` property to `true`.
     */
    useNationalFormatForDefaultCountryValue?: boolean;
}

export default class PhoneInput extends React.Component<PhoneInputProps, object> {}
