import { CommonProps } from '../index';

interface Props extends CommonProps {
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  href?: string;

  onClick?: React.MouseEventHandler<any>;
}

declare var ListGroupItem: React.StatelessComponent<Props>;
export default ListGroupItem;
