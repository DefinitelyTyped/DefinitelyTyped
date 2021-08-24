import * as React from "react";
import { ForwardRefReturn } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "aria-placeholder" | "aria-describedby" | "defaultValue" | "value";

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, ExcludedAttributes> {
    defaultValue?: string | number | undefined,
    helperText?: React.ReactNode | undefined,
    hideLabel?: boolean | undefined,
    invalid?: boolean | undefined,
    invalidText?: React.ReactNode | undefined,
    labelText: React.ReactNode,
    light?: boolean | undefined,
    value?: string | number | undefined,
}

declare const TextArea: ForwardRefReturn<HTMLTextAreaElement, TextAreaProps>;

export default TextArea;
