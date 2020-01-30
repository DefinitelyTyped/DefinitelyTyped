import React = require('react');

type CheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    children?: string;
    error?: string;
    id?: string;
    label?: string;
    name: string;
    value?: string;
    onChange?: () => void;
    theme?: {
        colors?: object;
        spacing?: object;
        baseFontSize?: number;
    };
};

export class Checkbox extends React.Component<CheckboxProps> {}
type CheckboxType = React.ComponentType<CheckboxProps>;

type CheckboxButtonProps = {
    children?: React.ReactNode[] | React.ReactNode;
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    checked?: boolean;
    disabled?: boolean;
    error?: string;
    id?: string;
    icon?: string;
    label?: string;
    name: string;
    onChange?: () => void;
    value?: string;
};

type CheckboxButton = React.ComponentType<CheckboxButtonProps>;

type CheckboxGroupProps = {
    children?: JSX.Element[] | JSX.Element;
    error?: string;
    inline?: boolean;
    onChange?: () => void;
    options?: Array<{
        checked?: boolean;
        disabled?: boolean;
        label?: React.ReactNode;
        name: string;
        value?: string;
    }>;
    type: 'checkbox' | 'button';
    theme?: {
        colors?: object;
        spacing?: object;
    };
};

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {
    static Checkbox: CheckboxType;
    static Button: CheckboxButton;
}
