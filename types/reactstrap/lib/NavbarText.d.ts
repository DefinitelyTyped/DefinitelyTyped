import * as React from 'react';
import { CSSModule } from '../index';

export interface NavbarTextProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class NavbarText<T = {[key: string]: any}> extends React.Component<NavbarTextProps> {}
export default NavbarText;
