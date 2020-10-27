import * as React from 'react';
import { CSSModule } from '../index';

export interface ToastHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
    wrapTag?: React.ElementType;
    toggle?: React.MouseEventHandler<any>;
    icon?: string | React.ReactNode;
    close?: React.ReactNode;
    charCode?: string | number;
    closeAriaLabel?: string;
}

declare class ToastHeader<T = {[key: string]: any}> extends React.Component<ToastHeaderProps> {}
export default ToastHeader;
