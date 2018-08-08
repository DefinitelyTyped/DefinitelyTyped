// Type definitions for react-input-autosize 1.2
// Project: https://github.com/JedWatson/react-input-autosize#readme
// Definitions by: Jason Unger <https://github.com/jsonunger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare namespace AutosizeInput {
    interface AutosizeInputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.ClassAttributes<HTMLInputElement> {
        inputClassName?: string;
        inputRef?: React.Ref<HTMLInputElement>;
        inputStyle?: React.CSSProperties;
        minWidth?: string | number;
        onAutosize?: (inputWidth: string | number) => void;
        placeholderIsMinWidth?: boolean;
    }
}

declare class AutosizeInput extends React.Component<AutosizeInput.AutosizeInputProps> {
    getInput(): HTMLInputElement;
}

export = AutosizeInput;
