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

export interface PopoverProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  toggle?: () => void;
  target: string | HTMLElement;
  container?: string | HTMLElement;
  className?: string;
  placement?: Placement;
  innerClassName?: string;
  disabled?: boolean;
  placementPrefix?: string;
  delay?: number | {show: number, hide: number};
  modifiers?: object;
  cssModule?: CSSModule;
}

declare const Popover: React.StatelessComponent<PopoverProps>;
export default Popover;
