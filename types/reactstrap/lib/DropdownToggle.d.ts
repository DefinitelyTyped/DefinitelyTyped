import { CSSModule } from '../index';

export interface DropdownToggleProps {
  caret?: boolean;
  className?: string;
  cssModule?: CSSModule;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  'data-toggle'?: string;
  'aria-haspopup'?: boolean;
  split?: boolean;
  tag?: React.ReactType;
  nav?: boolean;
  color?: string;
  size?: string;
}

export const DropdownToggle: React.StatelessComponent<DropdownToggleProps>;
