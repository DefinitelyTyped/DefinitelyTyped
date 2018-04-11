import { CSSModule } from '../index';

export interface ListGroupProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  flush?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare const ListGroup: React.StatelessComponent<ListGroupProps>;
export default ListGroup;
