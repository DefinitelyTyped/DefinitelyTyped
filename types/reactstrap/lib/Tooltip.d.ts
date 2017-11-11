/// <reference types='tether' />

import { CSSModule } from '../index';

type Placement
  = 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right middle'
  | 'right bottom'
  | 'bottom right'
  | 'bottom center'
  | 'bottom left'
  | 'left top'
  | 'left middle'
  | 'left bottom';

export interface UncontrolledTooltipProps {
  placement?: Placement;
  target: string;
  disabled?: boolean;
  tether?: Tether.ITetherOptions;
  tetherRef?: (tether: Tether) => void;
  className?: string;
  cssModule?: CSSModule;
  autohide?: boolean;
  delay?: number | { show: number, hide: number };
}

export interface TooltipProps extends UncontrolledTooltipProps {
  toggle?: () => void;
  isOpen?: boolean;
}

export const Tooltip: React.StatelessComponent<TooltipProps>;
export default Tooltip;
