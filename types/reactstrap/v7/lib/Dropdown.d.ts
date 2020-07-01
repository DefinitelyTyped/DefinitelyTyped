import * as React from 'react';
import { CSSModule } from '../index';

export type Direction =
  | "up"
  | "down"
  | "left"
  | "right";

export type UncontrolledProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
  cssModule?: CSSModule;
  nav?: boolean;
  inNavbar?: boolean;
  setActiveFromChild?: boolean;
} & T;

export type UncontrolledDropdownProps<T = {}> = UncontrolledProps<T>;

export type Props<T = {}> = UncontrolledProps<T> & {
  disabled?: boolean;
  direction?: Direction;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  addonType?: boolean | 'prepend' | 'append';
};

export type DropdownProps<T = {}> = Props<T>;

declare class Dropdown<T = {[key: string]: any}> extends React.Component<DropdownProps<T>> {}
export default Dropdown;
