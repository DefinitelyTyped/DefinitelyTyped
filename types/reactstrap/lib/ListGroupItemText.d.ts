import { CSSModule } from '../index';

export interface ListGroupItemTextProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const ListGroupItemText: React.StatelessComponent<ListGroupItemTextProps>;
export default ListGroupItemText;
