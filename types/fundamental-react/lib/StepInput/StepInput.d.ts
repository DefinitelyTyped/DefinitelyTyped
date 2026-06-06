import * as React from "react";

export interface StepInputProps {
    className?: string | undefined;
    disabled?: boolean | undefined;
    disableStyles?: boolean | undefined;
    localizedText?: any;
    onChange?: ((stepValue: number) => void) | undefined;
    placeholder?: string | undefined;
    readOnly?: boolean | undefined;
    validationState?: {
        state?: "error" | "warning" | "information" | "success" | undefined;
        text?: string | undefined;
    } | undefined;
    value?: number | undefined;
}

declare const StepInput: React.FunctionComponent<StepInputProps> & {
    displayName: "StepInput";
};

export default StepInput;
