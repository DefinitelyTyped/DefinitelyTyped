import { CSSModule } from '../index';

interface Props {
  tag?: React.ElementType;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  // if a is passed as a string
  // this could be href
  [others: string]: any;
}

declare var BreadcrumbItem: React.StatelessComponent<Props>;
export default BreadcrumbItem;
