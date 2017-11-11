import { CSSModule } from '../index';

export interface PaginationItemProps {
  className?: string;
  cssModule?: CSSModule;
  active?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
}

export const PaginationItem: React.StatelessComponent<PaginationItemProps>;
export default PaginationItem;
