import { CSSModule } from '../index';

interface Props {
  tag?: React.ReactType;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  className?: string;
  cssModule?: CSSModule;
  href?: string;

  onClick?: React.MouseEventHandler<any>;
}

declare var ListGroupItem: React.StatelessComponent<Props>;
export default ListGroupItem;
