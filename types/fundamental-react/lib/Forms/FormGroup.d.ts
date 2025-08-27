import * as React from "react";

export type FormGroupProps = {
    disableStyles?: boolean | undefined;
} & { [x: string]: any };

declare const FormGroup: React.FunctionComponent<FormGroupProps> & { displayName: "FormGroup" };

export default FormGroup;
