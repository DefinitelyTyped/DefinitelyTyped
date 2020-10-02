import * as React from 'react';
import { CSSModule } from '../index';

export interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    innerRef?: React.Ref<HTMLAnchorElement>;
    disabled?: boolean;
    active?: boolean;
    className?: string;
    cssModule?: CSSModule;
    onClick?: React.MouseEventHandler<any>;
    href?: string;
}

declare class NavLink<T> extends React.Component<NavLinkProps> {}
export default NavLink;
