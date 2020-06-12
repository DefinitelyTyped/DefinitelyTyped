import * as React from "react";

export type FormInputProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    type?: string;
    validationState?: {
        state?: 'error' | 'warning' | 'information' | 'success';
        text?: string;
    };
    value?: string | number;
} & { [x: string]: any };

declare const FormInput: React.FunctionComponent<FormInputProps>;

export default FormInput;
