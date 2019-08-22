import * as React from "react";
import { EmbeddedIconProps, RequiresIdProps, ThemeProps, ValidityProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "id" | "ref";
interface InheritedProps extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, ExcludedAttributes>,
    EmbeddedIconProps,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{ }

export interface SelectProps extends InheritedProps {
    defaultValue?: any,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    inline?: boolean,
    labelText?: React.ReactNode,
    noLabel?: boolean,
}

declare const Select: React.RefForwardingComponent<HTMLSelectElement, SelectProps>;

export default Select;
