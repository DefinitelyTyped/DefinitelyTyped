import * as React from "react";
import { RefForwardingProps, ThemeProps, ValidityProps, ForwardRefReturn } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "aria-describedby" | "defaultValue" | "value";
interface InheritedProps extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, ExcludedAttributes>,
    ThemeProps,
    ValidityProps,
    RefForwardingProps<HTMLTextAreaElement>
{ }

export interface TextAreaProps extends InheritedProps {
    defaultValue?: string | number,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    labelText: React.ReactNode,
    value?: string | number,
}

declare const TextArea: ForwardRefReturn<HTMLTextAreaElement, TextAreaProps>;

export default TextArea;
