import { CSSModule } from '../index';

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  active?: boolean;
  className?: string;
  cssModule?: CSSModule;
  // if a is passed as a string
  // this could be href
  [others: string]: any;
}

declare const BreadcrumbItem: React.StatelessComponent<BreadcrumbItemProps>;
export default BreadcrumbItem;
