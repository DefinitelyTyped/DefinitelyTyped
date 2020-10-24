import * as React from 'react';
import { CSSModule } from '../index';

export interface NavProps extends React.HTMLAttributes<HTMLUListElement> {
    [key: string]: any;
    tabs?: boolean;
    pills?: boolean;
    vertical?: boolean | string;
    horizontal?: string;
    justified?: boolean;
    fill?: boolean;
    navbar?: boolean;
    card?: boolean;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class Nav<T = {[key: string]: any}> extends React.Component<NavProps> {}
export default Nav;
