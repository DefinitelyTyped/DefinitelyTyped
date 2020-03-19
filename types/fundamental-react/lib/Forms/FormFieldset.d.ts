import * as React from "react";

export type FormFieldsetProps = {
    className?: string;
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormFieldset: React.FunctionComponent<FormFieldsetProps>;

export default FormFieldset;
