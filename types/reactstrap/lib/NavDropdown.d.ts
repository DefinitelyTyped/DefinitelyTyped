import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';

// tslint:disable-next-line
export interface UncontrolledNavDropdownProps extends UncontrolledDropdownProps { }
// tslint:disable-next-line
export interface NavDropdownProps extends DropdownProps { }

export const NavDropdown: React.StatelessComponent<NavDropdownProps>;
export default NavDropdown;
