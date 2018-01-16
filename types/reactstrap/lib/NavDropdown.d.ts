import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';

export interface UncontrolledProps extends UncontrolledDropdownProps {
  /* intentionally blank */
}
export interface UncontrolledNavDropdownProps extends UncontrolledProps {
  /* intentionally blank */
}

export interface NavDropdownProps extends DropdownProps {
  /* intentionally blank */
}

declare const NavDropdown: React.StatelessComponent<NavDropdownProps>;
export default NavDropdown;
