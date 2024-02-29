import * as React from "react";

export interface SwitchProps {
    checked?: boolean | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    compact?: boolean | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    id?: string | undefined;
    inputProps?: any;
    internalLabels?: {
        checked?: any;
        unchecked?: any;
    } | undefined;
    labelProps?: any;
    semantic?: boolean | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}

declare const Switch: React.FunctionComponent<SwitchProps> & {
    displayName: "Switch";
};

export default Switch;
