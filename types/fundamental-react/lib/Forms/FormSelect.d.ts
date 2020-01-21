import * as React from "react";

export type FormSelectProps = {
    className?: string;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    disableStyles?: boolean;
} & { [x: string]: any };

declare const FormSelect: React.FunctionComponent<FormSelectProps>;

export default FormSelect;
