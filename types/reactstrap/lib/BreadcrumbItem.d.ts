interface Props {
  tag?: React.ReactType;
  active?: boolean;
  className?: string;
  // if a is passed as a string
  // this could be href
  [others: string]: any;
}

declare var BreadcrumbItem: React.StatelessComponent<Props>;
export default BreadcrumbItem;

