import * as React from 'react';
import { CSSModule } from '../index';

export interface NavbarTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class NavbarToggler<T = {[key: string]: any}> extends React.Component<NavbarTogglerProps> {}
export default NavbarToggler;
