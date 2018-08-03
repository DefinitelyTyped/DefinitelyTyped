import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface ListGroupItemProps {
  tag?: React.ReactType;
  active?: boolean;
  disabled?: boolean;
  color?: ThemeColor;
  action?: boolean;
  className?: string;
  cssModule?: CSSModule;
  href?: string;

  onClick?: React.MouseEventHandler<any>;
}

declare const ListGroupItem: React.StatelessComponent<ListGroupItemProps>;
export default ListGroupItem;
