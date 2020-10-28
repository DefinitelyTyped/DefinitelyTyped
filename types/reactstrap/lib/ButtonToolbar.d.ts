import * as React from 'react';
import { CSSModule } from '../index';

export interface ButtonToolbarProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    'aria-label'?: string;
    cssModule?: CSSModule;
}

declare class ButtonToolbar<T = {[key: string]: any}> extends React.Component<ButtonToolbarProps> {}
export default ButtonToolbar;
