import * as React from "react";

export interface StepInputProps {
    className?: string;
    disabled?: boolean;
    disableStyles?: boolean;
    localizedText?: any;
    placeholder?: string;
    readOnly?: boolean;
    validationState?: {
        state?: 'error' | 'warning' | 'information' | 'success';
        text?: string;
    };
    value?: number;
}

declare const StepInput: React.FunctionComponent<StepInputProps> & {
    displayName: "StepInput";
};

export default StepInput;
