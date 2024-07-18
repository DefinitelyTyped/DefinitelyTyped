import * as React from "react";

export type FormInputProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    id?: string | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    type?: string | undefined;
    validationState?: {
        state?: "error" | "warning" | "information" | "success" | undefined;
        text?: string | undefined;
    } | undefined;
    value?: string | number | undefined;
} & { [x: string]: any };

declare const FormInput: React.FunctionComponent<FormInputProps>;

export default FormInput;
