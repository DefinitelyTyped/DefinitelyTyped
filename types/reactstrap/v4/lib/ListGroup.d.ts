import { CommonProps } from '../index';

interface Props extends CommonProps {
  flush?: boolean;
}

declare var ListGroup: React.StatelessComponent<Props>;
export default ListGroup;
