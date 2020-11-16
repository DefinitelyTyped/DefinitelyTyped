import * as React from "react";

export type FormSetProps = {
    className?: string;
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormSet: React.FunctionComponent<FormSetProps>;

export default FormSet;
