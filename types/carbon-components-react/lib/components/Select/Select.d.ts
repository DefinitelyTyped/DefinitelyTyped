import * as React from "react";
import { ForwardRefReturn, CarbonInputSize } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "id" | "ref" | "size";

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, ExcludedAttributes> {
    defaultValue?: any,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    /**
     * @deprecated
     */
    iconDescription?: string,
    id: string,
    inline?: boolean,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    labelText?: React.ReactNode,
    light?: boolean,
    noLabel?: boolean,
    size?: Extract<CarbonInputSize, "sm" | "xl">,
}

declare const Select: ForwardRefReturn<HTMLSelectElement, SelectProps>;

export default Select;
