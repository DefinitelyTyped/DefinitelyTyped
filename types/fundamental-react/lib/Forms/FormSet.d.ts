import * as React from "react";

export type FormSetProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormSet: React.FunctionComponent<FormSetProps>;

export default FormSet;
