import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from '../index';

export interface UncontrolledTooltipProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  target: string | HTMLElement;
  container?: string | HTMLElement;
  delay?: number | {show: number, hide: number};
  className?: string;
  innerClassName?: string;
  autohide?: boolean;
  placement?: Popper.Placement;
  modifiers?: Popper.Modifiers;
  cssModule?: CSSModule;
  fade?: boolean;
  flip?: boolean;
}

export interface TooltipProps extends UncontrolledTooltipProps {
  toggle?: () => void;
  isOpen?: boolean;
}

declare class Tooltip<T> extends React.Component<TooltipProps> {}
export default Tooltip;
