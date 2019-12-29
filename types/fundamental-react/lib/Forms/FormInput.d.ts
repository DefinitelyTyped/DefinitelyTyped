import * as React from "react";

export type InputType = "normal" | "valid" | "invalid" | "warning";

export type FormInputProps = {
    className?: string;
    compact?: boolean;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    /* Value for the `name` attribute on the input. */
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    /* Sets the state of the input. Can be left empty for default styles. */
    state?: InputType;
    /* Value for the `type` attribute on the input. */
    type?: string;
    /* Value for the `value` attribute on the input. */
    value?: string;
} & { [x: string]: any };

declare const FormInput: React.FunctionComponent<FormInputProps>;

export default FormInput;
