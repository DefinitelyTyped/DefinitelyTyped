import * as React from "react";
import { ForwardRefReturn } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "id" | "ref" | "size";

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, ExcludedAttributes> {
    defaultValue?: any;
    helperText?: React.ReactNode | undefined;
    hideLabel?: boolean | undefined;
    /**
     * @deprecated
     */
    iconDescription?: string | undefined;
    id: string;
    inline?: boolean | undefined;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    labelText?: React.ReactNode | undefined;
    light?: boolean | undefined;
    noLabel?: boolean | undefined;
    size?: "sm" | "md" | "lg" | "xl" | undefined;
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

declare const Select: ForwardRefReturn<HTMLSelectElement, SelectProps>;

export default Select;
