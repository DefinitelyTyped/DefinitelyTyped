import * as React from 'react';
import { CSSModule } from '../index';

export interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    disabled?: boolean;
    divider?: boolean;
    tag?: string | React.ReactType;
    header?: boolean;
    onClick?: React.MouseEventHandler<any>;
    className?: string;
    cssModule?: CSSModule;
    href?: string;
    toggle?: boolean;
    active?: boolean;
}

declare class DropdownItem<T> extends React.Component<DropdownItemProps> {}
export default DropdownItem;
