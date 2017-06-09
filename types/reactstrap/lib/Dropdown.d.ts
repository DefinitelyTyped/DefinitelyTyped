/// <reference types='tether' />

export interface UncontrolledProps {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
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