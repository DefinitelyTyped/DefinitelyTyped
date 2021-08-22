import * as React from "react";

export type FormTextareaProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    readOnly?: boolean | undefined;
    state?: any;
} & { [x: string]: any };

declare const FormTextarea: React.FunctionComponent<FormTextareaProps>;

export default FormTextarea;
