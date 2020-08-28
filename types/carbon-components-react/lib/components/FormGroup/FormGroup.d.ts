import * as React from "react";
import { ValidityProps } from "../../../typings/shared";

interface InheritedProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    invalid?: ValidityProps["invalid"],
}

export interface FormGroupProps extends InheritedProps {
    legendText: string,
    message?: boolean,
    messageText?: string,
}

declare const FormGroup: React.FC<FormGroupProps>;

export default FormGroup;
