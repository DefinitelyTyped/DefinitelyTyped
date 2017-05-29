interface Props {
  tag?: React.ReactType;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  className?: string;
  href?: string;
}

declare var ListGroupItem: React.StatelessComponent<Props>;
export default ListGroupItem;