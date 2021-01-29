import * as React from "react";

export interface FormGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    invalid?: boolean,
    legendText: NonNullable<React.ReactNode>,
    message?: boolean,
    messageText?: React.ReactNode,
}

declare const FormGroup: React.FC<FormGroupProps>;

export default FormGroup;
