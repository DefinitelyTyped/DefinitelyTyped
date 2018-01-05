/// <reference types='react' />
/// <reference path="./Popper.d.ts" />

import { CSSModule } from '../index';

export interface PopoverProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  toggle?: () => void;
  target: string | HTMLElement;
  container?: string | HTMLElement;
  className?: string;
  placement?: Popper.Placement;
  innerClassName?: string;
  disabled?: boolean;
  placementPrefix?: string;
  delay?: number | {show: number, hide: number};
  modifiers?: Popper.Modifiers;
  cssModule?: CSSModule;
}

declare const Popover: React.StatelessComponent<PopoverProps>;
export default Popover;
