import * as React from 'react';
import { CSSModule } from '../index';
import { Popper } from './Popper';

export type PopoverProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  isOpen?: boolean;
  toggle?: () => void;
  target: string | HTMLElement;
  container?: string | HTMLElement;
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

declare class Popover<T> extends React.Component<PopoverProps<T>> {}
export default Popover;
