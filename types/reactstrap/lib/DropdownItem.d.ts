import * as React from 'react';
import { CSSModule } from '../index';

export interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    disabled?: boolean;
    divider?: boolean;
    tag?: React.ElementType;
    header?: boolean;
    cssModule?: CSSModule;
    href?: string;
    toggle?: boolean;
    active?: boolean;
}

declare class DropdownItem<T> extends React.Component<DropdownItemProps> {}
export default DropdownItem;
