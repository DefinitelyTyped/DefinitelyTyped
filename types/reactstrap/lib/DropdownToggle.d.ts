import * as React from 'react';
import { CSSModule } from '../index';

export interface DropdownToggleProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    caret?: boolean;
    cssModule?: CSSModule;
    disabled?: boolean;
    outline?: boolean;
    'data-toggle'?: string;
    'aria-haspopup'?: boolean;
    split?: boolean;
    tag?: React.ElementType;
    nav?: boolean;
    color?: string;
    size?: string;
}

declare class DropdownToggle<T> extends React.Component<DropdownToggleProps> {}
export default DropdownToggle;
