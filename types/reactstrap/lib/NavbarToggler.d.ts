import * as React from 'react';
import { CSSModule } from '../index';

export type NavbarTogglerProps<T = {}> = React.HTMLProps<HTMLAnchorElement> & {
  tag?: React.ReactType;
  type?: string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class NavbarToggler<T = {[key: string]: any}> extends React.Component<NavbarTogglerProps<T>> {}
export default NavbarToggler;
