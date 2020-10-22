import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from '../index';

export type UncontrolledProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  target: string | HTMLElement;
  container?: string | HTMLElement;
  delay?: number | {show: number, hide: number};
  className?: string;
  innerClassName?: string;
  autohide?: boolean;
  placement?: Popper.Placement;
  modifiers?: Popper.Modifiers;
  cssModule?: CSSModule;
} & T;
export type UncontrolledTooltipProps<T = {}> = UncontrolledProps<T>;

export type TooltipProps<T = {}> = UncontrolledTooltipProps<T> & {
  toggle?: () => void;
  isOpen?: boolean;
};

declare class Tooltip<T> extends React.Component<TooltipProps<T>> {}
export default Tooltip;
