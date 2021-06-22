import * as React from "react";
import { ForwardRefReturn } from "../../../typings/shared";

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
    size?: "sm" | "md" | "lg" | "xl",
    warn?: boolean;
    warnText?: React.ReactNode;
}

declare const Select: ForwardRefReturn<HTMLSelectElement, SelectProps>;

export default Select;
