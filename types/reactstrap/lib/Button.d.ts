import * as React from 'react';
import { CSSModule } from '../index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    [key: string]: any;
    outline?: boolean;
    active?: boolean;
    block?: boolean;
    color?: string;
    disabled?: boolean;
    tag?: string | React.ReactType;
    innerRef?: React.Ref<HTMLButtonElement>;
    onClick?: React.MouseEventHandler<any>;
    size?: string;
    id?: string;
    style?: React.CSSProperties;
    cssModule?: CSSModule;
    close?: boolean;
}

declare class Button<T = {[key: string]: any}> extends React.Component<ButtonProps> {}
export default Button;
