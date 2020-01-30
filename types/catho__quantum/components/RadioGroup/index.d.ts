import React = require('react');

type RadioProps = {
    disabled?: boolean;
    error?: boolean;
    children?: string;
    label?: string;
    onChange?: () => void;
    theme?: {
        colors?: object;
        spacing?: object;
    };
    value: string;
};

type Radio = React.ComponentType<RadioProps>;

type RadioButtonProps = {
    checked?: boolean;
    children?: string;
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    disabled?: boolean;
    error?: boolean;
    icon?: string;
    id?: string;
    inline?: boolean;
    label?: string;
    onChange?: () => void;
    theme?: {
        baseFontSize?: number;
        spacing?: object;
        colors?: object;
        components?: {
            button?: object;
        };
    };
    value: string;
};

type RadioButton = React.ComponentType<RadioButtonProps>;

type RadioGroupProps = {
    type?: 'radio' | 'button';
    options?: Array<{
        label?: React.ReactNode;
        value: string;
        disabled?: boolean;
    }>;

    children?: JSX.Element[] | JSX.Element;
    inline?: boolean;
    onChange?: () => void;
    value?: string;
    error?: string;
    theme?: {
        colors?: object;
        spacing?: object;
    };
    name: string;
};

export default class RadioGroup extends React.Component<RadioGroupProps> {
    static Radio: Radio;

    static Button: RadioButton;
}
