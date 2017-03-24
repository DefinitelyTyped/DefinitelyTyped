interface Props extends React.HTMLProps<HTMLAnchorElement> {
  tag?: React.ReactType;
  type?: string;
  className?: string;
  right?: boolean;
  left?: boolean;
}

declare var NavbarToggler: React.StatelessComponent<Props>;
export default NavbarToggler;