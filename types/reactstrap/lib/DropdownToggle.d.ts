interface Props {
  caret?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  'data-toggle'?: string;
  'aria-haspopup'?: boolean;
  split?: boolean;
  tag?: React.ReactType;
  nav?: boolean;
  color?: string;
  size?: string;
}

declare var DropdownToggle: React.StatelessComponent<Props>;
export default DropdownToggle;