import * as React from 'react';
import { CSSModule } from '../index';

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    active?: boolean;
    className?: string;
    cssModule?: CSSModule;
}

declare class NavItem<T = {[key: string]: any}> extends React.Component<NavItemProps> {}
export default NavItem;
