import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type NavbarBrandProps<T = {}> = ReactDOM.HTMLProps<HTMLAnchorElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class NavbarBrand<T = {[key: string]: any}> extends React.Component<NavbarBrandProps<T>> {}
export default NavbarBrand;
