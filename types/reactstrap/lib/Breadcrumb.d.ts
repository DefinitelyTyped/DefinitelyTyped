import { CSSModule } from '../index';

export interface BreadcrumbProps {
  tag?: string;
  className?: string;
  cssModule?: CSSModule;
}

export const Breadcrumb: React.StatelessComponent<BreadcrumbProps>;
export default Breadcrumb;
