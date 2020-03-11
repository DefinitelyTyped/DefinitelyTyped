import * as React from "react";

export interface SelectProps {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    disableStyles?: boolean;
    id?: string;
    placeholder?: string;
    validationState?: {
        state?: any;
        text?: string;
    };
    onClick?: (...args: any[]) => any;
}

declare const Select: React.FunctionComponent<SelectProps> & {
    displayName: "Select";
};

export default Select;
