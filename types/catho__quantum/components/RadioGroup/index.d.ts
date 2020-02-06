import React = require('react');

export interface RadioProps<T> {
    disabled?: boolean;
    error?: boolean;
    children?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<T>;
    theme?: {
        colors?: object;
        spacing?: object;
    };
    value: string;
}

export type Radio = React.ComponentType<RadioProps<HTMLInputElement>>;

export interface RadioButtonProps<T> {
    checked?: boolean;
    children?: string;
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    disabled?: boolean;
    error?: boolean;
    icon?: string;
    id?: string;
    inline?: boolean;
    label?: string;
    onChange?: React.ChangeEventHandler<T>;
    theme?: {
        baseFontSize?: number;
        spacing?: object;
        colors?: object;
        components?: {
            button?: object;
        };
    };
    value: string;
}

export type RadioButton = React.ComponentType<RadioButtonProps<HTMLInputElement>>;

export interface RadioGroupProps<T> {
    type?: 'radio' | 'button';
    options?: Array<{
        label?: React.ReactNode;
        value: string;
        disabled?: boolean;
    }>;

    children?: JSX.Element[] | JSX.Element;
    inline?: boolean;
    onChange?: React.ChangeEventHandler<T>;
    value?: string;
    error?: string;
    theme?: {
        colors?: object;
        spacing?: object;
    };
    name: string;
}

export default class RadioGroup<T = HTMLInputElement> extends React.Component<RadioGroupProps<T>> {
    static Radio: Radio;

    static Button: RadioButton;
}
