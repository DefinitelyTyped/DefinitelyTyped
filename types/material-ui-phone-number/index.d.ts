// Type definitions for material-ui-phone-number 2.2
// Project: https://github.com/alexplumb/material-ui-phone-number
// Definitions by: Bassem (NextGLabs) <https://github.com/nextglabs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import * as React from "react";
import { TextFieldProps } from "@material-ui/core";

export interface MaterialUiPhoneNumberProps extends Omit<TextFieldProps, "onChange"> {
    ref?: any;
    autoFormat?: boolean;
    classes?: Record<string, any>;
    countryCodeEditable?: boolean;
    defaultCountry?: string;
    disableAreaCodes?: boolean;
    disableCountryCode?: boolean;
    disableDropdown?: boolean;
    dropdownClass?: string;
    enableLongNumbers?: boolean;
    excludeCountries?: string[];
    inputClass?: string;
    /**
     * @param value - Holds current value of `MuiPhoneInput`.
     */
    onChange?: (value: any) => void;
    onlyCountries?: string[];
    preferredCountries?: string[];
}

declare class MaterialUiPhoneNumber extends React.Component<MaterialUiPhoneNumberProps> {}

export default MaterialUiPhoneNumber;
