import * as React from 'react';
import { CSSModule } from '../index';

export type Direction =
  | "up"
  | "down"
  | "left"
  | "right";

export interface UncontrolledDropdownProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
  cssModule?: CSSModule;
  nav?: boolean;
  inNavbar?: boolean;
  setActiveFromChild?: boolean;
}

export interface DropdownProps extends UncontrolledDropdownProps {
  disabled?: boolean;
  direction?: Direction;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  addonType?: boolean | 'prepend' | 'append';
}

declare class Dropdown<T = {[key: string]: any}> extends React.Component<DropdownProps> {}
export default Dropdown;
