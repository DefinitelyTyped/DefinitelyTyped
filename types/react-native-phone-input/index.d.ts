// Type definitions for react-native-phone-input 0.2
// Project: https://github.com/thegamenicorus/react-native-phone-input
// Definitions by: Matthew Elphick <https://github.com/maael>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';
import { StyleProp, ViewStyle as ViewStyleRaw, TextStyle as TextStyleRaw, TextInput, ImageRequireSource } from 'react-native';

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
  label: CountriesListItem['name'];
  dialCode: CountriesListItem['dialCode'];
  iso2: CountriesListItem['iso2'];
}

export interface ReactNativePhoneInputProps<TextComponentType extends React.ComponentType = typeof TextInput> {
    /**
     * Initial selected country
     */
    initialCountry?: string;
    /**
     * Allow user input 0 after country code
     */
    allowZeroAfterCountryCode?: boolean;
    /**
     * If true, disable all interaction of this component
     */
    disabled?: boolean;
    /**
     * Initial phone number
     */
    value?: string;
    /**
     * Custom styles to be applied if supplied
     */
    style?: ViewStyle;
    /**
     * Custom styles for flag image eg. {{width: 50, height: 30, borderWidth:0}}
     */
    flagStyle?: ViewStyle;
    /**
     * Custom styles for phone number text input eg. {{fontSize: 14}}
     */
    textStyle?: TextStyle;
    /**
     * Properties for phone number text input eg. {{placeholder: 'Telephone number'}}
     */
    textProps?: React.ComponentProps<TextComponentType>;
    /**
     * The input component to use
     */
    textComponent?: TextComponentType;
    /**
     * Distance between flag and phone number
     */
    offset?: number;
    /**
     * Set button color of country picker
     */
    pickerButtonColor?: string;
    /**
     * Set background color of country picker
     */
    pickerBackgroundColor?: string;
    /**
     * Custom styles for text in country picker eg. {{fontSize: 14}}
     */
    pickerItemStyle?: ViewStyle;
    /**
     * Cancel word
     */
    cancelText?: string;
    /**
     * Confirm word
     */
    confirmText?: string;
    /**
     * Custom styles for country picker button
     */
    buttonTextStyle?: TextStyle;
    /**
     * Function to be invoked when phone number is changed
     */
    onChangePhoneNumber?: (number: number) => void;
    /**
     * Function to be invoked when country picker is selected
     */
    onSelectCountry?: (iso2: string) => void;
    /**
     * Function to be invoked when press on flag image
     */
    onPressFlag?: () => void;
    /**
     * Custom countries list
     */
    countriesList?: ReadonlyArray<CountriesListItem>;
    /**
     * Function to be invoked when cancelling country picker selection
     */
    onPressCancel?: () => void;
    /**
     * Function to be invoked when confirming country picker selection
     */
    onPressConfirm?: () => void;
}

export default class ReactNativePhoneInput<
                   TextComponentType extends React.ComponentType = typeof TextInput
               > extends React.Component<ReactNativePhoneInputProps<TextComponentType>> {
                   picker?: React.Ref<ThisType<ReactNativePhoneInput>>;
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
