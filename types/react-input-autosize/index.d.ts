// Type definitions for react-input-autosize 2.2
// Project: https://github.com/JedWatson/react-input-autosize#readme
// Definitions by: Jason Unger <https://github.com/jsonunger>
//                 Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface AutosizeInputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.ClassAttributes<HTMLInputElement> {
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
