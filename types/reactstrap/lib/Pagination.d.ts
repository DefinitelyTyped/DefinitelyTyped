import { CSSModule } from '../index';

export interface PaginationProps {
  className?: string;
  cssModule?: CSSModule;
  size?: string;
}

export const Pagination: React.StatelessComponent<PaginationProps>;
export default Pagination;
