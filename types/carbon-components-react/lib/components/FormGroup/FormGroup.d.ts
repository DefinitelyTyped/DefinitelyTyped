import * as React from "react";

export interface FormGroupProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    hasMargin?: boolean | undefined;
    invalid?: boolean | undefined,
    legendId?: string | undefined,
    legendText: NonNullable<React.ReactNode>,
    message?: boolean | undefined,
    messageText?: React.ReactNode | undefined,
}

declare const FormGroup: React.FC<FormGroupProps>;

export default FormGroup;
