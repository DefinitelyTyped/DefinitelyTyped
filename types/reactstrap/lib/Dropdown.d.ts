/// <reference types='tether' />

import { CSSModule } from '../index';

export interface UncontrolledDropdownProps {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
  cssModule?: CSSModule;
}

export interface DropdownProps extends UncontrolledDropdownProps {
  disabled?: boolean;
  dropup?: boolean;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  tether?: boolean | Tether.ITetherOptions;
}

export const Dropdown: React.StatelessComponent<DropdownProps>;
export default Dropdown;
