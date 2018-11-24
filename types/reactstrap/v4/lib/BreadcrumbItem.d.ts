import { CommonProps } from '../index';

interface Props extends CommonProps {
  active?: boolean;
  // if a is passed as a string
  // this could be href
  [others: string]: any;
}

declare var BreadcrumbItem: React.StatelessComponent<Props>;
export default BreadcrumbItem;
