import { CSSModule } from '../index';

interface Props {
  className?: string;
  cssModule?: CSSModule;
  active?: boolean;
  disabled?: boolean;
  tag?: React.ElementType;
}

declare var PaginationItem: React.StatelessComponent<Props>;
export default PaginationItem;
