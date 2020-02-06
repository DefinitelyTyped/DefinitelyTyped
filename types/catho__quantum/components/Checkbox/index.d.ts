import React = require('react');

export interface CheckboxProps<T> {
    checked?: boolean;
    disabled?: boolean;
    children?: string;
    error?: string;
    id?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: React.ChangeEventHandler<T>;
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
}

export class Checkbox<T = HTMLInputElement> extends React.Component<CheckboxProps<T>> {}
export type CheckboxType = React.ComponentType<CheckboxProps<HTMLInputElement>>;

export interface CheckboxButtonProps<T> {
    children?: React.ReactNode[] | React.ReactNode;
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    checked?: boolean;
    disabled?: boolean;
    error?: string;
    id?: string;
    icon?: string;
    label?: string;
    name: string;
    onChange?: React.ChangeEventHandler<T>;
    value?: string;
}

export type CheckboxButton = React.ComponentType<CheckboxButtonProps<HTMLInputElement>>;

export type Options = Array<{
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    name: string;
    value?: string;
}>;
export interface CheckboxGroupProps<T> {
    children?: JSX.Element[] | JSX.Element;
    error?: string;
    inline?: boolean;
    onChange?: (items?: Options, event?: React.ChangeEvent<T>) => void;
    options?: Options;
    type: 'checkbox' | 'button';
    theme?: {
        colors?: object;
        spacing?: object;
    };
}

export class CheckboxGroup<T = HTMLInputElement> extends React.Component<CheckboxGroupProps<T>> {
    static Checkbox: CheckboxType;
    static Button: CheckboxButton;
}
