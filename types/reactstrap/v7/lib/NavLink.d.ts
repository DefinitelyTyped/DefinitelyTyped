import * as React from 'react';
import { CSSModule } from '../index';

export type NavLinkProps<T = {}> = React.HTMLProps<HTMLAnchorElement> & {
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLAnchorElement>;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
} & T;

declare class NavLink<T> extends React.Component<NavLinkProps<T>> {}
export default NavLink;
