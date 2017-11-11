import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';

// tslint:disable-next-line
export interface UncontrolledButtonDropdownProps extends UncontrolledDropdownProps { }
// tslint:disable-next-line
export interface ButtonDropdownProps extends DropdownProps { }

export const ButtonDropdown: React.StatelessComponent<ButtonDropdownProps>;
export default ButtonDropdown;
