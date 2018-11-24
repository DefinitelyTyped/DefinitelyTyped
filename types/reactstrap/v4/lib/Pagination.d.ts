import { CommonProps } from '../index';

interface Props extends CommonProps {
  size?: string;
}

declare var Pagination: React.StatelessComponent<Props>;
export default Pagination;
