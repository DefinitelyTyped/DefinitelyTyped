// Type definitions for react-numeric-input 2.2
// Project: https://github.com/vlad-ignatov/react-numeric-input#readme
// Definitions by: Heather Booker <https://github.com/heatherbooker>
//                 Aarni Koskela <https://github.com/akx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = NumericInput;

declare namespace NumericInput {
    type BoundsFunctionProp = number | ((component: NumericInput) => number | undefined);
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;  // via TS 2.8 manual
    interface NumericInputProps extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'min' | 'max' | 'step' | 'onChange' | 'defaultValue' | 'onInvalid' | 'style'
    > {
        addLabelText?: string;
        componentClass?: string;
        defaultValue?: number | string;
        format?: ((value: number | null) => string);
        max?: BoundsFunctionProp;
        min?: BoundsFunctionProp;
        mobile?: boolean | 'auto' | ((component: NumericInput) => boolean);
        noStyle?: boolean;
        noValidate?: boolean | string;
        onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
        onChange?: ((value: number | null, stringValue: string, input: HTMLInputElement) => void);
        onFocus?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement>;
        onInput?: React.FormEventHandler<HTMLInputElement>;
        onInvalid?: ((error: string, value: number | null, stringValue: string) => void);
        onKeyDown?: React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement>;
        onSelect?: React.ReactEventHandler<HTMLInputElement>;
        onValid?: ((value: number | null, stringValue: string) => void);
        parse?: ((stringValue: string) => number | null);
        precision?: number | ((component: NumericInput) => number | null | undefined);
        snap?: boolean;
        step?: number | ((component: NumericInput, direction: string) => number | undefined);
        strict?: boolean;
        style?: {[key: string]: React.CSSProperties} | boolean;
        value?: number | string;
    }
    // Exposed here for the function prop handlers that get the NumericInput instance as a parameter.
    // Lifted directly from react-numeric-input@79874ccbe:/src/NumericInput.jsx#L63-L73
    interface NumericInputState {
        btnDownActive?: boolean;
        btnDownHover?: boolean;
        btnUpActive?: boolean;
        btnUpHover?: boolean;
        selectionEnd?: number | null;
        selectionStart?: number | null;
        stringValue?: string;
        value?: number | null;
    }
}

declare class NumericInput extends React.Component<NumericInput.NumericInputProps, NumericInput.NumericInputState> {
    static DIRECTION_UP: string;
    static DIRECTION_DOWN: string;
}
