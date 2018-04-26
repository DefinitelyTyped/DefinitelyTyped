import { CSSModule } from '../index';

export interface ListGroupItemHeadingProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const ListGroupItemHeading: React.StatelessComponent<ListGroupItemHeadingProps>;
export default ListGroupItemHeading;
