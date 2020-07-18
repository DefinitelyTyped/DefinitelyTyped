import * as React from "react";
import {
    EmbeddedIconProps,
    RequiresIdProps,
    ThemeProps,
    ValidityProps,
    ForwardRefReturn,
    CarbonInputSize
} from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "id" | "ref" | "size";
interface InheritedProps extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, ExcludedAttributes>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    /**
     * @deprecated
     */
    iconDescription?: EmbeddedIconProps["iconDescription"],
}

export interface SelectProps extends InheritedProps {
    defaultValue?: any,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    inline?: boolean,
    labelText?: React.ReactNode,
    noLabel?: boolean,
    size?: Extract<CarbonInputSize, "sm" | "xl">,
}

declare const Select: ForwardRefReturn<HTMLSelectElement, SelectProps>;

export default Select;
