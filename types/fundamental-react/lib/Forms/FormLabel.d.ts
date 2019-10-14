import * as React from "react";

export type FormLabelProps = {
    className?: string;
    /* Set to **true** for required input fields. */
    required?: boolean;
} & { [x: string]: any };

declare const FormLabel: React.FunctionComponent<FormLabelProps>;

export default FormLabel;
