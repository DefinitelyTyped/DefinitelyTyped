import { CSSModule } from '../index';

export interface DropdownToggleProps extends React.HTMLAttributes<HTMLElement> {
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

declare const DropdownToggle: React.StatelessComponent<DropdownToggleProps>;
export default DropdownToggle;
