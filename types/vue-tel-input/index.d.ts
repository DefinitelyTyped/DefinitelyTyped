// Type definitions for vue-tel-input 2.1
// Project: https://educationlink.github.io/vue-tel-input
// Definitions by: Komang Suryadana <https://github.com/suryadana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor } from 'vue';
import { DirectiveOptions } from 'vue/types/options';

export default VueTelInput;
export const VueTelInput: VueTelInputConstructor;

export interface VueTelInputProps {
    value: string;
    placeholder: string;
    disabledFetchingCountry: boolean;
    disabled: boolean;
    disabledFormatting: boolean;
    invalidMsg: string;
    required: boolean;
    defaultCountry: string;
    enabledCountryCode: boolean;
    enabledFlags: boolean;
    preferredCountries: boolean;
    onlyCountries: any[];
    ignoredCountries: any[];
    autocomplete: string;
    name: string;
    wrapperClasses: string;
    inputClasses: string;
    dropdownOptions: () => void;
    inputOptions: () => void;
    maxLen: number;
}

export interface VueTelInputData {
    phone: string;
    activeCountry: VueTelInputCountry;
    open: boolean;
    selectedIndex: any;
    typeToFindInput: string;
    typeToFindTimer: any;
}

export interface VueTelInputWatch {
    state: (value: any) => void;
    value: () => void;
}

export interface VueTelInputMethods {
    initializeCountry: () => void;
    getCountries: (list: any[]) => any[];
    findCountry: (iso: string) => any[];
    getItemClass: (index: number, iso2: string) => any;
    choose: (country: VueTelInputCountry) => void;
    onInput: ()  => void;
    onBlur: () => void;
    toggleDropdown: () => void;
    clickedOutside: () => void;
    keyboardNav: (e: Event) => void;
    reset: () => void;
}

export interface VueTelInputComputed {
    mode: () => string;
    filteredCountries: () => string[];
    sortedCountries: () => string[];
    formattedResult: () => string;
    state: () => boolean;
    response: () => VueTelInputResponse ;
}

export interface VueTelInputDirective {
    'click-outside': DirectiveOptions;
}

export interface VueTelInputResponse {
    number: string;
    isValid: boolean;
    country: VueTelInputCountry;
}

export interface VueTelInputCountry {
    iso2: string;
}

export interface VueTelInputConstructor extends VueConstructor {
    props: VueTelInputProps;
    data: () => VueTelInputData;
    watch: VueTelInputWatch;
    methods: VueTelInputMethods;
    computed: VueTelInputComputed;
    directives: VueTelInputDirective;
}
