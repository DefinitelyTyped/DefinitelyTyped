import { CSSModule } from '../index';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
}

declare const Pagination: React.StatelessComponent<PaginationProps>;
export default Pagination;
