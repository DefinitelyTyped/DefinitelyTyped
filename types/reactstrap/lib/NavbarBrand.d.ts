import * as React from 'react';
import { CSSModule } from '../index';

export interface NavbarBrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class NavbarBrand<T = {[key: string]: any}> extends React.Component<NavbarBrandProps> {}
export default NavbarBrand;
