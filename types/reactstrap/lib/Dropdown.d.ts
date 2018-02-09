import { CSSModule } from '../index';

export interface UncontrolledProps {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
  cssModule?: CSSModule;
  nav?: boolean;
  inNavbar?: boolean;
}
export interface UncontrolledDropdownProps extends UncontrolledProps {
  /* intentionally blank */
}

export interface Props extends UncontrolledProps {
  disabled?: boolean;
  dropup?: boolean;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  addonType?: boolean | 'prepend' | 'append';
}
export interface DropdownProps extends Props {
  /* intentionally blank */
}

declare const Dropdown: React.StatelessComponent<DropdownProps>;
export default Dropdown;
