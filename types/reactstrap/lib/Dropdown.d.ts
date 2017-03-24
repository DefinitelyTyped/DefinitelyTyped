/// <reference types='tether' />

export interface UncontrolledProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export interface Props extends UncontrolledProps {
  disabled?: boolean;
  dropup?: boolean;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  tether?: boolean | Tether.ITetherOptions;
  className?: string;
}

declare var Dropdown: React.StatelessComponent<Props>;
export default Dropdown;