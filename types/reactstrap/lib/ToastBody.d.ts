import * as React from 'react';
import { CSSModule } from '../index';

export interface ToastBodyProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
    innerRef?: React.Ref<HTMLElement>;
}

declare class ToastBody<T = {[key: string]: any}> extends React.Component<ToastBodyProps> {}
export default ToastBody;
