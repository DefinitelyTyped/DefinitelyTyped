import * as React from "react";

export type FormTextareaProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormTextarea: React.FunctionComponent<FormTextareaProps>;

export default FormTextarea;
