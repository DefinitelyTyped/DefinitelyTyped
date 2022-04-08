import * as React from "react";

export type CheckboxProps = {
    checked?: boolean;
    className?: string;
    compact?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    indeterminate?: boolean;
    inline?: boolean;
    inputProps?: any;
    labelClasses?: string;
    labelProps?: any;
    name?: string;
    state?: any;
    value?: string;
    onChange?: (...args: any[]) => any;
} & { [x: string]: any };

declare const Checkbox: React.FunctionComponent<CheckboxProps>;

export default Checkbox;
