interface Props {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  className?: string;
  href?: string;
}

declare var DropdownItem: React.StatelessComponent<Props>;
export default DropdownItem;
