import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ListGroupItemProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  className?: string;
  cssModule?: CSSModule;
  href?: string;

  onClick?: ReactDOM.MouseEventHandler<any>;
} & T;

declare class ListGroupItem<T = {[key: string]: any}> extends React.Component<ListGroupItemProps<T>> {}
export default ListGroupItem;
