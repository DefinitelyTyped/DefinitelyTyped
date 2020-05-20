import * as React from 'react';
import { CSSModule } from '../index';

export interface ButtonToolbarProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    'aria-label'?: string;
    className?: string;
    cssModule?: CSSModule;
    role?: string;
}

declare class ButtonToolbar<T = {[key: string]: any}> extends React.Component<ButtonToolbarProps> {}
export default ButtonToolbar;
