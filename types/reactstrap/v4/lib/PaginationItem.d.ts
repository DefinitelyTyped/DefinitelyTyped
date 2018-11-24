import { CommonProps } from '../index';

interface Props extends CommonProps {
  active?: boolean;
  disabled?: boolean;
}

declare var PaginationItem: React.StatelessComponent<Props>;
export default PaginationItem;
