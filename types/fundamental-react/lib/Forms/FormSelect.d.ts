import * as React from "react";

export type FormSelectProps = {
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    state?: any;
} & { [x: string]: any };

declare const FormSelect: React.FunctionComponent<FormSelectProps>;

export default FormSelect;
