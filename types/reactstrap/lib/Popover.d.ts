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

export interface PopoverProps {
  placement?: Placement;
  target: string;
  isOpen?: boolean;
  tether?: Tether.ITetherOptions;
  className?: string;
  cssModule?: CSSModule;
  toggle?: () => void;
}

declare const Popover: React.StatelessComponent<PopoverProps>;
export default Popover;
