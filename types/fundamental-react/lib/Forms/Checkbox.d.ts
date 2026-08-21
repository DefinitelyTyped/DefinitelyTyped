import * as React from "react";

export type CheckboxProps = {
    checked?: boolean | undefined;
    className?: string | undefined;
    compact?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    id?: string | undefined;
    indeterminate?: boolean | undefined;
    inline?: boolean | undefined;
    inputProps?: any;
    labelClasses?: string | undefined;
    labelProps?: any;
    name?: string | undefined;
    state?: any;
    value?: string | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
} & { [x: string]: any };

declare const Checkbox: React.FunctionComponent<CheckboxProps>;

export default Checkbox;
