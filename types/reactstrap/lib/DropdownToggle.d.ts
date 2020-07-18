import * as React from 'react';
import { CSSModule } from '../index';

export interface DropdownToggleProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    caret?: boolean;
    className?: string;
    cssModule?: CSSModule;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<any>;
    outline?: boolean;
    'data-toggle'?: string;
    'aria-haspopup'?: boolean;
    split?: boolean;
    tag?: string | React.ReactType;
    nav?: boolean;
    color?: string;
    size?: string;
}

declare class DropdownToggle<T> extends React.Component<DropdownToggleProps> {}
export default DropdownToggle;
