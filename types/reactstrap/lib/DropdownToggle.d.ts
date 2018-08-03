import { CSSModule } from '../index';
import { ButtonColor } from "./Color";

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
  color?: ButtonColor;
  size?: string;
}

declare const DropdownToggle: React.StatelessComponent<DropdownToggleProps>;
export default DropdownToggle;
