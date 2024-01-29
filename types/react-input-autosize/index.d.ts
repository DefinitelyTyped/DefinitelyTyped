import * as React from "react";

export interface AutosizeInputProps
    extends React.InputHTMLAttributes<HTMLInputElement>, React.ClassAttributes<HTMLInputElement>
{
    inputClassName?: string | undefined;
    inputRef?: ((instance: HTMLInputElement | null) => void) | undefined;
    inputStyle?: React.CSSProperties | undefined;
    minWidth?: string | number | undefined;
    onAutosize?: ((inputWidth: string | number) => void) | undefined;
    placeholderIsMinWidth?: boolean | undefined;
    extraWidth?: string | number | undefined;
    injectStyles?: boolean | undefined;
}

declare class AutosizeInput extends React.Component<AutosizeInputProps> {
    copyInputStyles(): void;
    getInput(): HTMLInputElement;
}

export default AutosizeInput;
