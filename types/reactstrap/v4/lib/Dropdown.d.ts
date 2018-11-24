/// <reference types='tether' />

import { CommonProps } from '../index';

export interface UncontrolledProps extends CommonProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export interface Props extends UncontrolledProps {
  disabled?: boolean;
  dropup?: boolean;
  group?: boolean;
  size?: string;
  tether?: boolean | Tether.ITetherOptions;
}

declare var Dropdown: React.StatelessComponent<Props>;
export default Dropdown;
