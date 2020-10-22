import * as React from 'react';
import { CSSModule } from '../index';

export interface NavbarTogglerProps extends React.HTMLProps<HTMLAnchorElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    type?: string;
    className?: string;
    cssModule?: CSSModule;
}

declare class NavbarToggler<T = {[key: string]: any}> extends React.Component<NavbarTogglerProps> {}
export default NavbarToggler;
