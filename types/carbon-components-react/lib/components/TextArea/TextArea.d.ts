import * as React from "react";
import { ThemeProps, ValidityProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-invalid" | "aria-describedby" | "defaultValue" | "value";
interface InheritedProps extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, ExcludedAttributes>,
    ThemeProps,
    ValidityProps
{ }

export interface TextAreaProps extends InheritedProps {
    defaultValue?: string | number,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    labelText: React.ReactNode,
    value?: string | number,
}

declare const TextArea: React.RefForwardingComponent<HTMLTextAreaElement, TextAreaProps>;

export default TextArea;
