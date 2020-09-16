import * as React from 'react';
import { CSSModule } from '../index';

export interface NavbarTextProps extends React.HTMLProps<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class NavbarText<T = {[key: string]: any}> extends React.Component<NavbarTextProps> {}
export default NavbarText;
