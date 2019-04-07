import * as React from 'react';
import { CSSModule } from '../index';

export type NavbarProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  light?: boolean;
  dark?: boolean;
  full?: boolean;
  fixed?: string;
  sticky?: string;
  color?: string;
  role?: string;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  expand?: boolean | string;
} & T;

declare class Navbar<T = {[key: string]: any}> extends React.Component<NavbarProps<T>> {}
export default Navbar;
