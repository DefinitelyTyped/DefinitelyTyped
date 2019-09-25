import * as React from 'react';
import { CSSModule } from '../index';

export interface NavProps extends React.HTMLProps<HTMLUListElement> {
  [key: string]: any;
  tabs?: boolean;
  pills?: boolean;
  vertical?: boolean | string;
  horizontal?: string;
  justified?: boolean;
  fill?: boolean;
  navbar?: boolean;
  card?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class Nav<T = {[key: string]: any}> extends React.Component<NavProps> {}
export default Nav;
