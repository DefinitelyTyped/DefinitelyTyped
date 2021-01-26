import * as React from "react";
import { ForwardRefReturn } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "aria-placeholder" | "aria-describedby" | "defaultValue" | "value";

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, ExcludedAttributes> {
    defaultValue?: string | number,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    labelText: React.ReactNode,
    light?: boolean,
    value?: string | number,
}

declare const TextArea: ForwardRefReturn<HTMLTextAreaElement, TextAreaProps>;

export default TextArea;
