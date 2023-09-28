// Type definitions for material-ui-phone-number 2.2
// Project: https://github.com/alexplumb/material-ui-phone-number
// Definitions by: Bassem (NextGLabs) <https://github.com/nextglabs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import { TextFieldProps } from "@material-ui/core";
import * as React from "react";

export interface MaterialUiPhoneNumberProps extends Omit<TextFieldProps, "onChange"> {
    ref?: any;
    autoFormat?: boolean | undefined;
    classes?: Record<string, any> | undefined;
    countryCodeEditable?: boolean | undefined;
    defaultCountry?: string | undefined;
    disableAreaCodes?: boolean | undefined;
    disableCountryCode?: boolean | undefined;
    disableDropdown?: boolean | undefined;
    dropdownClass?: string | undefined;
    enableLongNumbers?: boolean | undefined;
    excludeCountries?: string[] | undefined;
    inputClass?: string | undefined;
    /**
     * @param value - Holds current value of `MuiPhoneInput`.
     */
    onChange?: ((value: any) => void) | undefined;
    onlyCountries?: string[] | undefined;
    preferredCountries?: string[] | undefined;
}

declare class MaterialUiPhoneNumber extends React.Component<MaterialUiPhoneNumberProps> {}

export default MaterialUiPhoneNumber;
