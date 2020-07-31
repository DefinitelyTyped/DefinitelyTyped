import * as React from "react";

export type FormTextareaProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    readOnly?: boolean;
    state?: any;
} & { [x: string]: any };

declare const FormTextarea: React.FunctionComponent<FormTextareaProps>;

export default FormTextarea;
