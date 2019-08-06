import * as React from "react";

export type FormFieldsetProps = {
    className?: string;
} & { [x: string]: any };

declare const FormFieldset: React.FunctionComponent<FormFieldsetProps>;

export default FormFieldset;
