interface Props extends React.HTMLProps<HTMLAnchorElement> {
  'aria-label'?: string;
  className?: string;
  next?: boolean;
  previous?: boolean;
  tag?: React.ReactType;
}

declare var PaginationLink: React.StatelessComponent<Props>;
export default PaginationLink;