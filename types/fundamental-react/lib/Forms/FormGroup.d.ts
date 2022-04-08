import * as React from "react";

export type FormGroupProps = {
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormGroup: React.FunctionComponent<FormGroupProps> & {displayName: "FormGroup"};

export default FormGroup;
