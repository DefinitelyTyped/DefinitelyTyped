import * as React from 'react';
import { CSSModule } from '../index';
import { FadeProps } from './Fade';

export interface UncontrolledAlertProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    className?: string;
    closeClassName?: string;
    closeAriaLabel?: string;
    cssModule?: CSSModule;
    color?: string;
    fade?: boolean;
    tag?: string | React.ReactType;
    transition?: FadeProps;
    innerRef?: React.Ref<HTMLElement>;
}
export interface AlertProps extends UncontrolledAlertProps {
    isOpen?: boolean;
    toggle?: React.MouseEventHandler<any>;
}

declare class Alert<T = {[key: string]: any}> extends React.Component<AlertProps> {}
export default Alert;
