import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from '../index';

export interface PopoverProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  isOpen?: boolean;
  toggle?: () => void;
  target: string | HTMLElement;
  container?: string | HTMLElement;
  boundariesElement?: Popper.Boundary | Element;
  className?: string;
  placement?: Popper.Placement;
  innerClassName?: string;
  disabled?: boolean;
  hideArrow?: boolean;
  placementPrefix?: string;
  delay?: number | {show: number, hide: number};
  modifiers?: Popper.Modifiers;
  cssModule?: CSSModule;
  fade?: boolean;
  flip?: boolean;
}

export interface UncontrolledPopoverProps extends PopoverProps {
    defaultOpen?: boolean;
}

declare class Popover<T> extends React.Component<PopoverProps> {}
export default Popover;
