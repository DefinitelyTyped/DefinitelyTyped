/// <reference types='react' />

import { CSSModule } from '../index';
import Popper from './Popper';

export interface UncontrolledProps extends React.HTMLAttributes<HTMLElement> {
  target: string | HTMLElement;
  container?: string | HTMLElement;
  delay?: number | {show: number, hide: number};
  className?: string;
  innerClassName?: string;
  autohide?: boolean;
  placement?: Popper.Placement;
  modifiers?: Popper.Modifiers;
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
