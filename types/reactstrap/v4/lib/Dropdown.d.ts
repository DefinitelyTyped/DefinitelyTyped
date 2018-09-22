/// <reference types='tether' />

import { CSSModule } from '../index';

export interface UncontrolledProps {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
  cssModule?: CSSModule;
}

export interface Props extends UncontrolledProps {
  disabled?: boolean;
  dropup?: boolean;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  tether?: boolean | Tether.ITetherOptions;
}

declare var Dropdown: React.StatelessComponent<Props>;
export default Dropdown;
