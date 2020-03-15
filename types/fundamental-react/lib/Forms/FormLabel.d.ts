import * as React from "react";

export type FormLabelProps = {
    className?: string;
    disabled?: boolean;
    disableStyles?: boolean;
    isInlineHelp?: boolean;
    required?: boolean;
} & { [x: string]: any };

declare const FormLabel: React.FunctionComponent<FormLabelProps>;

export default FormLabel;
