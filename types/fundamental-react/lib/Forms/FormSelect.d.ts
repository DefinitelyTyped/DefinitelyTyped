import * as React from "react";

export type FormSelectProps = {
    className?: string;
    disabled?: boolean;
} & { [x: string]: any };

declare const FormSelect: React.FunctionComponent<FormSelectProps>;

export default FormSelect;
