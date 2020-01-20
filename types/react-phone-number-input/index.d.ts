// Type definitions for react-phone-number-input 3.0
// Project: https://github.com/AdrienEtienne/react-phone-number-input
// Definitions by: Peter Yang <https://github.com/PeterYangIO>
//                  Adrien Etienne <https://github.com/AdrienEtienne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import * as React from "react";

export type NumberFormat = "NATIONAL" | "National" | "INTERNATIONAL" | "International";

export function formatPhoneNumber(value: string, format?: NumberFormat): string;
export function formatPhoneNumberIntl(value?: string): string;
export function isValidPhoneNumber(value?: string): boolean;

export interface FlagsMap { [countryCode: string]: React.Component<object, object>; }

export interface CountrySelectComponentProps {
    className?: string;
    disabled?: boolean;
    name?: string;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    options?: Array<{ value?: string, label: string, icon: React.Component }>;
    tabIndex?: (number | string);
    value?: string;
}

export interface InputComponentProps {
    // Required props
    onChange: (value: string) => void;
    value: string;
    // Optional props
    onFocus?: () => void;
    onBlur?: () => void;
    country?: string;
    metadata?: object;
}

export interface PhoneInputProps {
    // Required props
    onChange: (value: string) => void;
    value: string;
    // Optional props
    autoComplete?: string;
    className?: string;
    country?: string;
    countries?: string[];
    countryOptions?: string[];
    countrySelectComponent?: React.Component<CountrySelectComponentProps, object>;
    countrySelectTabIndex?: number;
    defaultCountry?: string;
    disabled?: boolean;
    displayInitialValueAsLocalNumber?: boolean;
    error?: string;
    ext?: React.ReactElement;
    flagComponent?: React.Component<{ country: string, flagsPath: string, flags: FlagsMap, }, object>;
    flags?: FlagsMap;
    flagsPath?: string;
    getInputClassName?: (params: { disable?: boolean, invalid?: boolean }) => string;
    id?: string | number;
    inputComponent?: React.Component<InputComponentProps, object>;
    international?: boolean;
    internationalIcon?: React.Component<object, object>;
    inputClassName?: string;
    labels?: { [key: string]: string };
    limitMaxLength?: boolean;
    metadata?: object;
    placeholder?: string;
    onCountryChange?: (countryCode?: string) => void;
    showCountrySelect?: boolean;
    style?: React.CSSProperties;
}

export default class PhoneInput extends React.Component<PhoneInputProps, object> { }
