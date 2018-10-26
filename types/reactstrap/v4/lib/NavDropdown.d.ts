import {
  UncontrolledProps as DropdownUncontrolledProps,
  Props as DropdownProps
} from './Dropdown';

// tslint:disable-next-line
export interface UncontrolledProps extends DropdownUncontrolledProps { }
// tslint:disable-next-line
interface Props extends DropdownProps { }

declare var NavDropdown: React.StatelessComponent<Props>;
export default NavDropdown;
