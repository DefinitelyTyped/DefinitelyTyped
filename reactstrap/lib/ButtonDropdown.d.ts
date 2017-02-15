/// <reference types="react" />
import {
  UncontrolledProps as DropdownUncontrolledProps,
  Props as DropdownProps
} from './Dropdown'

export interface UncontrolledProps extends DropdownUncontrolledProps { }
interface Props extends DropdownProps { }

declare var ButtonDropdown: React.StatelessComponent<Props>
export default ButtonDropdown;