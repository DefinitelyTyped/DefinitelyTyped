import * as React from "react";

export type FormSelectProps = {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    state?: any;
} & { [x: string]: any };

declare const FormSelect: React.FunctionComponent<FormSelectProps>;

export default FormSelect;
