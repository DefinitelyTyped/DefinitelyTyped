import * as React from "react";
import {
    ImageRequireSource,
    StyleProp,
    TextInput,
    TextStyle as TextStyleRaw,
    ViewStyle as ViewStyleRaw,
} from "react-native";

export type ViewStyle = StyleProp<ViewStyleRaw>;
export type TextStyle = StyleProp<TextStyleRaw>;

export interface CountriesListItem {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    areaCodes: ReadonlyArray<string> | null;
}

export interface PickerData {
    key: number;
    image: ImageRequireSource;
    label: CountriesListItem["name"];
    dialCode: CountriesListItem["dialCode"];
    iso2: CountriesListItem["iso2"];
}

export interface ReactNativePhoneInputProps<TextComponentType extends React.ComponentType = typeof TextInput> {
    /**
     * Initial selected country
     */
    initialCountry?: string | undefined;
    /**
     * Allow user input 0 after country code
     */
    allowZeroAfterCountryCode?: boolean | undefined;
    /**
     * If true, disable all interaction of this component
     */
    disabled?: boolean | undefined;
    /**
     * Initial phone number
     */
    value?: string | undefined;
    /**
     * Custom styles to be applied if supplied
     */
    style?: ViewStyle | undefined;
    /**
     * Custom styles for flag image eg. {{width: 50, height: 30, borderWidth:0}}
     */
    flagStyle?: ViewStyle | undefined;
    /**
     * Custom styles for phone number text input eg. {{fontSize: 14}}
     */
    textStyle?: TextStyle | undefined;
    /**
     * Properties for phone number text input eg. {{placeholder: 'Telephone number'}}
     */
    textProps?: React.ComponentProps<TextComponentType> | undefined;
    /**
     * The input component to use
     */
    textComponent?: TextComponentType | undefined;
    /**
     * Distance between flag and phone number
     */
    offset?: number | undefined;
    /**
     * Set button color of country picker
     */
    pickerButtonColor?: string | undefined;
    /**
     * Set background color of country picker
     */
    pickerBackgroundColor?: string | undefined;
    /**
     * Custom styles for text in country picker eg. {{fontSize: 14}}
     */
    pickerItemStyle?: ViewStyle | undefined;
    /**
     * Cancel word
     */
    cancelText?: string | undefined;
    /**
     * Confirm word
     */
    confirmText?: string | undefined;
    /**
     * Custom styles for country picker button
     */
    buttonTextStyle?: TextStyle | undefined;
    /**
     * Function to be invoked when phone number is changed
     */
    onChangePhoneNumber?: ((number: string) => void) | undefined;
    /**
     * Function to be invoked when country picker is selected
     */
    onSelectCountry?: ((iso2: string) => void) | undefined;
    /**
     * Function to be invoked when press on flag image
     */
    onPressFlag?: (() => void) | undefined;
    /**
     * Custom countries list
     */
    countriesList?: ReadonlyArray<CountriesListItem> | undefined;
    /**
     * Function to be invoked when cancelling country picker selection
     */
    onPressCancel?: (() => void) | undefined;
    /**
     * Function to be invoked when confirming country picker selection
     */
    onPressConfirm?: (() => void) | undefined;
}

export default class ReactNativePhoneInput<
    TextComponentType extends React.ComponentType = typeof TextInput,
> extends React.Component<ReactNativePhoneInputProps<TextComponentType>> {
    picker?: React.Ref<ThisType<ReactNativePhoneInput>> | undefined;
    /**
     * Return true if current phone number is valid
     */
    isValidNumber: () => boolean;
    /**
     * Return true type of current phone number
     */
    getNumberType: () => string;
    /**
     * Return current phone number
     */
    getValue: () => string;
    /**
     * Return flag image
     */
    getFlag: (iso2: string) => ImageRequireSource;
    /**
     * Return country object in country picker
     */
    getAllCountries: () => CountriesListItem;
    /**
     * Return country object with flag image
     */
    getPickerData: () => PickerData;
    /**
     * Focus the phone input
     */
    focus: () => void;
    /**
     * Blur the phone input
     */
    blur: () => void;
    /**
     * Set phone input to specific country
     */
    selectCountry: (iso2: string) => void;
    /**
     * Return country dial code of current phone number
     */
    getCountryCode: () => string;
    /**
     * Return country iso code of current phone number
     */
    getISOCode: () => string;
}
