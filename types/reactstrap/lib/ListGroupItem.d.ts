import { CSSModule } from '../index';

export interface ListGroupItemProps {
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

export const ListGroupItem: React.StatelessComponent<ListGroupItemProps>;
