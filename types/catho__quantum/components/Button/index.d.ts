import React = require('react');
import IconButton from './IconButton';

export interface ButtonProps<T> {
    center?: boolean;
    disabled?: boolean;
    stroked?: boolean;
    full?: boolean;
    icon?: string;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    skin?: 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    type?: 'button' | 'reset' | 'submit';
    children?: React.ReactNode[] | React.ReactNode;
    $as?: JSX.Element | string;
    onClick?: React.MouseEventHandler<T>;
    theme?: {
        baseFontSize?: number;
        colors?: object;
        spacing?: object;
        breakpoints?: object;
        components?: {
            button: object;
        };
    };
    id?: string;
}

export default class Button<T = HTMLButtonElement> extends React.Component<ButtonProps<T>> {
    static Icon: IconButton;
}
