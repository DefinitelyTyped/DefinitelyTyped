import React = require('react');

export type MaskFunction = (rawValue: string) => string[];
export type Mask = boolean | RegExp | string | MaskFunction;

export interface InputProps<T> {
    value?: string;
    label?: string;
    helperText?: string;
    descriptionLabel?: string;
    required?: boolean;
    placeholder?: string;
    type?: 'email' | 'text' | 'tel' | 'number' | 'password' | 'search';
    error?: string;
    id?: string;
    mask?: Mask | Mask[];
    onClean?: React.MouseEventHandler<T>;
    onChange?: React.ChangeEventHandler<T>;
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
}

export default class Input<T = HTMLInputElement> extends React.Component<InputProps<T>> {}
