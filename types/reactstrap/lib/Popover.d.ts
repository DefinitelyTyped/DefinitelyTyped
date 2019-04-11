import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from '../index';

export type PopoverProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
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
} & T;

export type UncontrolledPopoverProps<T = {}> = PopoverProps<T> & {
    defaultOpen?: boolean;
};

declare class Popover<T> extends React.Component<PopoverProps<T>> {}
export default Popover;
