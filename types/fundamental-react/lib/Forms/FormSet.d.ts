import * as React from "react";

export type FormSetProps = {
    className?: string;
} & { [x: string]: any };

declare const FormSet: React.FunctionComponent<FormSetProps>;

export default FormSet;
