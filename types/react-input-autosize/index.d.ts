// Type definitions for react-input-autosize 2.0
// Project: https://github.com/JedWatson/react-input-autosize#readme
// Definitions by: Jason Unger <https://github.com/jsonunger>
//                 Frank Li <https://github.com/franklixuefei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface AutosizeInputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.ClassAttributes<HTMLInputElement> {
    inputClassName?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    inputStyle?: React.CSSProperties;
    minWidth?: string | number;
    onAutosize?: (inputWidth: string | number) => void;
    placeholderIsMinWidth?: boolean;
}

declare class AutosizeInput extends React.Component<AutosizeInputProps> {
    getInput(): HTMLInputElement;
}

export default AutosizeInput;
