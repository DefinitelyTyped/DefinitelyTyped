/// <reference types='react' />

import { CSSModule } from '../index';

export type Placement
  = 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export interface UncontrolledProps extends React.HTMLAttributes<HTMLElement> {
  target: string | HTMLElement;
  container?: string | HTMLElement;
  delay?: number | {show: number, hide: number};
  className?: string;
  innerClassName?: string;
  autohide?: boolean;
  placement?: Placement;
  modifiers?: object;
  cssModule?: CSSModule;
}
export interface UncontrolledTooltipProps extends UncontrolledProps {
  /* intentionally blank */
}

export interface TooltipProps extends UncontrolledTooltipProps {
  toggle?: () => void;
  isOpen?: boolean;
}

declare const Tooltip: React.StatelessComponent<TooltipProps>;
export default Tooltip;
