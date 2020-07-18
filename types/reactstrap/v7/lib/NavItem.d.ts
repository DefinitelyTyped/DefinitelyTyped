import * as React from 'react';
import { CSSModule } from '../index';

export type NavItemProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class NavItem<T = {[key: string]: any}> extends React.Component<NavItemProps<T>> {}
export default NavItem;
