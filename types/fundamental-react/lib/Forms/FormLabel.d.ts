import * as React from "react";

export type FormLabelProps = {
    className?: string | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    isInlineHelp?: boolean | undefined;
    required?: boolean | undefined;
} & { [x: string]: any };

declare const FormLabel: React.FunctionComponent<FormLabelProps>;

export default FormLabel;
