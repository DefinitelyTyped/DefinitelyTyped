import * as React from 'react';
import { CSSModule } from '../index';

export type NavProps<T = {}> = React.HTMLProps<HTMLUListElement> & {
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
} & T;

declare class Nav<T = {[key: string]: any}> extends React.Component<NavProps<T>> {}
export default Nav;
