import React = require('react');

type MaskFunction = (rawValue: string) => string[];
type Mask = boolean | RegExp | string | MaskFunction;

type InputProps = {
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
    onClean?: () => void;
    onChange?: () => void;
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
};

export default class Input extends React.Component<InputProps> {}
