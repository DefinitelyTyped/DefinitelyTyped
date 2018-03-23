import { CSSModule } from '../index';

export interface ListGroupItemProps extends React.HTMLAttributes<HTMLElement> {
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

declare const ListGroupItem: React.StatelessComponent<ListGroupItemProps>;
export default ListGroupItem;
