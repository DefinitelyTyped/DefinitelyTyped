import { CSSModule } from '../index';

export interface PaginationItemProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  cssModule?: CSSModule;
  active?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
}

declare const PaginationItem: React.StatelessComponent<PaginationItemProps>;
export default PaginationItem;
