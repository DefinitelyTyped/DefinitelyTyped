interface Props extends React.HTMLProps<HTMLUListElement> {
  inline?: boolean;
  disabled?: boolean;
  tabs?: boolean;
  pills?: boolean;
  stacked?: boolean;
  navbar?: boolean;
  tag?: React.ReactType;
  className?: string;
  vertical?: boolean;
}

declare var Nav: React.StatelessComponent<Props>;
export default Nav;
