interface Props extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  disabled?: boolean;
  active?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<any>;
  href?: string;
}

declare var NavLink: React.StatelessComponent<Props>;
export default NavLink;
