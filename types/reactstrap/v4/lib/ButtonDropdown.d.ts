import {
  UncontrolledProps as DropdownUncontrolledProps,
  Props as DropdownProps
} from './Dropdown';

// tslint:disable-next-line
export interface UncontrolledProps extends DropdownUncontrolledProps { }
// tslint:disable-next-line
interface Props extends DropdownProps { }

declare var ButtonDropdown: React.StatelessComponent<Props>;
export default ButtonDropdown;