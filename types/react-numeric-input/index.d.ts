// Type definitions for react-numeric-input 2.2
// Project: https://github.com/vlad-ignatov/react-numeric-input#readme
// Definitions by: Heather Booker <https://github.com/heatherbooker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export = NumericInput;

declare namespace NumericInput {
    interface NumericInputProps extends React.Props<NumericInput> {
        addLabelText?: string;
        className?: string;
        defaultValue?: number | string;
        disabled?: boolean;
        format?: ((s: string) => string);
        max?: number | ((v: number) => number);
        maxLength?: number;
        min?: number | ((v: number) => number);
        mobile?: boolean | 'auto' | ((this: NumericInput) => any); // TODO: fix `any`
        noValidate?: boolean| string;
        onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
        onChange?: ((v: number, s: string, i: JSX.Element) => void);
        onFocus?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
        onInput?: ((...args: any[]) => void);
        onInvalid?: ((err: string, v: number, s: string) => void);
        onKeyDown?: React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement>;
        onSelect?: ((...args: any[]) => void);
        onValid?: ((v: number, s: string) => void);
        parse?: ((s: string) => number | string);
        pattern?: string;
        precision?: number | ((this: NumericInput) => void);
        readOnly?: boolean;
        required?: boolean;
        size?: number | string;
        snap?: boolean;
        step?: number | object; // TODO: should be `number | <some function>`
        strict?: boolean;
        style?: { [key: string]: { [key: string]: string } } | boolean;
        type?: string;
        value?: number | string;
    }
}

declare class NumericInput extends React.Component<NumericInput.NumericInputProps> {}
