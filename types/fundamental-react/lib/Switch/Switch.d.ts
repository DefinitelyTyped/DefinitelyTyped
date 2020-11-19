import * as React from "react";

export interface SwitchProps {
    checked?: boolean;
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    inputProps?: any;
    internalLabels?: {
        checked?: any;
        unchecked?: any;
    };
    labelProps?: any;
    semantic?: boolean;
    onChange?: (...args: any[]) => any;
}

declare const Switch: React.FunctionComponent<SwitchProps> & {
    displayName: "Switch";
};

export default Switch;
