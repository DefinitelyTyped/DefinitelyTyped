import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';

export interface UncontrolledProps extends UncontrolledDropdownProps {
  /* intentionally blank */
}
export interface UncontrolledButtonDropdownProps extends UncontrolledProps {
  /* intentionally blank */
}

export interface ButtonDropdownProps extends DropdownProps {
  /* intentionally blank */
}

declare const ButtonDropdown: React.StatelessComponent<ButtonDropdownProps>;
export default ButtonDropdown;
