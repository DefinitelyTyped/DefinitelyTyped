import * as React from 'react';
import { CSSModule } from '../index';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    light?: boolean;
    dark?: boolean;
    full?: boolean;
    fixed?: string;
    sticky?: string;
    color?: string;
    tag?: React.ElementType;
    cssModule?: CSSModule;
    expand?: boolean | string;
}

declare class Navbar<T = {[key: string]: any}> extends React.Component<NavbarProps> {}
export default Navbar;
