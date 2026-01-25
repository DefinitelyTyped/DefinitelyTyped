import { DefineComponent } from "vue";

export interface DropdownOptions {
    /**
     * Disable dropdown
     * @default false
     */
    disabled?: boolean;
    /**
     * Show dial code in the dropdown list
     * @default true
     */
    showDialCodeInList?: boolean;
    /**
     * Show dial code in the dropdown selection
     * @default false
     */
    showDialCodeInSelection?: boolean;
    /**
     * Show flags in the dropdown selection and list
     * @default true
     */
    showFlags?: boolean;
    /**
     * Show country search box
     * @default false
     */
    showSearchBox?: boolean;
    /**
     * Placeholder for the search box
     * @default ''
     */
    searchBoxPlaceholder?: string;
    /**
     * Native dropdown tabindex attribute
     * @default 0
     */
    tabindex?: number;
}

export interface InputOptions {
    /**
     * Native input autocomplete attribute
     * @default 'on'
     */
    autocomplete?: string;
    /**
     * Native input autofocus attribute
     * @default false
     */
    autofocus?: boolean;
    /**
     * Native input aria-describedby attribute
     * @default ''
     */
    "aria-describedby"?: string;
    /**
     * Native input id attribute
     * @default ''
     */
    id?: string;
    /**
     * Native input maxlength attribute
     * @default 25
     */
    maxlength?: number;
    /**
     * Native input name attribute
     * @default 'telephone'
     */
    name?: string;
    /**
     * Show dial code in input
     * @default false
     */
    showDialCode?: boolean;
    /**
     * Placeholder for the input
     * @default 'Enter a phone number'
     */
    placeholder?: string;
    /**
     * Native input readonly attribute
     * @default false
     */
    readonly?: boolean;
    /**
     * Native input required attribute
     * @default false
     */
    required?: boolean;
    /**
     * Native input tabindex attribute
     * @default 0
     */
    tabindex?: number;
    /**
     * Native input type attribute
     * @default 'tel'
     */
    type?: string;
    /**
     * Custom classes for the input
     * @default ''
     */
    styleClasses?: string | string[] | Record<string, boolean>;
}

export interface CountryObject {
    name: string;
    iso2: string;
    dialCode: string;
    priority?: number;
    areaCodes?: string[] | null;
}

export interface PhoneObject {
    number: string;
    isValid: boolean;
    country?: CountryObject;
    countryCode?: string;
    nationalNumber?: string;
    formatted?: string;
    [key: string]: any;
}

export interface VueTelInputProps {
    /**
     * All countries that are used in libphonenumber-js, can be overridden by this prop
     * @default An array of all countries
     */
    allCountries?: CountryObject[];
    /**
     * Auto update the input to the formatted phone number when it's valid
     * @default true
     */
    autoFormat?: boolean;
    /**
     * Custom validation RegExp for input
     * @default false
     */
    customValidate?: boolean | RegExp;
    /**
     * Default country (by iso2 or dialCode), will override the country fetched from IP address of user
     * @default ''
     */
    defaultCountry?: string | number;
    /**
     * Disable vue-tel-input, including the input & flag dropdown
     * @default false
     */
    disabled?: boolean;
    /**
     * To fetch default country based on IP address of user
     * @default true
     */
    autoDefaultCountry?: boolean;
    /**
     * Options for dropdown
     */
    dropdownOptions?: DropdownOptions;
    /**
     * List of countries will NOT be shown on the dropdown
     * @default []
     */
    ignoredCountries?: string[];
    /**
     * Options for input
     */
    inputOptions?: InputOptions;
    /**
     * Invalid message
     * @default ''
     */
    invalidMsg?: string;
    /**
     * Format mode for the phone number
     * - 'auto': Default set by phone
     * - 'international': Format number with the dial code (e.g., +61)
     * - 'national': Format number without dial code (e.g., 0321232)
     * @default 'auto'
     */
    mode?: "auto" | "international" | "national";
    /**
     * List of countries will be shown on the dropdown
     * @default []
     */
    onlyCountries?: string[];
    /**
     * Preferred countries list, will be on top of the dropdown
     * @default []
     */
    preferredCountries?: string[];
    /**
     * Custom classes for the wrapper
     * @default ''
     */
    styleClasses?: string | string[] | Record<string, boolean>;
    /**
     * Only allow valid characters in a phone number (will also verify in mounted,
     * so phone number with invalid characters will be shown as an empty string)
     * @default false
     */
    validCharactersOnly?: boolean;
    /**
     * The phone number value for v-model binding
     */
    modelValue?: string;
}

export interface VueTelInputEmits {
    /**
     * Fires when the input changes
     * In vue-tel-input@next (Vue 3), this replaces the @input event
     */
    "on-input": (number: string, phoneObject: PhoneObject) => void;
    /**
     * Fires when the correctness of the phone number changes (from true to false or vice-versa)
     * and when the component is mounted
     */
    "validate": (phoneObject: PhoneObject) => void;
    /**
     * Fires when country changed (even for the first time)
     */
    "country-changed": (country: CountryObject) => void;
    /**
     * Fires on blur event
     */
    "blur": () => void;
    /**
     * Fires on focus event
     */
    "focus": () => void;
    /**
     * Fires on keyup.space event
     */
    "space": () => void;
    /**
     * Fires on keyup.enter event
     */
    "enter": () => void;
    /**
     * Fires when the flags dropdown opens
     */
    "open": () => void;
    /**
     * Fires when the flags dropdown closes
     */
    "close": () => void;
    /**
     * Emitted for v-model support
     */
    "update:modelValue": (value: string) => void;
    [key: string]: (...args: any[]) => void;
}

declare const VueTelInput: DefineComponent<VueTelInputProps, {}, {}, {}, {}, {}, {}, VueTelInputEmits> & {
    install: (app: any, options?: any) => void;
};

export default VueTelInput;

declare module "@vue/runtime-core" {
    interface GlobalComponents {
        VueTelInput: typeof VueTelInput;
    }
}
