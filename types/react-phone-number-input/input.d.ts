import * as React from 'react';

export interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    /**
     * If country is specified then the phone number can only be input in "national"
     * (not "international") format, and will be parsed as a phone number belonging
     * to the country. Must be a supported country code.
     * @example "US"
     */
    country?: string;

    /**
     * If country is specified and international property is true then the phone number
     * can only be input in "international" format for that country. By default, the
     * "country calling code" part (+1 when country is US) is not included in the input
     * field: that could be changed by passing withCountryCallingCode property (see
     * below). So, if country is US and international property is not passed then the
     * phone number can only be input in the "national" format for US ((213) 373-4253).
     * But if country is "US" and international property is true then the phone number
     * can only be input in the "international" format for US (213 373 4253) without
     * the "country calling code" part (+1). This could be used for implementing phone
     * number input components that show "country calling code" part before the input
     * field and then the user can fill in the rest of their phone number digits in
     * the input field.
     */
    international?: boolean;

    /**
     * If country is specified and international property is true then the phone number
     * can only be input in "international" format for that country. By default, the
     * "country calling code" part (+1 when country is US) is not included in the input
     * field. To change that, pass withCountryCallingCode property, and it will include
     * the "country calling code" part in the input field. See the demo for an example.
     */
    withCountryCallingCode?: boolean;

    /**
     * If defaultCountry is specified then the phone number can be input both in
     * "international" format and "national" format. A phone number that's being input
     * in "national" format will be parsed as a phone number belonging to the defaultCountry.
     * Must be a supported country code.
     *
     * If neither country nor defaultCountry are specified then the phone number can only be input in "international" format.
     *
     * @example "US"
     */
    defaultCountry?: string;

    /**
     * Phone number value.
     * @example undefined
     * @example "+12133734253"
     */
    value?: string | undefined;

    /** Updates the value */
    onChange: (value?: string) => void;

    /**
     * A custom <input/> component can be passed. In that case, it must be a React.forwardRef()
     * to the actual <input/>
     */
    inputComponent?: React.ForwardRefExoticComponent<
        React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<any>
    >;

    /**
     * By default, the <input/> uses "smart" caret positioning. To turn that behavior
     * off one can pass smartCaret={false} property.
     * @default true
     */
    smartCaret?: boolean;

    /**
     * When defaultCountry is defined and the initial value corresponds to defaultCountry,
     * then the value will be formatted as a national phone number by default. To
     * format the initial value of defaultCountry as an international number instead
     * set useNationalFormatForDefaultCountryValue property to false.
     * @default true
     */
    useNationalFormatForDefaultCountryValue?: boolean;
}

declare const PhoneInput: React.FC<PhoneInputProps>;

export default PhoneInput;
